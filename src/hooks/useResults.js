import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [yelpResults, setYelpResults] = useState({ $: [], $$: [], $$$: [] });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getData('pasta');
  }, []);

  const filterReasultsByPrice = yelpResults => {
    const groupedYelpResults = { $: [], $$: [], $$$: [] };
    yelpResults.forEach(result => {
      if (result.price) {
        groupedYelpResults[result.price].push(result);
      }
    });
    setYelpResults(groupedYelpResults);
  };

  const getData = async searchTerm => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      if (response) {
        filterReasultsByPrice(response.data.businesses);
        // setYelpResults(response.data.businesses);
      }
    } catch (err) {
      setErrorMessage('Something went wrong, try again later.');
      console.log('error', err.response);
    }
  };
  return [getData, yelpResults, errorMessage];
};

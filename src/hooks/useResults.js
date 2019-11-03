import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [yelpResults, setYelpResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getData('');
  }, []);

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
        setYelpResults(response.data.businesses);
      }
    } catch (err) {
      setErrorMessage('Something went wrong, try again later.');
      console.log('error', err);
    }
  };
  return [getData, yelpResults, errorMessage];
};

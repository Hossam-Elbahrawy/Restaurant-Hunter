import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [getData, yelpResults, errorMessage, setErrorMessage] = useResults();

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        onChangeTerm={newTerm => {
          setErrorMessage('');
          setSearchTerm(newTerm);
        }}
        onSubmitTerm={() => getData(searchTerm)}
      />
      {errorMessage.length !== 0 ? (
        <Text style={styles.erroMessageStyle}>{errorMessage}</Text>
      ) : (
        <ScrollView>
          <ResultsList data={yelpResults['$']} title='Cost Effective' />
          <ResultsList data={yelpResults['$$']} title='Bit Pricier' />
          <ResultsList data={yelpResults['$$$']} title='Big Spender' />
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  erroMessageStyle: {
    margin: 20,
    fontSize: 20,
    color: '#a22'
  }
});

export default SearchScreen;

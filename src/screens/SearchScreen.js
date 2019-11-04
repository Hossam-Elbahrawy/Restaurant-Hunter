import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [getData, yelpResults, errorMessage] = useResults();

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        onChangeTerm={setSearchTerm}
        onSubmitTerm={() => getData(searchTerm)}
      />
      {errorMessage.length !== 0 ? (
        <Text style={styles.erroMessageStyle}>{errorMessage}</Text>
      ) : null}
      <ScrollView>
        <ResultsList data={yelpResults['$']} title='Cost Effective' />
        <ResultsList data={yelpResults['$$']} title='Bit Pricier' />
        <ResultsList data={yelpResults['$$$']} title='Big Spender' />
      </ScrollView>
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

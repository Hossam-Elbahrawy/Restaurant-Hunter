import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [getData, yelpResults, errorMessage] = useResults();

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onChangeTerm={setSearchTerm}
        onSubmitTerm={() => getData(searchTerm)}
      />
      {errorMessage.length !== 0 ? (
        <Text style={styles.erroMessageStyle}>{errorMessage}</Text>
      ) : null}
      <ResultsList data={yelpResults['$']} title='Cost Effective' />
      <ResultsList data={yelpResults['$$']} title='Bit Pricier' />
      <ResultsList data={yelpResults['$$$']} title='Big Spender' />
    </View>
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

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [getData, yelpResults, errorMessage] = useResults();

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onChangeTerm={newTerm => {
          setErrorMessage('');
          setSearchTerm(newTerm);
        }}
        onSubmitTerm={() => getData(searchTerm)}
      />
      {errorMessage.length === 0 ? (
        <Text style={{ fontSize: 20, margin: 20 }}>
          We have found {yelpResults.length} results
        </Text>
      ) : (
        <Text style={styles.erroMessageStyle}>{errorMessage}</Text>
      )}
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

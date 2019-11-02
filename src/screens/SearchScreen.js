import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onChangeTerm={searchInput => setSearchTerm(searchInput)}
      />
      <Text> {searchTerm}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  //   style
});

export default SearchScreen;

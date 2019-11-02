import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ searchTerm, onChangeTerm }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name='search' style={styles.iconStyle} />
      <TextInput
        placeholder='Search'
        value={searchTerm}
        onChangeText={newTerm => onChangeTerm(newTerm)}
        style={styles.inputStyle}
        autoCapitalize='none'
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    height: 50,
    borderRadius: 5,
    marginVertical: 15,
    marginHorizontal: 15,
    backgroundColor: '#f0eeee',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  }
});

export default SearchBar;

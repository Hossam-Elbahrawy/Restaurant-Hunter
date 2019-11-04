import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ title, data, navigation }) => {
  if (!data.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={restaurant => restaurant.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantInfo', { id: item.id })
              }
            >
              <ResultsDetail navigation={navigation} restaurant={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  titleStyle: {
    letterSpacing: 1,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  }
});

export default withNavigation(ResultsList);

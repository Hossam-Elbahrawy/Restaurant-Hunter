import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const RestaurantInfo = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);
  const id = navigation.getParam('id');

  const getData = async id => {
    const response = await yelp.get(`/${id}`);
    if (response) {
      setRestaurant(response.data);
    }
    console.log('response ', response.data);
  };

  useEffect(() => {
    getData(id);
  }, []);

  if (!restaurant) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.restaurantName}> {restaurant.name}</Text>
      <FlatList
        horizontal
        data={restaurant.photos}
        showsHorizontalScrollIndicator={false}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return (
            <Image source={{ uri: item }} style={styles.ImageStyle}></Image>
          );
        }}
      />
      <Text> Rating: {restaurant.rating} Starts</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginVertical: 15
  },
  restaurantName: {
    alignSelf: 'center',
    fontSize: 22,
    letterSpacing: 1,
    fontWeight: 'bold',
    marginVertical: 10
  },
  ImageStyle: {
    borderRadius: 4,
    marginHorizontal: 5,
    height: 250,
    width: 300,
    marginBottom: 10
  }
});

export default RestaurantInfo;

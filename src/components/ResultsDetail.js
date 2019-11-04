import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ResultsDetail = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageSytle}
        source={{ uri: restaurant.image_url }}
      ></Image>
      <Text style={styles.NameStyle}>{restaurant.name}</Text>
      <Text>
        {restaurant.rating} Stars, {restaurant.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  NameStyle: {
    fontWeight: 'bold',
    letterSpacing: 1
  },
  imageSytle: {
    borderRadius: 4,
    width: 250,
    height: 140,
    marginBottom: 4
  }
});

export default ResultsDetail;

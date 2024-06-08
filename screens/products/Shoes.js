import { View, Text, ScrollView, Image, StyleSheet, Pressable ,FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

const Shoes = () => {
  const navigation=useNavigation();
  const products=[
    {
    id: 12,
    name: 'Casual Shoes Men',
    image: 'https://www.campusshoes.com/cdn/shop/products/CAMPTORQUE_22G-987_BLU-2_540x.jpg?v=1705481780',
    rating: 4.8,
    totalRatings: 1089,
    price: 620,
    originalPrice: 780,
    discount: 20,
    qtysold: 1500,
    size: ['8', '9', '10', '12'],
    colors: ['Black', 'White', 'Yellow', 'Red'],
    sellername: 'Campus Ltd.',
  },
    {
    id: 13,
    name: 'Foraml Shoe',
    image: 'https://m.media-amazon.com/images/I/51sGdEwrHbL._SX679_.jpg',
    rating: 4.8,
    totalRatings: 1089,
    price: 620,
    originalPrice: 780,
    discount: 20,
    qtysold: 1500,
    size: ['8', '9', '10', '12'],
    colors: ['Black', 'White', 'Yellow', 'Red'],
    sellername: 'Campus Ltd.',
  },
    {
    id: 14,
    name: 'Boots',
    image: 'https://m.media-amazon.com/images/I/51RJwPubrPL._SY625_.jpg',
    rating: 4.8,
    totalRatings: 1089,
    price: 620,
    originalPrice: 780,
    discount: 20,
    qtysold: 1500,
    size: ['8', '9', '10', '12'],
    colors: ['Black', 'White', 'Yellow', 'Red'],
    sellername: 'Campus Ltd.',
  },
    {
    id: 15,
    name: 'Snekers',
    image: 'https://m.media-amazon.com/images/I/61N8lXYxUcL._SY625_.jpg',
    rating: 4.8,
    totalRatings: 1089,
    price: 620,
    originalPrice: 780,
    discount: 20,
    qtysold: 1500,
    size: ['8', '9', '10', '12'],
    colors: ['Black', 'White', 'Yellow', 'Red'],
    sellername: 'Campus Ltd.',
  },
    {
    id: 16,
    name: 'Shoe Men',
    image: 'https://www.campusshoes.com/cdn/shop/products/CAMPTORQUE_22G-987_BLU-2_540x.jpg?v=1705481780',
    rating: 4.8,
    totalRatings: 1089,
    price: 620,
    originalPrice: 780,
    discount: 20,
    qtysold: 1500,
    size: ['8', '9', '10', '12'],
    colors: ['Black', 'White', 'Yellow', 'Red'],
    sellername: 'Campus Ltd.',
  },
   

  ];


  const renderItem = ({ item: product }) => (
    <View style={styles.productContainer}>
      <Pressable onPress={() => navigation.navigate('Details', { product })}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <Text style={styles.productName}>{product.name}</Text>
        <View style={styles.productRating}>
          <FontAwesome name="star" size={16} color="#1877F2" />
          <Text style={styles.ratingText}>{product.rating}</Text>
          <Text style={styles.totalRatings}>({product.totalRatings})</Text>
        </View>
        <View style={styles.productPricing}>
          <Text style={styles.productPrice}>${product.price}</Text>
          <Text style={styles.originalPrice}>${product.originalPrice}</Text>
          <Text style={styles.discount}>{product.discount}%</Text>
        </View>
      </Pressable>
    </View>
  );
  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={styles.row}
      showsVerticalScrollIndicator={false}
    />
  )
};

const styles=StyleSheet.create({
   horizontalScrollView: {
    marginVertical: 10,
    backgroundColor:'#fff'
  },
  productContainer: {
    backgroundColor:'#fff',
    marginTop:10,
    marginRight: 15,
    alignItems: 'center',
    height:350,
    width:200,
    borderColor:'#e1e1e1',
    borderWidth:0.5,
    borderRadius:8,
  },
  productImage: {
    resizeMode:'contain',
    width: 170,
    height: 250,
    borderRadius: 10,
  },
  productName: {
    fontSize:19,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'left',
  },
  productRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    marginLeft: 5,
    color: 'black',
  },
  totalRatings: {
    marginLeft: 5,
    color: 'gray',
  },
  productPricing: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  productPrice: {
    fontWeight: 'bold',
    color: 'black',
  },
  originalPrice: {
    marginLeft: 5,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  discount: {
    marginLeft: 5,
    color: '#1877F2',
  },

});

export default Shoes;
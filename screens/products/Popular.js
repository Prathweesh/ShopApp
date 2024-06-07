import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const products = [
  {
    id: 1,
    name: 'Tripod DSLR Camera',
    image: 'https://m.media-amazon.com/images/I/61H1dMNTSnL._AC_UY218_.jpg',
    rating: 4.9,
    totalRatings: 1299,
    price: 899,
    originalPrice: 999,
    discount: 20,
    qtysold: 1500,
    size: ['Big', 'Small', 'Medium'],
    colors: ['Black', 'White', 'Gray', 'Red'],
    sellername: 'Appario Ltd.',
  },
  {
    id: 2,
    name: 'Casual Black T-shirt',
    image: 'https://m.media-amazon.com/images/I/31CkyPUs7yL._AC_UL320_.jpg',
    rating: 4.8,
    totalRatings: 1089,
    price: 620,
    originalPrice: 780,
    discount: 20,
    qtysold: 1500,
    size: ['M', 'S', 'L', 'XL'],
    colors: ['Black', 'White', 'Yellow', 'Red'],
    sellername: 'Appario Ltd.',
  },
   {
    id: 3,
    name: 'Sony HeadPhone',
    image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697625540/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/271045_txjjn7.png',
    rating: 4.9,
    totalRatings: 1299,
    price: 899,
    originalPrice: 999,
    discount: 20,
    qtysold: 1500,
    size: ['Big', 'Small', 'Medium'],
    colors: ['Black', 'White', 'Gray', 'Red'],
    sellername: 'Appario Ltd.',
  },
   {
    id: 4,
    name: 'Socks',
    image: 'https://m.media-amazon.com/images/I/81TRdxk1wnL._SY741_.jpg',
    rating: 4.9,
    totalRatings: 1299,
    price: 899,
    originalPrice: 999,
    discount: 20,
    qtysold: 1500,
    size: ['M', 'S', 'L'],
    colors: ['Black', 'White', 'Gray', 'Red'],
    sellername: 'Appario Ltd.',
  },
   {
    id: 5,
    name: 'Mouse',
    image: 'https://m.media-amazon.com/images/I/518YkYPP+8L._AC_UY218_.jpg',
    rating: 4.9,
    totalRatings: 1299,
    price: 899,
    originalPrice: 999,
    discount: 20,
    qtysold: 1500,
    size: ['Noram', 'Large', 'Mini'],
    colors: ['Black', 'White', 'Gray', 'Red'],
    sellername: 'Appario Ltd.',
  },
    {
    id: 6,
    name: 'Tripod DSLR Camera',
    image: 'https://m.media-amazon.com/images/I/71IZf-JZU9L._AC_UY218_.jpg',
    rating: 4.9,
    totalRatings: 1299,
    price: 899,
    originalPrice: 999,
    discount: 20,
    qtysold: 1500,
    size: ['Big', 'Small', 'Medium'],
    colors: ['Black', 'White', 'Gray', 'Red'],
    sellername: 'Appario Ltd.',
  },
  
  
];

const trendingProducts = [
  {
    id: 1,
    name: 'Sports Shoes',
    image: 'https://www.campusshoes.com/cdn/shop/products/CAMPTORQUE_22G-987_RED-BLK-2_540x.jpg?v=1705481699',
    rating: 4.7,
    totalRatings: 899,
    price: 499,
    originalPrice: 699,
    discount: 30,

  },
  {
    id: 2,
    name: 'Head Phones',
    image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697625540/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/271045_txjjn7.png',
    rating: 4.5,
    totalRatings: 1200,
    price: 150,
    originalPrice: 200,
    discount: 25,
  },
  {
    id: 3,
    name: 'Laptop Bag',
    image: 'https://m.media-amazon.com/images/I/31G4L00mBjL._SR480,440_.jpg',
    rating: 4.5,
    totalRatings: 1200,
    price: 150,
    originalPrice: 200,
    discount: 25,
  },
  {
    id: 4,
    name: 'Travel Backpack',
    image: 'https://m.media-amazon.com/images/I/317W2GvsL1L._SR480,440_.jpg',
    rating: 4.5,
    totalRatings: 1200,
    price: 150,
    originalPrice: 200,
    discount: 25,
  },

];

const Popular = () => {
    const navigation=useNavigation();
  return (
    <ScrollView style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
        {products.map((product) => (
          <View key={product.id} style={styles.productContainer}>
          <Pressable onPress={()=>navigation.navigate('Details',{ product })}>
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
        ))}
      </ScrollView>

      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Trending Now</Text>
        <FontAwesome name="arrow-right" size={20} color="#1877F2" />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
        {trendingProducts.map((product) => (
          <View key={product.id} style={styles.trendingContainer}>
            <Image source={{ uri: product.image }} style={styles.trendingproductImage} />
            <Text style={styles.productName}>{product.name}</Text>
           
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  horizontalScrollView: {
    marginVertical: 10,
  },
  productContainer: {
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
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  trendingContainer:{
    marginRight: 15,
    alignItems: 'center',
    height:200,
    borderRadius:8,
    borderWidth:0.5,
    borderColor:'#e1e1e1',
  },
  trendingproductImage:{
    width: 150,
    height: 150,
    borderRadius: 10,
  }
});

export default Popular;

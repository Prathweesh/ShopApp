import { View, Text, ScrollView, Image, StyleSheet, Pressable ,FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

const Clothes = () => {
  const navigation=useNavigation();
  const products=[
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
    id: 7,
    name: 'Casual  T-shirt',
    image: 'https://www.beyoung.in/api/cache/catalog/products/plain_new_update_images_2_5_2022/pick_any_4_plain_t-shirt_combo_base%20_29_07_2023_700x933.jpg',
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
    id: 8,
    name: 'T-shirt',
    image: 'https://m.media-amazon.com/images/I/517wa7Es8uL._SY741_.jpg',
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
    id: 9,
    name: 'Black T-shirt',
    image: 'https://m.media-amazon.com/images/I/51rktXdRynL._SY741_.jpg',
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
    id: 10,
    name: 'Casual shirt',
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
    id: 11,
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

export default Clothes
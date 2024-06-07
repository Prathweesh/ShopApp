import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, Alert, TouchableOpacity } from 'react-native';
import { useRoute,useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Details = () => {
  const route = useRoute();
  const navigation=useNavigation();
  const { product } = route.params;
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.size[0]);
  const [quantity, setQuantity] = useState(1);

const addToCart = async () => {
  try {
    const cart = await AsyncStorage.getItem('cart');
    const cartItems = cart ? JSON.parse(cart) : [];

    const newCartItem = {
      ...product,
      selectedColor,
      selectedSize,
      quantity,
    };

    const itemExists = cartItems.some(
      (item) =>
        item.id === newCartItem.id &&
        item.selectedColor === newCartItem.selectedColor &&
        item.selectedSize === newCartItem.selectedSize
    );

    if (itemExists) {
      Alert.alert('Product Exists', 'This product is already in your cart. Go to cart.');
    } else {
      cartItems.push(newCartItem);
      await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
      Alert.alert('Success', 'Item added to cart');
    }
  } catch (error) {
    console.error('Error adding to cart', error);
  }
};

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.sellerName}>{product.sellername}</Text>
      <View style={styles.productHeader}>
        <Text style={styles.productName}>{product.name}</Text>
        <View style={styles.likeButton}>
          <FontAwesome name="heart" size={20} color="gray" />
        </View>
      </View>
      <Text style={styles.discount}>{product.discount}%</Text>
      <View style={styles.productPricing}>
        <Text style={styles.productPrice}>${product.price}</Text>
        <Text style={styles.originalPrice}>${product.originalPrice}</Text>
        <FontAwesome name="star" size={20} color="#1877F2" style={styles.ratingIcon} />
        <Text style={styles.ratingText}>{product.rating}</Text>
        <Text style={styles.qtySold} >({product.totalRatings }) </Text>
        <Text style={[styles.qtySold, {marginLeft:40}]}>  &gt;{product.qtysold} Sold</Text>
      </View>
      <Text style={styles.heading}>Color Family</Text>
      <View style={styles.colorOptions}>
        {product.colors.map((color) => (
          <TouchableOpacity
            key={color}
            style={[
              styles.colorBubble,
              selectedColor === color && styles.selectedColorBubble,
            ]}
            onPress={() => setSelectedColor(color)}
          >
            <Text style={selectedColor === color ? styles.selectedColorText : styles.colorText}>{color}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        <Text style={styles.heading}>Show Size</Text>
        <Text style={styles.heading}>Quantity</Text>
      </View>
      <View style={styles.row}>
        <Picker
          selectedValue={selectedSize}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedSize(itemValue)}
        >
          {product.size.map((size) => (
            <Picker.Item key={size} label={size} value={size} />
          ))}
        </Picker>
        <Picker
          selectedValue={quantity}
          style={styles.picker}
          onValueChange={(itemValue) => setQuantity(itemValue)}
        >
          {[...Array(10).keys()].map((num) => (
            <Picker.Item key={num + 1} label={`${num + 1}`} value={num + 1} />
          ))}
        </Picker>
      </View>
      <View style={styles.buttonRow}>
        <View style={styles.chatButton}>
          <FontAwesome name="comment" size={24} color="#1877F2" />
          <Text style={styles.chatText}>Chat</Text>
        </View>
        <Pressable style={styles.addToCartButton} onPress={addToCart}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </Pressable>
        <Pressable style={styles.buyNowButton} onPress={()=>{alert('Add the Product to Cart for Buying')}}>
          <Text style={styles.buyNowText}>Buy Now</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  productImage: {
    width: '100%',
    height: 350,
    resizeMode: 'contain',
  },
  sellerName: {
    color: '#1877F2',
    fontSize: 16,
    marginVertical: 10,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  likeButton: {
    backgroundColor: '#e1e1e1',
    padding: 10,
    borderRadius: 50,
  },
  discount: {
    color: '#1877F2',
    fontSize: 16,
    marginVertical: 5,
  },
  productPricing: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  productPrice: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  originalPrice: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: 'gray',
    marginHorizontal: 10,
  },
  ratingIcon: {
    marginHorizontal: 5,
  },
  ratingText: {
    fontSize: 18,
    color: 'black',
  },
  qtySold: {
    fontSize: 18,
    color: 'gray',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  colorOptions: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  colorBubble: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    marginRight: 10,
  },
  selectedColorBubble: {
    borderColor: '#1877F2',
    backgroundColor: '#e7f3ff',
  },
  colorText: {
    color: 'black',
  },
  selectedColorText: {
    color: '#1877F2',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  picker: {
    height: 50,
    width: '48%',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  chatButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  chatText: {
    color: '#1877F2',
    marginLeft: 5,
  },
  addToCartButton: {
    paddingVertical: 15,
    paddingHorizontal: 45,
    borderColor: '#1877F2',
    borderWidth: 1,
    borderRadius: 25,
    marginRight: 10,
  },
  addToCartText: {
    color: '#000',
  },
  buyNowButton: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    backgroundColor: '#1877F2',
    borderRadius: 25,
  },
  buyNowText: {
    color: '#fff',
    fontWeight:'bold'
  },
});

export default Details;

import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Pressable, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { FontAwesome ,Ionicons, AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      setLoading(true);
      try {
        const cart = await AsyncStorage.getItem('cart');
        if (cart) {
          setCartItems(JSON.parse(cart));
        }
      } catch (error) {
        console.error('Error fetching cart items', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
    const intervalId = setInterval(fetchCartItems, 5000); // fetch cart items every 5 seconds
    return () => clearInterval(intervalId);
  }, []);

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map(item => item.id));
    }
    setSelectAll(!selectAll);
  };

  const toggleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const calculateSummary = () => {
    const items = cartItems.length;
    const amount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shippingFee = 60.0; // Example static shipping fee
    const total = amount + shippingFee;
    return { items, amount, shippingFee, total };
  };

  const { items, amount, shippingFee, total } = calculateSummary();

  const handleDelete = async () => {
    try {
      if(selectedItems.length === 0){
        Alert.alert('Warning!', 'No Selected Items');
        return;  
      }  
      const updatedCartItems = cartItems.filter(item => !selectedItems.includes(item.id));
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCartItems));
      setCartItems(updatedCartItems);
      setSelectedItems([]);
      Alert.alert('Success', 'Selected items deleted');
    } catch (error) {
      console.error('Error deleting cart items', error);
    }
  };

  const handleQuantityChange = async (id, delta) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
      }
      return item;
    });

    await AsyncStorage.setItem('cart', JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <TouchableOpacity
        style={[styles.checkbox, selectedItems.includes(item.id) ? styles.selectedCheckbox : {}]}
        onPress={() => toggleSelectItem(item.id)}
      >
        {selectedItems.includes(item.id) && <FontAwesome name="check" size={16} color="white" />}
      </TouchableOpacity>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.productInfo}>
          <Text style={{ fontSize: 18, padding: 2, color: '#999' }}>Size: {item.selectedSize}</Text>
          <Text style={{ fontSize: 18, padding: 2, color: '#999' }}>| Color: {item.selectedColor}</Text>
        </View>
        <View style={styles.productPricing}>
          <Text style={styles.productPrice}>${item.price}</Text>
          <Text style={styles.originalPrice}>${item.originalPrice}</Text>
        </View>
        <View style={styles.qtyandContainer}>
        <View style={styles.qtyContainer}>
          <Pressable onPress={() => handleQuantityChange(item.id, -1)}>
          <AntDesign name='minus' size={20} />
          </Pressable>
          <Text>{item.quantity}</Text>
          <Pressable onPress={() => handleQuantityChange(item.id, 1)}>
          <AntDesign name='plus' size={20} />
          </Pressable>
          </View>
          <Pressable onPress={() => console.log('Toggle favorite')} style={styles.like}>
          <AntDesign name="hearto" size={24} color="black" />
          </Pressable>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          ListEmptyComponent={() => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold' }}>No items in the Cart</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      
      <View style={styles.summaryContainer}>
        <Text style={styles.heading}>Order Summary</Text>
        <View style={styles.summaryRow}>
          <Text>Items</Text>
          <Text style={styles.boldText}>{items}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text>Amount</Text>
          <Text style={styles.boldText}>${amount.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text>Shipping fee</Text>
          <Text style={styles.boldText}>${shippingFee.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text>Total</Text>
          <Text style={styles.boldText}>${total.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.selectAllButton} onPress={toggleSelectAll}>
          <FontAwesome name="check-circle" size={35} color={selectAll ? "#1877F2" : "#e1e1e1"} />
          <Text style={styles.selectAllText}>All</Text>
        </TouchableOpacity>
        <Pressable style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </Pressable>
        <Pressable
        style={[
            styles.checkoutButton,
            selectedItems.length > 0 ? styles.checkoutButtonEnabled : styles.checkoutButtonDisabled,
        ]}
        disabled={selectedItems.length === 0}
        >
        <Text
            style={[
            styles.checkoutButtonText,
            selectedItems.length === 0 && styles.checkoutButtonTextDisabled,
            ]}
        >
            Check Out
        </Text>
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
  cartItem: {
    paddingLeft:10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderColor: '#e1e1e1',
    borderWidth: 0.5,
    borderRadius: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  selectedCheckbox: {
    backgroundColor: '#1877F2',
    borderColor: '#1877F2',
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight:10,
  },
  productDetails: {
    flex: 1,
    padding: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productInfo: {
    flexDirection: 'row',
  },
  productPricing: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  originalPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: 'gray',
    marginLeft: 10,
  },
  qtyandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    width: 250,
    justifyContent: 'space-evenly',
    marginRight:15,
    height: 30,
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    //marginRight:30,
    width: 180,
    justifyContent: 'space-evenly',
    borderWidth: 0.5,
    borderColor: '#e1e1e1',
    height: 30,
  },
  like:{
    borderWidth:0.7,  
    marginLeft:5,
    borderColor:'#e1e1e1',
    width:30,
    height:30,
   justifyContent:'center',
   alignItems:'center'
   },
  summaryContainer: {
    marginTop: 20,
    padding: 20,
    borderWidth: 1,
    backgroundColor:'#CFCFCF',
    borderColor: '#e1e1e1',
    borderRadius: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  selectAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  selectAllText: {
    color: '#1877F2',
    marginLeft: 5,
  },
  deleteButton: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderColor: '#1877F2',
    borderWidth: 1,
    borderRadius: 25,
    marginRight: 10,
  },
  deleteButtonText: {
    color: '#1877F2',
  },
  checkoutButton: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  checkoutButtonEnabled: {
    backgroundColor: '#1877F2',
  },
  checkoutButtonDisabled: {
    backgroundColor: '#e1e1e1',
  },
  checkoutButtonText: {
    color: '#fff',
  },
  checkoutButtonTextDisabled: {
    color: '#a1a1a1',
  },
});

export default Cart;

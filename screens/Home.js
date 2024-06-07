
import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons, FontAwesome ,Feather,MaterialCommunityIcons, FontAwesome6,FontAwesome5} from '@expo/vector-icons';
import Popular from './products/Popular';
import Clothes from './products/Clothes';
import Shoes from './products/Shoes';
import Bags from './products/Bags';
import Watch from './products/Watch';

const TopTab = createMaterialTopTabNavigator();
 
const Home = () => {
  return (  
    <TopTab.Navigator
     screenOptions={{
        tabBarStyle: { 
          backgroundColor: 'white', 
          marginLeft:5,
          marginRight:5,
        },
        tabBarActiveBackgroundColor:'#1877F2',
        tabBarIndicatorStyle:{
        backgroundColor:'#1877F2',
        height:'100%',
        borderRadius:8,
        },
        tabBarActiveTintColor: 'black', 
        tabBarInactiveTintColor:'grey',
        tabBarLabelStyle:{
            fontSize:12,
            fontWeight:'bold'
        },
      }}>
      <TopTab.Screen name="Popular" component={Popular}   
      options={{ tabBarIcon:()=> <FontAwesome name="star-o" size={23} color={'grey'}  />,
      
      }}/>
      <TopTab.Screen name="Clothes" component={Clothes}  
      options={{tabBarIcon:()=> <FontAwesome5 name="tshirt" size={21} color={'grey'} />
      }} />
     <TopTab.Screen name="Shoes" component={Shoes} 
     options={{tabBarIcon:()=> <MaterialCommunityIcons name="shoe-sneaker" size={23} color="grey" />
      }}/>
      <TopTab.Screen name="Bags" component={Bags} 
      options={{tabBarIcon:()=> <FontAwesome5 name="shopping-bag" size={23} color="grey"  />
      }}/>
      <TopTab.Screen name="Watch" component={Watch}
      options={{ tabBarIcon:()=><Feather name="watch" size={23} color="grey"  />
      }}/>
     
    </TopTab.Navigator>
);
     
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginHorizontal: 10,
  },
  iconBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
  },
  iconBackground: {
    alignItems: 'center',
  },
  iconLabel: {
    marginTop: 5,
    fontSize: 12,
  },
  scrollView: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  productContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
  },
  productTitle: {
    fontSize: 16,
    marginTop: 5,
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
    marginTop: 5,
  },
});

export default Home;

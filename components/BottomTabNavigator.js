import React from 'react';
import { StyleSheet, View ,Text, Pressable,SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const MyCustomHomeHeader =()=>{
const navigation=useNavigation();
  return(
    <SafeAreaView>
    <View style={styles.headerContainer}>      
      <View style={styles.headerCenter}>
        <View style={{marginRight:10}}>
        <Pressable onPress={()=>alert('Coming Soon..')} >
        <Ionicons name="menu" size={24} color="black"  />
        </Pressable>
        </View>
        <FontAwesome name="search" size={24} color="#ccc" />
        <Text style={styles.searchPlaceholder}>Search</Text>
        <MaterialIcons  name="filter-center-focus" size={24} color="#000" />
      </View>
      <View style={styles.headerRight} >
      <Pressable onPress={()=>{navigation.navigate('Settings')}}>
        <Ionicons name='options-outline' size={24} color="#fff"  />
      </Pressable>  
      </View>
    </View>
    </SafeAreaView>
  );
}


 const BottomTabNavigator=()=> {
  return (
  
     <Tab.Navigator
        screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
        height: 70,
        },
      }}>
        <Tab.Screen name="Home" component={Home} 
        options={{header: MyCustomHomeHeader,
        tabBarIcon: () => <MaterialCommunityIcons  name='home-circle' size={25} color="grey" />, 
        tabBarActiveBackgroundColor: '#1877F2',   }}/>

        <Tab.Screen name="My Cart" component={Cart} 
        options={{tabBarIcon: () => <Ionicons name='cart' size={25} color="grey" />,
        tabBarActiveBackgroundColor:'#1877F2' ,
        headerRight: () => <Text style={styles.cancelText}>Cancel</Text>, 
        }} />

        <Tab.Screen name="Notifications" component={Notifications} 
        options={{tabBarIcon: () => <Ionicons name='notifications' size={25} color="grey" />,
        tabBarActiveBackgroundColor:'#1877F2' 
        }}/>
        <Tab.Screen name="Profile" component={Profile} 
        options={{
        tabBarIcon: () => <Ionicons name='person' size={25} color="grey" />,
        tabBarActiveBackgroundColor:'#1877F2' 
        }}/>
      </Tab.Navigator>
  
  );
}


const styles = StyleSheet.create({
  headerContainer: {
    //marginTop:40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
  },
  // headerLeft: {
  //   width: '10%',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '88%',
    padding: 10,
    height:48,
    backgroundColor: '#f5f7fc',
    borderRadius: 20,
  },
  searchPlaceholder: {
    flex: 1,
    marginLeft: 10,
    color: '#ccc',
  },
  headerRight: {
    backgroundColor:'black',
    width: '10%',
    height:40,
    borderRadius:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBackground: {
    justifyContent:'center',
    width:40,
    height:40,
    backgroundColor: '#000',
    borderRadius: 20,
    padding: 5,
  },
   cancelText: {
    color: '#1877F2', 
    paddingRight: 30,
    fontWeight:'bold',
    fontSize:18 
  },
});

export default BottomTabNavigator;
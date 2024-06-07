import React from 'react';
import { Vibration,View,Text ,StyleSheet, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './components/BottomTabNavigator';
import {SimpleLineIcons,Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Details from './screens/Details';
import Settings from './screens/Settings';

const Stack =createNativeStackNavigator ();

 const App=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Root" component={BottomTabNavigator}  options={{headerShown:false}}/>
        <Stack.Screen name="Details" component={Details} options={{
          headerRight: () => (
          <View style={styles.headerRightContainer}>
            <Ionicons name="search" size={24} color="grey" style={styles.headerIcon} /> 
            <Pressable onPress={()=>{navigator}}><Ionicons name="bag" size={24} color="grey" style={styles.headerIcon} /></Pressable> 
            <SimpleLineIcons name='options' size={24} color="grey" style={styles.headerIcon} /> 
          </View>
           ),
          }}/>
        <Stack.Screen name="Settings" component={Settings} />
     </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles=StyleSheet.create({
  headerRightContainer:{
    flexDirection:'row',
    marginRight:10,
    width:150,
    justifyContent:'space-between',
  },
});

export default App;
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
const Tab = createBottomTabNavigator();
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import cadastrar from './components/cadastrar';
import consultar from './components/consultar';

	Parse.setAsyncStorage(AsyncStorage);
  
  Parse.initialize('4JzJrSxrtAOcGqxiIKyy1Ueic8Kz1yE0dGrM6cb0','UnxInxzaLSrQR52fZYx34EqcSISA7vQejcBfP4H1');
	Parse.serverURL = 'https://parseapi.back4app.com/';

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
        name = 'cadastrar' compónent = {cadastrar} options ={{tabBarIcon:({color,size})=>(<Ionicons name="add-circle" size={24} color="black" />)}}
        />
        <Tab.Screen
        name = 'consultar' compónent = {consultar} options ={{tabBarIcon:({color,size})=>(<Ionicons name="list" size={24} color="black" />)}}
        />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

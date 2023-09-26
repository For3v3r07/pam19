import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

	Parse.setAsyncStorage(AsyncStorage);
  
  Parse.initialize('4JzJrSxrtAOcGqxiIKyy1Ueic8Kz1yE0dGrM6cb0','UnxInxzaLSrQR52fZYx34EqcSISA7vQejcBfP4H1');
	Parse.serverURL = 'https://parseapi.back4app.com/';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LogIn from './src/logIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/HomeTube';


/////////////////////create a component that return some jsx/simple function ///////////////////////////////
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'> 
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Home" component={Home} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}


//////// export the component to make it available to other parts of the app/////////////////////
export default App;
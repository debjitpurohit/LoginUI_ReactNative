import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import React from 'react'

const Home = ({  route , navigation }) => {
  const name = route.params.myName;

  const submit = () => {
    // navigation.navigate('Login')
    navigation.goBack();
    // Alert.alert("Successfully Logged out");
  }

  return (
    <View style={Styles.container}>
      <Text style={Styles.header}>Welcome {name} 🥰</Text>
      <Button title='Log Out'
        onPress={() => submit()}
        // onPress ={navigation.goBack()} // have to use ()=> call back function to call the function nahole direct back hye jabe
      />
    </View>
  )
};

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  header: {
    color: "#4c5dab",
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Home;
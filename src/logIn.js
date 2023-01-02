import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import CheckBox from "expo-checkbox";



const LogIn = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  // console.log(userName);
  const [password, setPassword] = useState('');
  // console.log(password);
  const [agree, setAgree] = useState(false);
  const submit = () => {
    navigation.navigate('Home' , { myName : `${userName}`});
   // return Alert.alert( `welcome ${userName}`,`your pass is ${password}`);
   return Alert.alert( `welcome ${userName} :)`, "Made with 💞 by: Debjit");

    // if(userName === 'Debjit' && password === '123456'){
    //   navigation.navigate('Home' , { myName : `${userName}`}); // eta age dite hbe pore dile hbe na
    //   return Alert.alert(`Welcome ${userName}`, 'You have successfully logged in');

    // }else{
    //   return Alert.alert('Invalid Credentials', 'Please enter correct credentials :)');
    // }
  };


  return (

    <View style={styles.container}>
      <Text style={styles.header}>CONTACT US</Text>
      <View style={styles.main}>
        <Text style={styles.login}>Login Form ~</Text>
        <Text style={styles.textS}>You can reach us anytime via debu@purohit.com</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.labels}>Enter Your Name</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g :  Debjit Purohit"
            placeholderTextColor="white"
            autoCapitalize='none'
            autoCorrect={false}
            value={userName} //-------------------------
            onChangeText={(name) => setUserName(name)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labels}>Enter Your Password</Text>
          <TextInput
            style={styles.input}
            // placeholder="********"
            placeholderTextColor="white"
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            value={password} //-------------------------
            onChangeText={(pass) => setPassword(pass)}
          />
        </View>
        {/* <CheckBox/> */}
        <View style={styles.wrapper}>
          <CheckBox
            value={agree}
            onValueChange={() => setAgree(!agree)}
            color={agree ? "#4630EB" : undefined}
          />
          <Text style={styles.text}>I have agreed with Tc</Text>
        </View>

        <TouchableOpacity style={[styles.button,
        {
          backgroundColor: agree ? '#4630EB' : 'white',


        },
        ]}
          disabled={!agree}
          onPress={() => submit()}
        >
          <Text style={[styles.buttontext,
          {
            color: agree ? 'white' : 'black',
          },
          ]}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}
////////create a style sheet to style the component/////////////////////
const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: 'rgba(1 ,11, 18,1)',

  },
  header: {
    color: 'white',
    fontSize: 30,

    textAlign: 'center',
    marginTop: 20,
  },
  main: {
    // backgroundColor: 'grey',
    height: "100%",
    // marginLeft: 20,
    paddingTop: 30,
    paddingHorizontal: 30,

  },
  login: {
    // marginTop: 50,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',


  },
  textS: {
    color: 'white',
    marginTop: 20,
    fontSize: 18,
    fontFamily: "monospace",
    lineHeight: 25,


  },
  inputContainer: {
    marginTop: 30,
  },
  labels: {
    fontSize: 18,
    color: 'white',
    marginTop: 10,
    lineHeight: 25,
    marginBottom: 10,
    fontWeight: 'bold',
    // fontFamily: "Aladin_400Regular",
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 5,
    fontSize: 18,
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    fontSize: 18,
    marginLeft: 12,
    width: 150,
    marginTop: 30,
    borderRadius: 5,
    // marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',

  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    paddingVertical: 15,
  },
  text: {
    lineHeight: 18,
    marginLeft: 15,
    color: "white",
    fontSize: 15,
    fontWeight: "bold",

  },

});

//////// export the component to make it available to other parts of the app/////////////////////
export default LogIn;
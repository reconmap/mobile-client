import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Logo from './assets/icon.png'
export default function App() {
  return (
    <View style={styles.container}>
    <Image source={ Logo }/>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <TextInput placeholder="Username" style={styles.textInput}/>
      <TextInput placeholder="Password" style={styles.textInput}/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#1a202c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color:'#edf2f7',
  },
  textInput : {
    padding: 10,
    borderRadius: 10,
    backgroundColor : '#2d3748',
    marginVertical: 10,
    width:'100%'
  }
});

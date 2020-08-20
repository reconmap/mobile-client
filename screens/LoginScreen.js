import 'react-native-gesture-handler';

import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View, Image, TextInput, AsyncStorage,TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import configuration from "./../Configuration";
import AppContext from './../contexts/AppContext'
import Logo from "./../assets/logo_dark_min.png";
import styles,{GRAY_600, RED_600} from './../styles/main'

const LoginScreen = () => {
    const appContext = useContext(AppContext)
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
  
    useEffect(() => { rememberCredentials() }, [])
    const rememberCredentials = async () => {
        const user = await AsyncStorage.getItem('@username')
        user && setUsername(user)
        const pass = await AsyncStorage.getItem('@password')
        pass && setPassword(pass)
    }
    const handleUsername = e => { setUsername(e); };
    const handlePassword = e => { setPassword(e); };
  
    const handleLogin = async () => {
      Keyboard.dismiss()
      setLoading(true);
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);
      const response = await fetch( `${configuration[appContext.env].api.baseUrl}/users/login`, { method: "POST", body: formData } );
      if (response.status !== 200) {
        setError(true);
        setLoading(false);
      } else {
        const responseJson = await response.json();
        appContext.setUserdata(responseJson)
        console.log(responseJson)
        await AsyncStorage.setItem("@reconmap-logged", "true");
        await AsyncStorage.setItem("@accessToken", responseJson.access_token);
        await AsyncStorage.setItem("@username", username);
        await AsyncStorage.setItem("@password", password);
        setError(false);
        appContext.setLogged(true)
      }
      setLoading(false);
    };
  
   
    return <KeyboardAvoidingView style={styles.container} behavior={Platform.select({ ios: 'padding', android: 'none' })} keyboardVerticalOffset={Platform.select({ ios: 50, android: 0 })}>
      <Image source={Logo} style={styles.Logo} />
      <View style={styles.form}>
        <TextInput defaultValue={username} onChangeText={handleUsername} placeholderTextColor={GRAY_600} textContentType="name" autoCapitalize="none" placeholder="Username" style={styles.textInput} />
        <TextInput defaultValue={password} onChangeText={handlePassword} placeholderTextColor={GRAY_600} textContentType="password" secureTextEntry placeholder="Password" style={styles.textInput} />
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}> {!loading ? "Login in" : "Processing..."} </Text>
        </TouchableOpacity>
        {error && ( <Text style={ [styles.legend , { color:RED_600}]}> Oops... Incorrect username and/or password </Text> )}
      </View>
     
  </KeyboardAvoidingView>
  }
export default LoginScreen;
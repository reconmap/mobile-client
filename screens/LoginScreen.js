import 'react-native-gesture-handler';

import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Image, TextInput, AsyncStorage,TouchableOpacity } from "react-native";
import configuration from "./../Configuration";
import AppContext from './../contexts/AppContext'
import Logo from "./../assets/logo_dark_min.png";

const LoginScreen = () => {
    const appContext = useContext(AppContext)
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
  
    const handleUsername = e => { setUsername(e); };
    const handlePassword = e => { setPassword(e); };
  
    const handleLogin = async () => {
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
        await AsyncStorage.setItem("reconmap-logged", "true");
        await AsyncStorage.setItem("accessToken", responseJson.access_token);
        setError(false);
        appContext.setLogged(true)
      }
      setLoading(false);
    };
  
  
    return <View style={styles.container}>
    <Image source={Logo} style={styles.Logo} />
    <View style={styles.form}>
      <TextInput onChangeText={handleUsername} placeholderTextColor="#718096" textContentType="nickname" autoCapitalize="none" placeholder="Username" style={styles.textInput} />
      <TextInput onChangeText={handlePassword} placeholderTextColor="#718096" textContentType="password" secureTextEntry placeholder="Password" style={styles.textInput} />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}> {!loading ? "Login in" : "Processing..."} </Text>
      </TouchableOpacity>
    </View>
    <Text style={styles.text}>
      {error && ( <Text style={{ color: "#e53e3e", marginBottom: 10, width: "100%" }}> Oops... Incorrect username and/or password </Text> )}
      ReconMap is an open source security tool for InfoSec professionals that
      allows them to plan, execute and document reconnaissance projects for
      multiple targets.
    </Text>
  </View>
  }
export default LoginScreen;

  
const styles = StyleSheet.create({
    form: {
      flex: 1,
      justifyContent: "center",
    },
    container: {
      padding: 20,
      flex: 1,
      backgroundColor: "#1a202c",
      alignItems: "center",
      justifyContent: "center",
      alignItems: "stretch",
      justifyContent: "space-evenly",
    },
    text: {
      color: "#a0aec0",
      fontSize: 16,
      textAlign: "center",
      flex: 1,
    },
    button: {
      paddingVertical: 15,
      paddingHorizontal: 10,
  
      borderRadius: 10,
      backgroundColor: "#e53e3e",
      marginVertical: 10,
    },
    buttonText: {
      textAlign: "center",
      fontWeight: "600",
      color: "#edf2f7",
      fontSize: 24,
    },
    textInput: {
      textAlign: "center",
      paddingVertical: 15,
      paddingHorizontal: 10,
      color: "#edf2f7",
      fontSize: 24,
      borderRadius: 10,
      backgroundColor: "#2d3748",
      marginVertical: 5,
    },
    Logo: {
      width: "100%",
      height: 150,
      resizeMode: "contain",
      flex: 0.75,
    },
  });
  
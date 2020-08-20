import React, { useState, useContext, useEffect } from "react";
import { Text, View, SafeAreaView, StyleSheet, ActivityIndicator } from "react-native";
import AppContext from "../contexts/AppContext";
import configuration from "./../Configuration";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const appContext = useContext(AppContext);
  const insets = useSafeAreaInsets();

  const [ tasks , setTasks ] = useState([])
  const fetchTasks = async () => {
    const response = await fetch(`${configuration[appContext.env].api.baseUrl}/tasks`, {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + appContext.userdata.access_token }
    })
    const responseJSON = await response.json()
    setTasks(responseJSON)
    console.log('tasks', responseJSON)
  }
  useEffect(() => { 
    // not implemented yet
    // fetchTasks() 
  }, [])
  
  return (
    <View style={[styles.container,{paddingTop: insets.top,}]} >
      <Text style={styles.title}> Tasks </Text>
        <View style={ styles.listWrapper}>
        { tasks ? tasks.map( (project, index)=>{
            return <TouchableOpacity key={index} style={ styles.listItem}>
              <Text style={ styles.projectName }>{project.name}</Text>
              <Text style={ styles.text }>{project.description}</Text>
            </TouchableOpacity>
          }) : <ActivityIndicator />}
        </View>
          <Text style={styles.text}>Nothing yet</Text>
      </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    paddingVertical: 10,
    textAlign: "left",
    fontSize: 32,
    fontWeight: "800",
    color: "#e53e3e",
    alignItems: "flex-start",
  },
  form: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    padding: 20,
    backgroundColor: "#1a202c",
    flex:1,
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

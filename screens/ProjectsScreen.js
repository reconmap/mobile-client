import React, { useState, useContext, useEffect } from "react";
import { Text, View, SafeAreaView, StyleSheet, ActivityIndicator  } from "react-native";
import AppContext from "../contexts/AppContext";
import configuration from "./../Configuration";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableOpacity } from "react-native-gesture-handler";

const ProjectsScreen = () => {
  const insets = useSafeAreaInsets();

  const appContext = useContext(AppContext)
  const [ projects , setProjects ] = useState()
  const fetchProjects = async () => {
    const response = await fetch(`${configuration[appContext.env].api.baseUrl}/projects`, {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + appContext.userdata.access_token }
    })
    const responseJSON = await response.json()
    setProjects(responseJSON)
  }
  useEffect(() => { fetchProjects() }, [])
  
  return (
      <View style={[styles.container,{paddingTop: insets.top,}]} >

      <Text style={ styles.title }>Projects</Text>
      <View style={ styles.listWrapper}>
      { projects ? projects.map( (project, index)=>{
          return <TouchableOpacity key={index} style={ styles.listItem}>
            <Text style={ styles.projectName }>{project.name}</Text>
            <Text style={ styles.text }>{project.description}</Text>
          </TouchableOpacity>
        }) : <ActivityIndicator />}
      </View>
      </View>
  );
};

export default ProjectsScreen;


const styles = StyleSheet.create({
  title: {
      paddingVertical:10, 
      textAlign:'left',
      fontSize: 32,
      fontWeight:'800',
      color:'#e53e3e',
      alignItems:'flex-start'
    },
    listItem: {
      paddingVertical:10, 
      textAlign:'left',
      alignItems:'flex-start'
    },
    listWrapper: {
      flex:1,
    },
    container: {
      
      paddingHorizontal: 20,
      flex: 1,
      backgroundColor: "#1a202c",
    },
    projectName: {
      color: "#edf2f7",
      fontSize: 20,
      fontWeight:'700'
    },
    text: {
      color: "#a0aec0",
      fontSize: 16,
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
    
  });
  
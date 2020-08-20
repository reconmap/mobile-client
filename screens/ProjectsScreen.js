import React, { useState, useContext, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator  } from "react-native";
import AppContext from "../contexts/AppContext";
import configuration from "./../Configuration";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './../styles/main'
import { SimpleLineIcons } from "@expo/vector-icons";

const ProjectsScreen = ({ navigation }) => {
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
  const handleShowProject = ( project ) => {
    navigation.navigate('ProjectDetails',{project})
  }
  return (
      <View style={[styles.container,{paddingTop: insets.top,}]} >
        <View style={styles.heading}>
          <Text style={ styles.title }>Projects</Text>
          <TouchableOpacity style={styles.button} >
              <SimpleLineIcons name='pencil' size={16} color='white'/><Text style={styles.buttonTextSmall}>New</Text>
            </TouchableOpacity>
        </View>
        <ScrollView style={ styles.listWrapper}>
        { projects ? projects.map( (project, index)=>{
            return <TouchableOpacity key={index} style={ styles.listItem} onPress={()=>handleShowProject(project)}>
              <Text style={ styles.projectName }>{project.name}</Text>
              <Text style={ styles.projectDescription }>{project.description}</Text>
            </TouchableOpacity>
          }) : <ActivityIndicator />}
        </ScrollView>
      </View>
  );
};

export default ProjectsScreen;


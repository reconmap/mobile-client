import React from "react";
import { View, ScrollView, ActivityIndicator  } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './../styles/main'
import useFetch from "../hooks/useFetch";
import ListItem from "../components/ListItem";
import Heading from "../components/Heading";
import BtnPrimary from "../components/BtnPrimary";

const ProjectsScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const {data: projects} = useFetch('/projects')

  const handleShowProject = ( project ) => {
    navigation.navigate('ProjectDetails',{project})
  }
  return (
      <View style={[styles.container,{paddingTop: insets.top,}]} >

      <Heading title="Projects" right={<BtnPrimary icon='pencil' label="New" />} />
      
        <ScrollView style={ styles.listWrapper}>
        { projects ? projects.map( (project, index)=>
             <ListItem 
                      key={index}
                      onPress={()=>handleShowProject(project)}
                      title={project.name}
                      description={project.description}
                    />
          ) : <ActivityIndicator />}
        </ScrollView>
      </View>
  );
};

export default ProjectsScreen;


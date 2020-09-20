import React from "react";
import { View, Alert,ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "../styles/main";
import { ScrollView  } from "react-native-gesture-handler";
import useFetch from "../hooks/useFetch";
import ListItem from "../components/ListItem";
import FullScreenMessage from "../components/FullScreenMessage";
import Heading from "../components/Heading";
import BtnPrimary from "../components/BtnPrimary";

const TasksScreen = () => {
  const insets = useSafeAreaInsets();
  const {data : tasks} = useFetch('/tasks')

  const handleNewTask = () => {
    Alert.prompt( "Enter the name of the task", '', (taskName) => { console.log(taskName); } );
  };
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Heading 
        title="Tasks" 
        right={<BtnPrimary icon='pencil' label="New" onPress={handleNewTask}/>} />

      {!tasks ? 
        <ActivityIndicator /> 
          : tasks.length === 0 ? <FullScreenMessage>Nothing to show</FullScreenMessage> : (
            <ScrollView style={styles.listWrapper}>
              {tasks.map((task, index) => 
                <ListItem key={index} title={task.name} description={task.description ? task.description : 'S/D'} /> 
              )}
           </ScrollView>
        ) }
    </View>
  );
};

export default TasksScreen;

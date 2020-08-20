import React, { useState, useContext, useEffect } from "react";
import { Text, View, Alert, } from "react-native";
import AppContext from "../contexts/AppContext";
import configuration from "./../Configuration";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "../styles/main";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SimpleLineIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  const appContext = useContext(AppContext);
  const insets = useSafeAreaInsets();

  const [tasks, setTasks] = useState();
  const fetchTasks = async () => {
    const response = await fetch(
      `${configuration[appContext.env].api.baseUrl}/tasks`,
      { method: "GET", headers: { Authorization: "Bearer " + appContext.userdata.access_token, },
      }
    );
    const responseJSON = await response.json();
    setTasks(responseJSON);
  };
  useEffect(() => { fetchTasks(); }, []);

  const handleNewTask = () => {
    Alert.prompt( "Enter the name of the task", '', (taskName) => { console.log(taskName); } );
  };
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.heading}>
        <Text style={styles.title}>Tasks</Text>
        <TouchableOpacity style={styles.button} onPress={handleNewTask}>
          <SimpleLineIcons name="pencil" size={16} color="white" />
          <Text style={styles.buttonTextSmall}>New</Text>
        </TouchableOpacity>
      </View>

      {tasks ? (
        <View style={styles.listWrapper}>
          {tasks.map((task, index) => {
            return (
              <TouchableOpacity key={index} style={styles.listItem}>
                <Text style={styles.projectName}>{task.name}</Text>
                <Text style={styles.text}>{task.description}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ) : (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={styles.legend}>Nothing to show </Text>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

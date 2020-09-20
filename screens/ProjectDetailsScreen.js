import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "../styles/main";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SimpleLineIcons } from "@expo/vector-icons";
import useFetch from "../hooks/useFetch";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import ListHeader from "../components/ListHeader";

export default function ProjectDetailsScreen({ route, navigation }) {
  const insets = useSafeAreaInsets();
  const { project } = route.params;
  const { data: users } = useFetch(`/projects/${project.id}/users`)
  const { data: targets } = useFetch(`/projects/${project.id}/targets`)
  const { data: vulnerabilities } = useFetch(`/projects/${project.id}/vulnerabilities`)
  const { data: tasks } = useFetch(`/projects/${project.id}/tasks`)
  const handleGoBack = () => { navigation.goBack() }
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.heading}>
        <TouchableOpacity style={styles.buttonBack} onPress={handleGoBack}>
          <SimpleLineIcons name="arrow-left" size={16} color="white" />
        </TouchableOpacity>
        <Text style={styles.title} numberOfLines={3} textBreakStrategy='highQuality' lineBreakMode='tail'>{project.name}</Text>
      </View>

      <ScrollView>
      <Paragraph>{project.description}</Paragraph>


      <ListHeader title={'Users'} />
      { !users ? <ActivityIndicator /> : users.length === 0
        ? <Paragraph>No users assigned</Paragraph> :
        users.map((user, index) =>
          <ListItem key={index} title={user.name} description={user.email} avatar={user.email} />
        )}

      <ListHeader title={'Targets'} />
      { !targets ? <ActivityIndicator /> : targets.length === 0
        ? <Paragraph>No targets available</Paragraph> :
        targets.map((target, index) =>
          <ListItem key={index} title={target.name} description={target.kind} />
        )}

      <ListHeader title={'Vulnerabilities'} />
      { !vulnerabilities ? <ActivityIndicator /> : vulnerabilities.length === 0
        ? <Paragraph>No vulnerabilities available</Paragraph> :
        vulnerabilities.map((vuln, index) =>
          <ListItem key={index} title={vuln.summary} description={vuln.description} />
        )}
      <ListHeader title={'Tasks'} />
      { !tasks ? <ActivityIndicator /> : tasks.length === 0
        ? <Paragraph>No tasks available</Paragraph> :
        tasks.map((task, index) =>
          <ListItem key={index} title={task.name} description={task.description} />
        )}

</ScrollView>
    </View>
  )
}

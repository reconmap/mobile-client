import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "../styles/main";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function ProjectDetailsScreen({ route, navigation }) {
  const insets = useSafeAreaInsets();
  const { project } = route.params;

  const handleGoBack = () => { navigation.goBack() }
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.heading}>
        <TouchableOpacity style={styles.buttonBack} onPress={handleGoBack}>
          <SimpleLineIcons name="arrow-left" size={16} color="white" />
        </TouchableOpacity>
        <Text style={styles.title} numberOfLines={3} textBreakStrategy='highQuality' lineBreakMode='tail'>{project.name}</Text>
      </View>
      <Text style={styles.text}>{project.description}</Text>
    </View>
  );
}

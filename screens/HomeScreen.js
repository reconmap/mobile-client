import React, { useState, useContext } from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import AppContext from "../contexts/AppContext";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './../styles/main'
import { TouchableOpacity } from "react-native-gesture-handler";
import { SimpleLineIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  const appContext = useContext(AppContext);
  const insets = useSafeAreaInsets();
  const handleLogOut = () => {
    appContext.setLogged(false)
  }
  return (
    <View style={[styles.container,{paddingTop: insets.top,}]} >
      <View style={styles.heading}>
        <Text style={styles.title}>Hi {appContext.userdata.name || "User"}</Text>
        <TouchableOpacity style={styles.buttonOutline} onPress={handleLogOut}>
        <SimpleLineIcons name='logout' size={16} color='white'/>
        </TouchableOpacity>
      </View>
      <View style={{ flex:1, justifyContent:'center', }}>
        <Text style={styles.legend}>Nothing to show </Text>
      </View>
    </View>
  );
};

export default HomeScreen;

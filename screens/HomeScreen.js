import React, { useState, useContext } from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import AppContext from "../contexts/AppContext";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './../styles/main'
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SimpleLineIcons } from "@expo/vector-icons";
import FullScreenMessage from "../components/FullScreenMessage";
import Heading from "../components/Heading";
import useFetch from "../hooks/useFetch";

const HomeScreen = () => {
  const appContext = useContext(AppContext);
  const insets = useSafeAreaInsets();
  const handleLogOut = () => {
    appContext.setLogged(false)
  }
  const [auditLogStats] = useFetch('/auditlog/stats')
  const [vulnerabilityStats] = useFetch('/vulnerabilities/stats')

  return (
    <View style={[styles.container,{paddingTop: insets.top,}]} >
      <Heading 
        title={`Hi ${appContext.userdata.name || "User"}`} 
        right={<TouchableOpacity style={styles.buttonOutline} onPress={handleLogOut}>
                <SimpleLineIcons name='logout' size={16} color='white'/>
            </TouchableOpacity>} />
      {! auditLogStats ? <FullScreenMessage>Nothing to show</FullScreenMessage> :
        <ScrollView>
          {auditLogStats.map(log=> <Text>{JSON.stringify(log)}</Text>)}
        </ScrollView>
      }
    </View>
  );
};

export default HomeScreen;

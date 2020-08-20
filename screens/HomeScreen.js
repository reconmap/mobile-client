import React, { useState, useContext } from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import AppContext from "../contexts/AppContext";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const appContext = useContext(AppContext);
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container,{paddingTop: insets.top,}]} >
      <Text style={styles.title}>
        Welcome {appContext.userdata.name || "User"}
      </Text>
      <Text style={styles.text}>Nothing to show </Text>

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

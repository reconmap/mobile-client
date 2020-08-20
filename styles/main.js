import React from "react";
import { StyleSheet } from "react-native";

const DEBUG = false
export const ROUNDED = 5;
export const PADDING_V = 16;
export const PADDING_H = 20;

export const MARGIN_V = 12;
export const MARGIN_H = 8;

export const RED_600 = "#e53e3e";
export const GRAY_200 = "#edf2f7";
export const GRAY_500 = "#a0aec0";
export const GRAY_600 = "#718096";
export const GRAY_700 = "#4a5568";
export const GRAY_800 = "#2d3748";
export const GRAY_900 = "#1a202c";

export const TEXT_DEFAULT = 16;
export const TEXT_XL = 32;
export const TEXT_LG = 24;

const styles = StyleSheet.create({
  heading: {
    flexDirection:'row', 
    justifyContent:'space-between', 
    alignItems:"flex-end",
    height:100,
    width:'100%', 
    borderColor:'red', borderWidth: DEBUG ? 1:0,
    
  },
  title: {
    paddingVertical: PADDING_V,
    textAlign: "left",
    fontSize: TEXT_XL,
    fontWeight: "800",
    color: RED_600,
    marginRight:'auto',
    alignItems: "flex-start",
    borderColor:'pink', borderWidth: DEBUG ? 1:0,
    flex:1
  },
  form: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    padding: PADDING_H,
    backgroundColor: GRAY_900,
    flex: 1,
  },
  text: {
    color: GRAY_500,
    fontSize: TEXT_DEFAULT,
    textAlign: "left",
    width:'100%'
  },
  legend: {
    color: GRAY_700,
    fontSize: TEXT_DEFAULT,
    textAlign: "center",
    width:'100%'
  },
  button: {
    paddingVertical: PADDING_V,
    paddingHorizontal: PADDING_H,
    borderRadius: ROUNDED,
    backgroundColor: RED_600,
    marginVertical: MARGIN_V,
    flexDirection:'row',
    alignItems:'center'
  },
  buttonBack: {
    paddingRight: PADDING_H/2,
    marginVertical: MARGIN_V-3,
    paddingVertical: PADDING_V,
    borderColor:'green', borderWidth: DEBUG ? 1:0,

  },
  buttonOutline: {
    paddingVertical: PADDING_V,
    paddingHorizontal: PADDING_H,
    borderRadius: ROUNDED,
    borderColor: GRAY_800,
    borderWidth:3,
    marginVertical: MARGIN_V-3,
    flexDirection:'row',
    alignItems:'center'
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "600",
    color: GRAY_200,
    fontSize: TEXT_LG,
    marginHorizontal: MARGIN_H
  },
  buttonTextSmall: {
    textAlign: "center",
    fontWeight: "600",
    color: GRAY_200,
    fontSize: TEXT_DEFAULT,
    marginHorizontal: MARGIN_H
  },
  textInput: {
    textAlign: "center",
    paddingVertical: PADDING_V,
    paddingHorizontal: PADDING_H,
    color: GRAY_200,
    fontSize: TEXT_LG,
    borderRadius: ROUNDED,
    backgroundColor: GRAY_800,
    marginVertical: MARGIN_V,
  },
  Logo: {
    width: "100%",
    flex:.6,
    resizeMode: "contain",
  },
  projectName: {
    color: "#edf2f7",
    fontSize: 20,
    fontWeight: "700",
  },
  projectDescription: {
    color: "#a0aec0",
    fontSize: 16,
  },
  listItem: {
    paddingVertical: 10,
    textAlign: "left",
    alignItems: "flex-start",
  },
  listWrapper: {
    flex: 1,
  },
});

export default styles;

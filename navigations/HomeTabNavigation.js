import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProjectStackNavigation from "../navigations/ProjectStackNavigation";
import TasksScreen from "../screens/TasksScreen";
import ReportsScreen from "../screens/ReportsScreen";
import { SimpleLineIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function HomeTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Projects") {
            iconName = "layers";
          } else if (route.name === "Tasks") {
            iconName = "list";
          } else if (route.name === "Reports") {
            iconName = "briefcase";
          }
          return <SimpleLineIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#e53e3e",
        showLabel:false,
        inactiveTintColor: "#a0aec0",
        style: { backgroundColor: '#1a202c', borderTopWidth:0, paddingBottom:10}
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Projects" component={ProjectStackNavigation} />
      <Tab.Screen name="Tasks" component={TasksScreen} />
      <Tab.Screen name="Reports" component={ReportsScreen} />
    </Tab.Navigator>
  );
}

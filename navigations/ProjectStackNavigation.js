import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import ProjectsScreen from "../screens/ProjectsScreen";
import ProjectDetailsScreen from "../screens/ProjectDetailsScreen";

const Stack = createStackNavigator()

const ProjectStackNavigation = () => {
    return  <Stack.Navigator headerMode='none'>
                <Stack.Screen name="Projects" component={ProjectsScreen} />
                <Stack.Screen name="ProjectDetails" component={ProjectDetailsScreen} />
            </Stack.Navigator>
}

export default ProjectStackNavigation
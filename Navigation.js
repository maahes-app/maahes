import { 
  StyleSheet, 
  Text, 
  View 
} from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./Home/Home";
import Workout from "./Home/Workout";

export default function Navigation() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Workout" component={Workout} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
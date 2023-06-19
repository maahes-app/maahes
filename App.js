import { 
  Text, 
  StyleSheet, 
  View
} from "react-native";

import { StatusBar } from "expo-status-bar";

import HomeScreen from "./Home/Home";
import Navigation from "./Navigation";

export default function App() {
  return (
    <Navigation/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})
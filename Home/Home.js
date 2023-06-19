import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";

import FitnessCards from "../components/Cards/Fitness";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.body}>
      <View>
        <Text style={styles.header}>Stay in shape</Text>
        <Text style={styles.test}>All the plans are here!</Text>
      </View>
      <View
        style={{
          width: "95%",
          height: 120,
          margin: 5,
          marginTop: 30,
          left: 5,
          borderRadius: 5,
          backgroundColor: "#d7f2f4",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 5,
          }}
        >
          <View>
            <Text
              style={{
                marginTop: 40,
                color: "black",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Egzersizler
            </Text>
            <Text
              style={{
                textAlign: "center",
                marginTop: 5,
                color: "rgb(3 7 18);",
              }}
            >
              0
            </Text>
          </View>
          <View>
            <Text
              style={{
                marginTop: 40,
                color: "black",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Kilo/Kalori
            </Text>
            <Text
              style={{
                textAlign: "center",
                marginTop: 5,
                color: "rgb(3 7 18);",
              }}
            >
              0
            </Text>
          </View>
          <View>
            <Text
              style={{
                marginTop: 40,
                color: "black",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Dakika
            </Text>
            <Text
              style={{
                textAlign: "center",
                marginTop: 5,
                color: "rgb(3 7 18);",
              }}
            >
              0
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={{ margin: 10, fontSize: 20, fontWeight: "bold", color: "white" }}>Featured workout</Text>
        <FitnessCards />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#242424",
  },
  header: {
    marginTop: 70,
    marginLeft: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  test: {
    marginLeft: 10,
    color: "color: rgb(226 232 240);",
    fontWeight: "bold",
    fontSize: 25,
  },
});

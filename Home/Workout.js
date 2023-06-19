import { 
    Text, 
    View, 
    Image, 
    StyleSheet,
    SafeAreaView
} from "react-native";
import React from "react";

export default function Workout() {
  return (
    <SafeAreaView style={styles.body}>
      <View>
        <Image
          style={{
            width: "100%",
            height: 270,
            
          }}
          source={{
            uri: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/09/training-volume-for-strength-and-muscle-growth.jpg?w=1600&ssl=1",
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#242424",
    }
})
import { 
  Text, 
  View, 
  Pressable, 
  Image, 
} from "react-native";
import React from "react";

import fitness from "../../Data/fitness";
import { useNavigation } from "@react-navigation/native";
import Workout from "../../Home/Workout";

const FitnessCards = () => {
  const fitnessData = fitness;
  const navigation = useNavigation();
  return (
    <View>
      {fitnessData.map((item, key) => (
        <Pressable
          onPress={() => navigation.navigate("Workout")}
          key={key}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Image
            style={{
              width: "95%",
              height: 120,
              marginTop: 10,
              borderRadius: 7,
            }}
            source={{ uri: item.image }}
          />
          <Text
            style={{
              position: "absolute",
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              left: 20,
              top: 20,
            }}
          >
            {item.name}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default FitnessCards;

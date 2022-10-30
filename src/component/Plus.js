import { View, Text } from "react-native";
import React from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";

const Plus = () => {
  return (
    <View
      style={{
        width: 46,
        height: 46,
        borderRadius: 60,
        backgroundColor: "#FFC50D",
      }}
    >
      <Entypo name="plus" size={46} />
    </View>
  );
};

export default Plus;

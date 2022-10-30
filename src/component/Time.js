import { View, Text } from "react-native";
import React from "react";

const Time = () => {
  return (
    <View
      style={{
        width: "90%",
        height: 81,
        backgroundColor: "#FFC50D",
        alignSelf: "center",
        borderRadius: 20,
      }}
    >
      <Text
        style={{
          fontWeight: "700",
          fontSize: 36,
          lineHeight: 51,
          textAlign: "center",
          marginVertical: 15,
        }}
      >
        10:05
      </Text>
    </View>
  );
};

export default Time;

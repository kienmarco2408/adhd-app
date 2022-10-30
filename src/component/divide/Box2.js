import { View, Text } from "react-native";
import React from "react";

const Box2 = () => {
  return (
    <View
      style={{
        marginTop: 41,
        width: 374,
        height: 155,
        alignSelf: "center",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#FFC50D",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          lineHeight: 34.25,
          textAlign: "center",
          fontWeight: "400",
          letterSpacing: "-2%",
        }}
      >
        Class Reunion
      </Text>
      <Text
        style={{
          fontSize: 16,
          lineHeight: 22.83,
          textAlign: "center",
          fontWeight: "400",
          letterSpacing: "-2%",
        }}
      >
        (start in)
      </Text>
      <Text
        style={{
          fontWeight: "700",
          fontSize: 36,
          lineHeight: 51,
          textAlign: "center",
          marginVertical: 15,
        }}
      >
        07:28
      </Text>
    </View>
  );
};

export default Box2;

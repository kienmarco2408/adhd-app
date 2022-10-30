import { View, Text } from "react-native";
import React from "react";

const Schedule = () => {
  return (
    <View style={{ width: 323, height: 645, borderWidth: 4, borderRadius: 20 }}>
      <View
        style={{
          width: "100%",
          height: 75,
          backgroundColor: "#9EC3FF",
          marginTop: 20,
          borderWidth: 1,
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            marginLeft: 9,
            fontSize: 16,
            lineHeight: 22.83,
            letterSpacing: "-2%",
            marginTop: 49,
          }}
        >
          7:00
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "400",
            fontSize: 24,
            lineHeight: 34.25,
            letterSpacing: "-2%",
            marginTop: 22,
            marginHorizontal: 88,
          }}
        >
          Pilates
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: 63,
          backgroundColor: "#FBA4BF",
          flexDirection: "row",
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            marginLeft: 9,
            fontSize: 16,
            lineHeight: 22.83,
            letterSpacing: "-2%",
            marginTop: 40,
          }}
        >
          9:00
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "400",
            fontSize: 24,
            lineHeight: 34.25,
            letterSpacing: "-2%",
            marginTop: 13,
            marginHorizontal: 55,
          }}
        >
          Record songs
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: 55,
          backgroundColor: "#FBBC05",
          borderWidth: 1,
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            marginLeft: 6,
            fontSize: 16,
            lineHeight: 22.83,
            letterSpacing: "-2%",
            marginRight: 50,
            marginTop: 32,
          }}
        >
          10:00
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "400",
            fontSize: 24,
            lineHeight: 34.25,
            letterSpacing: "-2%",
            marginTop: 11,
          }}
        >
          Go to the Gym
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: 109,
          backgroundColor: "#B1DCB3",
          borderWidth: 1,
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            marginLeft: 6,
            fontSize: 16,
            lineHeight: 22.83,
            letterSpacing: "-2%",
            marginTop: 85,
          }}
        >
          12:30
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "400",
            fontSize: 24,
            lineHeight: 34.25,
            letterSpacing: "-2%",
            marginTop: 37,
            marginLeft: 70,
          }}
        >
          Eat Lunch
        </Text>
      </View>
    </View>
  );
};

export default Schedule;

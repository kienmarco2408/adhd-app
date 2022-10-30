import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import Time from "../component/Time";

const Media = () => {
  return (
    <ScrollView style={{ marginBottom: "30%" }}>
      <View style={{ marginTop: 55 }}>
        <Time />
      </View>
      <View
        style={{
          width: 302,
          height: 95.28,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "#FFC50D",
          marginTop: 49,
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            lineHeight: 33.82,
            fontWeight: "700",
          }}
        >
          Meditate Music
        </Text>
      </View>
      <View
        style={{
          width: 302,
          height: 95.28,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "#FFC50D",
          marginTop: 23,
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            lineHeight: 33.82,
            fontWeight: "700",
          }}
        >
          Focus Music
        </Text>
      </View>
      <View
        style={{
          width: 302,
          height: 95.28,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "#FFC50D",
          marginTop: 23,
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            lineHeight: 33.82,
            fontWeight: "700",
          }}
        >
          Sleep Music
        </Text>
      </View>
      <View style={{ alignSelf: "center" }}>
        <Image source={require("../storages/imgs/Frame2.png")} />
      </View>
    </ScrollView>
  );
};

export default Media;

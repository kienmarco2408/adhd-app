import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import Time from "../component/Time";
import { useNavigation } from "@react-navigation/native";

const Expert = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ marginBottom: "30%" }}>
      <View style={{ marginTop: 55 }}>
        <Time />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Document")}>
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
            Documents
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ReachExperts")}>
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
            Reach Experts
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{ alignSelf: "center" }}>
        <Image source={require("../storages/imgs/Frame1.png")} />
      </View>
    </ScrollView>
  );
};

export default Expert;

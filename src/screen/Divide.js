import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import Time from "../component/Time";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Box from "../component/divide/Box";
import Box1 from "../component/divide/Box1";

const Divide = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ marginBottom: "30%" }}>
      <View style={{ marginTop: 55 }}>
        <Time />
      </View>
      <View>
        <Box />
      </View>
      <View>
        <Box1 />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("DivideForm")}>
        <View
          style={{
            width: 74,
            height: 74,
            borderRadius: 60,
            backgroundColor: "#FFC50D",
            alignSelf: "center",
            marginTop: 56,
          }}
        >
          <Entypo name="plus" size={74} />
        </View>
      </TouchableOpacity>
      <View style={{ alignSelf: "center" }}>
        <Image source={require("../storages/imgs/Frame.png")} />
      </View>
    </ScrollView>
  );
};

export default Divide;

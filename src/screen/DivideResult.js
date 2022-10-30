import { View, Text, ScrollView } from "react-native";
import React from "react";
import Time from "../component/Time";
import { useNavigation } from "@react-navigation/native";
import Result from "../component/divide/Result";

const DivideResult = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ marginBottom: "30%" }}>
      <View style={{ marginTop: 55 }}>
        <Time />
      </View>
      <View style={{ marginTop: 41 }}>
        <Result />
      </View>
    </ScrollView>
  );
};

export default DivideResult;

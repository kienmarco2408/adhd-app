import { View, Text, ScrollView } from "react-native";
import React from "react";
import Time from "../component/Time";
import { useNavigation } from "@react-navigation/native";
import Minitask1 from "../component/divide/Minitask1";

const DivideMiniTask = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ marginBottom: "30%" }}>
      <View style={{ marginTop: 55 }}>
        <Time />
      </View>
      <View style={{ marginTop: 41 }}>
        <Minitask1 />
      </View>
    </ScrollView>
  );
};

export default DivideMiniTask;

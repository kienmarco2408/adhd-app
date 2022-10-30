import { View, Text, ScrollView } from "react-native";
import React from "react";
import Time from "../component/Time";
import { useNavigation } from "@react-navigation/native";

import Minitask2 from "../component/divide/Minitask2";

const DivideMiniTask1 = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ marginBottom: "30%" }}>
      <View style={{ marginTop: 55 }}>
        <Time />
      </View>
      <View style={{ marginTop: 41 }}>
        <Minitask2 />
      </View>
    </ScrollView>
  );
};

export default DivideMiniTask1;

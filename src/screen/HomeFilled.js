import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Time from "../component/Time";
import Plus from "../component/Plus";
import ScheduleFilled from "../component/home/ScheduleFilled";

const HomeFilled = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ marginBottom: "30%" }}>
      <View style={{ marginTop: 55 }}>
        <Time />
      </View>
      <View style={{ marginTop: 41 }}>
        <Image source={require("../storages/imgs/home2.png")} />
        <View style={{ alignSelf: "center" }}>
          <Plus />
        </View>
        <View style={{ marginTop: 13, alignSelf: "center" }}>
          <ScheduleFilled />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeFilled;

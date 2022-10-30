import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Button } from "native-base";
import HeaderHome from "../component/home/HeaderHome";
import BannerHome from "../component/home/BannerHome";
import Time from "../component/Time";
import Plus from "../component/Plus";
import Schedule from "../component/home/Schedule";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ marginBottom: "30%" }}>
      <View>
        <HeaderHome />
      </View>
      <View style={{ marginTop: 120 }}>
        <BannerHome />
      </View>
      <View style={{ marginTop: 16 }}>
        <Time />
      </View>
      <View style={{ marginTop: 16 }}>
        <Image
          source={require("../storages/imgs/home1.png")}
          style={{
            width: 401,
            height: 226,
            alignSelf: "center",
            borderRadius: 10,
          }}
        />
      </View>
      <View style={{ marginTop: 35, alignSelf: "center" }}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeFill")}>
          <Plus />
        </TouchableOpacity>
      </View>
      <View style={{ alignSelf: "center", marginTop: 15 }}>
        <Schedule />
      </View>
    </ScrollView>
  );
};

export default Home;

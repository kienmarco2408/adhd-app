import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ListProfes from "../component/expert/ListProfes";

const ReachExperts = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ marginBottom: "30%" }}>
      <View style={{ marginTop: 55, alignSelf: "center" }}>
        <View
          style={{
            width: 374,
            height: 81,
            backgroundColor: "#FFC50D",
            borderRadius: 20,
            flexDirection: "row",
          }}
        >
          <AntDesign
            name="arrowleft"
            style={{ alignSelf: "center", marginRight: 85, marginLeft: 20 }}
            size={40}
            onPress={() => navigation.goBack()}
          />
          <Text
            style={{
              fontWeight: "700",
              fontSize: 36,
              lineHeight: 51,
              alignSelf: "center",
            }}
          >
            10:05
          </Text>
        </View>
      </View>
      <View>
        <ListProfes />
      </View>
    </ScrollView>
  );
};

export default ReachExperts;

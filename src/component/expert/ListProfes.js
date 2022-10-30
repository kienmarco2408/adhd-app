import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { profes } from "../../data/profes";
import { useNavigation } from "@react-navigation/native";

const ListProfes = () => {
  const navigation = useNavigation();
  return profes.map((data, index) => {
    return (
      <View key={index} style={{ marginVertical: 20 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={data.image}
            style={{ width: 85, height: 85, borderRadius: 60 }}
          />

          <View style={{ width: 236, height: 80, marginLeft: 14 }}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 16,
                letterSpacing: -0.32,
                fontWeight: "700",
              }}
            >
              {data.name}
            </Text>
            <Text
              style={{
                marginTop: 7,
                fontSize: 10,
                lineHeight: 16,
                letterSpacing: -0.32,
              }}
            >
              {data.address}
            </Text>
            <Text
              style={{
                marginTop: 7,
                fontSize: 12,
                lineHeight: 16,
                letterSpacing: -0.32,
              }}
            >
              {data.hospital}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  });
};

export default ListProfes;

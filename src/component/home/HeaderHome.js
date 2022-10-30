import { View, Text, Image } from "react-native";
import React from "react";

const HeaderHome = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 238,
        backgroundColor: "#F9BA19",
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        position: "absolute",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginTop: 55,
          marginLeft: "7%",
          alignItems: "center",
        }}
      >
        <View>
          <Image
            source={require("../../storages/imgs/avt.jpg")}
            style={{ width: 65, height: 65, borderRadius: 60 }}
          />
        </View>

        <View style={{ marginLeft: 5, width: 176, height: 57, marginTop: 5 }}>
          <Text
            style={{
              fontSize: 15,
              lineHeight: 21,
              letterSpacing: -0.32,
              fontWeight: "700",
              color: "white",
            }}
          >
            Hi Minh Khue
          </Text>

          <Text
            style={{
              fontSize: 12,
              lineHeight: 21,
              letterSpacing: -0.32,
              fontWeight: "300",
              color: "white",
            }}
          >
            Have a good day
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderHome;

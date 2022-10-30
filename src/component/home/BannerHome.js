import { View, Text, Image } from "react-native";
import React from "react";

const BannerHome = () => {
  return (
    <View
      style={{
        width: "90%",
        height: 180,
        backgroundColor: "#FBA4BF",
        alignSelf: "center",
        marginTop: 11,
        borderRadius: 25,
        flexDirection: "row",
      }}
    >
      <View style={{ width: 154, height: 120, marginLeft: "7%" }}>
        <Text
          style={{
            marginTop: 4,
            fontSize: 48,
            lineHeight: 67,
            fontWeight: "700",
            textAlign: "center",
            color: "white",
          }}
        >
          Now
        </Text>
        <Text
          style={{
            fontSize: 10,
            lineHeight: 21,
            letterSpacing: -0.32,
            textAlign: "center",
            color: "white",
            fontWeight: "400",
          }}
        >
          Don’t let Time Blindness
        </Text>
        <Text
          style={{
            fontSize: 10,
            letterSpacing: -0.32,
            textAlign: "center",
            color: "white",
            fontWeight: "400",
          }}
        >
          defeat you
        </Text>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 21,
            letterSpacing: -0.32,
            textAlign: "center",
            color: "white",
            fontWeight: "700",
          }}
        >
          Get your work done
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 12,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              width: 100,
              height: 32,
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                color: "black",
                fontWeight: "600",
                fontSize: 16,
                width: 36,
                height: 24,
                alignSelf: "center",
                marginVertical: 4,
              }}
            >
              Plan
            </Text>
          </View>
        </View>
      </View>
      <View style={{ bottom: 13 }}>
        <Image
          source={require("../../storages/imgs/banner.png")}
          style={{ width: 212, height: 193 }}
        />
      </View>
    </View>
  );
};

export default BannerHome;

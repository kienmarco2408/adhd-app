import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Entypo, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ScheduleFill = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: 374,
        height: 976,
        borderWidth: 2,
        borderColor: "#FFC50D",
        borderRadius: 20,
        alignSelf: "center",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            marginTop: 21,
            marginLeft: 32,
            fontSize: 16,
            fontWeight: "900",
            lineHeight: 22.54,
            letterSpacing: "0.5%",
          }}
        >
          Task name:
        </Text>
        <TouchableOpacity
          style={{ marginLeft: "auto", marginRight: 10, marginTop: 5 }}
          onPress={() => navigation.goBack()}
        >
          <Feather name="x" size={38} />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 14 }}>
        <TextInput
          style={{
            borderWidth: 2,
            width: 311,
            height: 62,
            borderColor: "#FFC50D",
            borderRadius: 10,
            alignSelf: "center",
          }}
        />
      </View>
      <View>
        <Text
          style={{
            marginTop: 56,
            marginLeft: 32,
            fontSize: 16,
            fontWeight: "900",
            lineHeight: 22.54,
            letterSpacing: "0.5%",
          }}
        >
          Task time:
        </Text>
        <Text style={{ marginLeft: 32, marginTop: 9 }}>
          Start at (Hour:Minute)
        </Text>
        <View style={{ marginTop: 14 }}>
          <TextInput
            style={{
              borderWidth: 2,
              width: 311,
              height: 62,
              borderColor: "#FFC50D",
              borderRadius: 10,
              alignSelf: "center",
            }}
          />
        </View>
        <Text style={{ marginLeft: 32, marginTop: 9 }}>
          End at (Hour:Minute)
        </Text>
        <View style={{ marginTop: 14 }}>
          <TextInput
            style={{
              borderWidth: 2,
              width: 311,
              height: 62,
              borderColor: "#FFC50D",
              borderRadius: 10,
              alignSelf: "center",
            }}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            marginTop: 21,
            marginLeft: 32,
            fontSize: 16,
            fontWeight: "900",
            lineHeight: 22.54,
            letterSpacing: "0.5%",
          }}
        >
          Choose Color
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginHorizontal: 20,
            marginTop: 30,
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 60,
              backgroundColor: "#FBB4A4",
            }}
          />
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 60,
              backgroundColor: "#FFC50D",
            }}
          />
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 60,
              backgroundColor: "#D6245B",
            }}
          />
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 60,
              backgroundColor: "#9EC3FF",
            }}
          />
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 60,
              backgroundColor: "#E7B7F3",
            }}
          />
        </View>
        <View style={{ marginTop: 55 }}>
          <Text
            style={{
              marginLeft: 32,
              fontSize: 16,
              fontWeight: "900",
              lineHeight: 22.54,
              letterSpacing: "0.5%",
            }}
          >
            Picture
          </Text>
          <ScrollView horizontal={true}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../storages/imgs/real1.png")}
                style={{ marginHorizontal: 5 }}
              />
              <Image
                source={require("../../storages/imgs/real2.png")}
                style={{ marginHorizontal: 5 }}
              />
              <Image
                source={require("../../storages/imgs/real3.png")}
                style={{ marginHorizontal: 5 }}
              />
              <Image
                source={require("../../storages/imgs/real4.png")}
                style={{ marginHorizontal: 5 }}
              />
              <Image
                source={require("../../storages/imgs/real5.png")}
                style={{ marginHorizontal: 5 }}
              />
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            width: 164,
            height: 54,
            backgroundColor: "#FFC50D",
            borderRadius: 10,
            marginTop: 68,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: "900",
              lineHeight: 22.54,
              letterSpacing: "0.5%",
              marginVertical: 15,
            }}
          >
            Upload Picture
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("HomeFilled")}>
          <View
            style={{
              width: 74,
              height: 74,
              borderRadius: 60,
              backgroundColor: "#FFC50D",
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              marginTop: 32,
            }}
          >
            <Entypo name="check" size={53} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScheduleFill;

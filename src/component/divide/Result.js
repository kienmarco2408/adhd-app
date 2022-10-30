import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign, Entypo, EvilIcons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Result = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: 374,
        height: 849.3,
        borderWidth: 2,
        borderColor: "#FFC50D",
        borderRadius: 20,
        alignSelf: "center",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View>
          <AntDesign
            name="arrowleft"
            size={48}
            style={{ marginTop: 11, marginLeft: 13 }}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={{ marginLeft: 25, marginTop: 21 }}>
          <Text style={{ fontSize: 16, textAlign: "center" }}>Task</Text>
          <Text
            style={{
              fontSize: 32,
              textAlign: "center",
              fontWeight: "900",
              letterSpacing: "-2%",
            }}
          >
            Class reunion
          </Text>
        </View>

        <Feather
          onPress={() => navigation.navigate("Divide Stack")}
          name="x"
          size={38}
          style={{ marginLeft: "auto", marginRight: 10, marginTop: 11 }}
        />
      </View>
      <View
        style={{
          width: 311,
          height: 376,
          borderColor: "#FFC50D",
          borderWidth: 2,
          borderRadius: 10,
          alignSelf: "center",
          marginTop: 9,
        }}
      >
        <Text
          style={{
            fontWeight: "900",
            fontSize: 36,
            lineHeight: 50.73,
            textAlign: "center",
            marginTop: 21,
          }}
        >
          07:28
        </Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 22.83,
            textAlign: "center",
            fontWeight: "400",
            letterSpacing: "-1%",
          }}
        >
          Until start
        </Text>
        <Text
          style={{
            fontWeight: "900",
            fontSize: 36,
            lineHeight: 50.73,
            textAlign: "center",
            marginTop: 12,
          }}
        >
          2:24
        </Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 22.83,
            textAlign: "center",
            fontWeight: "400",
            letterSpacing: "-1%",
          }}
        >
          Total Duration
        </Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 22.83,
            textAlign: "center",
            fontWeight: "700",
            letterSpacing: "-1%",
            marginTop: 44,
          }}
        >
          Task’s Deadline:
        </Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 22.83,
            textAlign: "center",
            fontWeight: "400",
            letterSpacing: "-1%",
            marginTop: 12,
          }}
        >
          01/09/2022 20:00
        </Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 22.83,
            textAlign: "center",
            fontWeight: "700",
            letterSpacing: "-1%",
            marginTop: 12,
          }}
        >
          You should start at:
        </Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 22.83,
            textAlign: "center",
            fontWeight: "400",
            letterSpacing: "-1%",
            marginTop: 12,
          }}
        >
          01/09/2022 17:36
        </Text>
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
          Mini-Tasks
        </Text>
        <View>
          <Text
            style={{
              marginLeft: 32,
              marginTop: 9,
              fontSize: 16,
              lineHeight: 22.83,
              letterSpacing: "-1%",
              fontWeight: "400",
            }}
          >
            (To finish the Task, you have to finish these Mini-Tasks)
          </Text>
        </View>

        <View style={{ marginTop: 9 }}>
          <View
            style={{
              borderWidth: 2,
              width: 311,
              height: 132,
              borderColor: "#FFC50D",
              borderRadius: 10,
              alignSelf: "center",
              flexDirection: "row",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 26,
                  lineHeight: 22.83,
                  letterSpacing: "-1%",
                  marginTop: 14,
                }}
              >
                1. Iron the dress: 0:24
                {"\n"}2. Curl the hair: 0:24
                {"\n"}3. Do the make-up: 1:12
                {"\n"}4. Get dressed: 0:24
              </Text>
            </View>
            <EvilIcons
              name="pencil"
              size={30}
              style={{ marginLeft: "auto", marginTop: 5, marginRight: 5 }}
            />
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity onPress={() => navigation.navigate("DivideFilled")}>
          <View
            style={{
              width: 148,
              height: 54,
              borderRadius: 10,
              backgroundColor: "#FFC50D",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                lineHeight: 22.83,
                textAlign: "center",
                fontWeight: "700",
                letterSpacing: "-1%",
              }}
            >
              Done
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Divide Stack")}>
          <View
            style={{
              width: 148,
              height: 54,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#FFC50D",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                lineHeight: 22.83,
                textAlign: "center",
                fontWeight: "700",
                letterSpacing: "-1%",
              }}
            >
              Delete Task
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

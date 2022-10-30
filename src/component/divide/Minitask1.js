import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign, Entypo, EvilIcons, Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import PopupInfor from "../Popupinfor";
import { useNavigation } from "@react-navigation/native";

const Minitask1 = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <View>
        <PopupInfor visible={visible}>
          <View style={{ backgroundColor: "white", borderRadius: 20 }}>
            <View
              style={{
                width: 374,
                height: 679,
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
                    onPress={() => setVisible(false)}
                  />
                </View>
                <View style={{ marginLeft: 37, marginTop: 21 }}>
                  <Text style={{ fontSize: 16, textAlign: "center" }}>
                    Mini-Task 1:
                  </Text>
                  <Text
                    style={{
                      fontSize: 32,
                      textAlign: "center",
                      fontWeight: "900",
                      letterSpacing: "-2%",
                    }}
                  >
                    Iron the dress
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: 311,
                  height: 192,
                  backgroundColor: "#FFC50D",
                  borderRadius: 10,
                  alignSelf: "center",
                  marginTop: 9,
                }}
              >
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 16,
                    lineHeight: 22.54,
                    textAlign: "center",
                    marginTop: 10,
                  }}
                >
                  Guide
                </Text>
                <Text
                  style={{
                    marginHorizontal: 26,
                    fontSize: 13,
                    lineHeight: 18.55,
                    marginTop: 2,
                  }}
                >
                  {" "}
                  1. Before this Task is started, what Mini-Tasks have to be
                  done?
                  {"\n"} 2. What Mini-Tasks does this Task include? (use similar
                  past experiences as a guide)
                  {"\n"}3. For Worst-case: Think of possible issues or subtasks
                  that might pop up and add in a buffer of time
                </Text>
              </View>
              <View>
                <View
                  style={{
                    marginTop: 19,
                    width: 311,
                    height: 218,
                    alignSelf: "center",
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: "#FFC50D",
                  }}
                >
                  <Text
                    style={{
                      marginTop: 32,
                      fontSize: 24,
                      lineHeight: 34.25,
                      textAlign: "center",
                      fontWeight: "400",
                      letterSpacing: "-2%",
                    }}
                  >
                    Meeting with doctor
                  </Text>

                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: 36,
                      lineHeight: 51,
                      textAlign: "center",
                      marginVertical: 9,
                    }}
                  >
                    13:25
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      lineHeight: 16.82,
                      textAlign: "center",
                      fontWeight: "400",
                      letterSpacing: "0.5%",
                    }}
                  >
                    Our formula: {"\n"}Estimated time = (Best + Worst*2 +
                    Likely)/4
                  </Text>
                </View>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("DivideMiniTask1");
                    setVisible(false);
                  }}
                >
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
                    <AntDesign name="arrowright" size={53} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </PopupInfor>
      </View>
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
          <View style={{ marginLeft: 37, marginTop: 21 }}>
            <Text style={{ fontSize: 16, textAlign: "center" }}>
              Mini-Task 1:
            </Text>
            <Text
              style={{
                fontSize: 32,
                textAlign: "center",
                fontWeight: "900",
                letterSpacing: "-2%",
              }}
            >
              Iron the dress
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
            height: 192,
            backgroundColor: "#FFC50D",
            borderRadius: 10,
            alignSelf: "center",
            marginTop: 9,
          }}
        >
          <Text
            style={{
              marginHorizontal: 26,
              fontSize: 13,
              lineHeight: 18.55,
              marginTop: 25,
            }}
          >
            {" "}
            1. Before this Task is started, what Mini-Tasks have to be done?
            {"\n"} 2. What Mini-Tasks does this Task include? (use similar past
            experiences as a guide)
            {"\n"}3. For Worst-case: Think of possible issues or subtasks that
            might pop up and add in a buffer of time
          </Text>
        </View>
        <View>
          <Text
            style={{
              marginTop: 47,
              marginLeft: 32,
              fontSize: 16,
              fontWeight: "900",
              lineHeight: 22.54,
              letterSpacing: "0.5%",
            }}
          >
            Estimate time to finish Iron the dress
          </Text>
          <Text style={{ marginLeft: 32, marginTop: 9, fontSize: 16 }}>
            Best-case (hour:min):
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
          <Text style={{ marginLeft: 32, marginTop: 9, fontSize: 16 }}>
            Most-likely (hour:min):
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
          <Text style={{ marginLeft: 32, marginTop: 9, fontSize: 16 }}>
            Worst-case (hour:min):
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
          <TouchableOpacity onPress={() => setVisible(true)}>
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
    </View>
  );
};

export default Minitask1;

import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign, Entypo, EvilIcons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Form = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: 374,
        height: 1018,
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
        <Feather
          onPress={() => navigation.goBack()}
          name="x"
          size={38}
          style={{ marginLeft: "auto", marginRight: 10, marginTop: 11 }}
        />
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
          This Task must finish before:
        </Text>
        <Text style={{ marginLeft: 32, marginTop: 9, fontSize: 16 }}>
          Date:
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
        <Text style={{ marginLeft: 32, marginTop: 9, fontSize: 16 }}>Hour</Text>
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
        <View
          style={{
            width: 311,
            height: 132,
            backgroundColor: "#FFC50D",
            borderRadius: 10,
            alignSelf: "center",
            marginTop: 9,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              lineHeight: 22.54,
              letterSpacing: "1%",
              fontWeight: "900",
            }}
          >
            Reminder
          </Text>
          <Text
            style={{
              marginHorizontal: 26,
              fontSize: 13,
              lineHeight: 18.55,
            }}
          >
            {" "}
            1. Before this Task is started, what Mini-Tasks have to be done?
            {"\n"} 2. What Mini-Tasks does this Task include? (use similar past
            experiences as a guide)
          </Text>
        </View>
        <View
          style={{
            width: 311,
            height: 157,
            borderColor: "#FFC50D",
            borderRadius: 10,
            marginTop: 17,
            alignSelf: "center",
            borderWidth: 2,
          }}
        >
          <EvilIcons
            name="pencil"
            size={30}
            style={{ marginLeft: "auto", marginTop: 5, marginRight: 5 }}
          />
        </View>
        <View>
          <Text
            style={{
              marginTop: 17,
              marginLeft: "auto",
              marginRight: 34,
              fontSize: 16,
              fontWeight: "900",
              lineHeight: 22.54,
              letterSpacing: "0.5%",
            }}
          >
            Skip Mini-Tasks
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View>
            <AntDesign
              name="arrowleft"
              size={48}
              style={{ marginTop: 50, marginRight: 71, marginLeft: 31 }}
              onPress={() => navigation.goBack()}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("DivideMiniTask")}
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
              <Entypo name="check" size={53} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Form;

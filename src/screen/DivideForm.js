import { View, Text, ScrollView } from "react-native";
import React from "react";
import Time from "../component/Time";
import { useNavigation } from "@react-navigation/native";
import Form from "../component/divide/Form";

const DivideForm = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ marginBottom: "30%" }}>
      <View style={{ marginTop: 55 }}>
        <Time />
      </View>
      <View style={{ marginTop: 41 }}>
        <Form />
      </View>
    </ScrollView>
  );
};

export default DivideForm;

import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ListDocument = () => {
  const navigation = useNavigation();
  const news = [
    {
      id: 1,
      title:
        "Các dấu hiệu chung của chứng rối loạn tăng động giảm chú ý (ADHD)",
      img: require("../../storages/list_news/img1.jpg"),
      view: "4k",
    },
    {
      id: 2,
      title: "Mối liên hệ giữa rối loạn tăng động giảm chú ý và stress",
      img: require("../../storages/list_news/img2.jpg"),
      view: "4k",
    },
    {
      id: 3,
      title: "Mẹo giúp trẻ tăng động giảm chú ý (ADHD) ăn uống ngon hơn",
      img: require("../../storages/list_news/img3.jpg"),
      view: "4k",
    },
    {
      id: 4,
      title:
        "Mối liên hệ giữa rối loạn tăng động giảm chú ý và rối loạn giấc ngủ",
      img: require("../../storages/list_news/img4.png"),
      view: "4k",
    },
  ];
  return news.map((data, index) => {
    return (
      <TouchableOpacity key={data.id}>
        <View
          style={{
            width: 335,
            height: 92,
            marginHorizontal: "10%",
            flexDirection: "row",
            marginBottom: 16,
          }}
        >
          <View>
            <Image source={data.img} style={{ width: 82, height: 92 }} />
          </View>
          <View style={{ marginLeft: 12 }}>
            <View style={{ width: 205, height: 60 }}>
              <Text>{data.title}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
              }}
            >
              <Feather name="user" />
              <Text> {data.view}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  });
};

export default ListDocument;

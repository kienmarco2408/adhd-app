import {
  View,
  Text,
  Modal,
  Animated,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo, Feather } from "@expo/vector-icons";

const PopupInfor = ({ visible, children }) => {
  const [showModal, setShowModal] = React.useState(visible);

  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.4)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </View>
    </Modal>
  );
};

export default PopupInfor;

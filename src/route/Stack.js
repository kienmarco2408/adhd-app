import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Image, Text, TouchableOpacity } from "react-native";

import Home from "../screen/Home";
import Divide from "../screen/Divide";
import Expert from "../screen/Expert";
import Media from "../screen/Media";
import HomeFill from "../screen/HomeFill";
import HomeFilled from "../screen/HomeFilled";
import DivideForm from "../screen/DivideForm";
import DivideMiniTask from "../screen/DivideMiniTask";
import DivideMiniTask1 from "../screen/DivideMiniTask1";
import DivideMiniTask2 from "../screen/DivideMiniTask2";
import DivideMiniTask3 from "../screen/DivideMiniTask3";
import DivideResult from "../screen/DivideResult";
import DivideFilled from "../screen/DivideFilled";
import Document from "../screen/Document";
import ReachExperts from "../screen/ReachExperts";

const HomeStack = createNativeStackNavigator();
function HomeStacks() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home Stack" component={Home} />
      <HomeStack.Screen name="HomeFill" component={HomeFill} />
      <HomeStack.Screen name="HomeFilled" component={HomeFilled} />
    </HomeStack.Navigator>
  );
}

const DivideStack = createNativeStackNavigator();
function DivideStacks() {
  return (
    <DivideStack.Navigator screenOptions={{ headerShown: false }}>
      <DivideStack.Screen name="Divide Stack" component={Divide} />
      <DivideStack.Screen name="DivideFilled" component={DivideFilled} />
      <DivideStack.Screen name="DivideForm" component={DivideForm} />
      <DivideStack.Screen name="DivideMiniTask" component={DivideMiniTask} />
      <DivideStack.Screen name="DivideMiniTask1" component={DivideMiniTask1} />
      <DivideStack.Screen name="DivideMiniTask2" component={DivideMiniTask2} />
      <DivideStack.Screen name="DivideMiniTask3" component={DivideMiniTask3} />
      <DivideStack.Screen name="DivideResult" component={DivideResult} />
    </DivideStack.Navigator>
  );
}

const ExpertStack = createNativeStackNavigator();
function ExpertStacks() {
  return (
    <ExpertStack.Navigator screenOptions={{ headerShown: false }}>
      <ExpertStack.Screen name="Expert Stack" component={Expert} />
      <ExpertStack.Screen name="Document" component={Document} />
      <ExpertStack.Screen name="ReachExperts" component={ReachExperts} />
    </ExpertStack.Navigator>
  );
}

const MediaStack = createNativeStackNavigator();
function MediaStacks() {
  return (
    <MediaStack.Navigator screenOptions={{ headerShown: false }}>
      <MediaStack.Screen name="Media Stack" component={Media} />
    </MediaStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          elevation: 0,
          backgroundColor: "#FFC50D",
          width: "100%",
          height: "17%",
          shadowColor: "#FFC50D",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: "-5%",
              }}
            >
              <Image
                source={require("../storages/icon/home.png")}
                resizeMode="contain"
                style={{
                  width: 44,
                  height: 34,
                  tintColor: focused ? "#000000" : "#FFFFFF",
                }}
              ></Image>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Divide"
        component={DivideStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: "-5%",
              }}
            >
              <Image
                source={require("../storages/icon/divide.png")}
                resizeMode="contain"
                style={{
                  width: 44,
                  height: 40.43,
                  tintColor: focused ? "#000000" : "#FFFFFF",
                }}
              ></Image>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Expert"
        component={ExpertStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: "-5%",
              }}
            >
              <Image
                source={require("../storages/icon/expert.png")}
                resizeMode="contain"
                style={{
                  width: 44,
                  height: 34.79,
                  tintColor: focused ? "#000000" : "#FFFFFF",
                }}
              ></Image>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Media"
        component={MediaStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: "-5%",
              }}
            >
              <Image
                source={require("../storages/icon/media.png")}
                resizeMode="contain"
                style={{
                  width: 44,
                  height: 42.95,
                  tintColor: focused ? "#000000" : "#FFFFFF",
                }}
              ></Image>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const RootStacks = createNativeStackNavigator();
function RootStack() {
  return (
    <NavigationContainer>
      <RootStacks.Navigator screenOptions={{ headerShown: false }}>
        <RootStacks.Screen name="Tabs" component={Tabs} />
      </RootStacks.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;

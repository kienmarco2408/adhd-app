import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Maps from '../screen/Maps';
import Home from '../screen/Home';
import News from '../screen/News';
import Profile from '../screen/Profile';
import Detail from '../screen/Detail';
import LocationDonate from '../screen/LocationDonate';
import DetailLocation from '../screen/DetailLocation';
import DetailDonation from '../screen/DetailDonation';
import Donate from '../screen/Donate';

const HomeStack = createNativeStackNavigator();
function HomeStacks() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home Stack" component={Home} />
    </HomeStack.Navigator>
  );
}

const DivideStack = createNativeStackNavigator();
function DivideStacks() {
  return (
    <DivideStack.Navigator screenOptions={{ headerShown: false }}>
      <DivideStack.Screen name="Divide Stack" component={Divide} />
    </DivideStack.Navigator>
  );
}

const ExpertStack = createNativeStackNavigator();
function ExpertStacks() {
  return (
    <ExpertStacks.Navigator screenOptions={{ headerShown: false }}>
      <ExpertStacks.Screen name="Expert Stack" component={Expert} />
    </ExpertStacks.Navigator>
  );
}

const MedStack = createNativeStackNavigator();
function MedStacks() {
  return (
    <MedStacks.Navigator screenOptions={{ headerShown: false }}>
      <MedStacks.Screen name="Med Stack" component={Med} />
    </MedStacks.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: '#FFF9EC',
          width: '100%',
          height: '15%',
          shadowColor: '#FFF9EC',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
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
                alignItems: 'center',
                justifyContent: 'center',
                top: '-5%',
              }}
            >
              <Image
                source={require('../storages/icon/home.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#8133F1' : '#B8B8B8',
                }}
              ></Image>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Maps"
        component={MapsStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: '-5%',
              }}
            >
              <Image
                source={require('../storages/icon/maps.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#8133F1' : '#B8B8B8',
                }}
              ></Image>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="News"
        component={NewsStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: '-5%',
              }}
            >
              <Image
                source={require('../storages/icon/news.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#8133F1' : '#B8B8B8',
                }}
              ></Image>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: '-5%',
              }}
            >
              <Image
                source={require('../storages/icon/profile.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#8133F1' : '#B8B8B8',
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

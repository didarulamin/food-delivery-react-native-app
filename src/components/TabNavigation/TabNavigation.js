import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import Cart from "../../screens/Cart";
import Messages from "../../screens/Messages";
import User from "../../screens/User";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,

        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 20,
          right: 20,
          backgroundColor: "white",
          borderRadius: 15,
          elevation: 0,
          height: 90,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                // justifyContent: "space-between",
                backgroundColor: "#eafaf2",
                borderRadius: 15,
                padding: 10,
                width: 105,
                height: 50,
                marginLeft: 30,
              }}
            >
              <MaterialIcons
                name="home-filled"
                size={30}
                color="black"
                style={{ color: focused ? "#ff5a5f" : "#8f8f8f" }}
              />
              <Text
                style={{
                  color: focused ? "#ff5a5f" : "black",
                  marginLeft: 10,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ marginLeft: 40 }}>
              <Ionicons
                name="person-sharp"
                size={35}
                style={{ color: focused ? "#ff5a5f" : "#8f8f8f" }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            position: "relative",
            top: 20,
            left: 15,
            zIndex: 1,
          },
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="cart"
                size={35}
                style={{ color: focused ? "#ff5a5f" : "#8f8f8f" }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          headerShown: false,
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            position: "relative",
            top: 20,
            left: 15,
            zIndex: 1,
          },
          tabBarIcon: ({ focused }) => (
            <View style={{}}>
              <Ionicons
                name="chatbubble-ellipses"
                size={35}
                style={{ color: focused ? "#ff5a5f" : "#8f8f8f" }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

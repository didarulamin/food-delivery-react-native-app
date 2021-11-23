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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NearestRestaurant from "../../screens/NearestRestaurant";
import PopularMenu from "../../screens/PopularMenu";

export default function Navigation() {
  return (
    <NavigationContainer independent={true}>
      <TabNavigation />
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();
function TabNavigation() {
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
        name="HomeStackScreens"
        component={HomeStackScreens}
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
        name="ProfileStackScreens"
        component={ProfileStackScreens}
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
        name="CartStackScreens"
        component={CartStackScreens}
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
        name="MessagesStackScreens"
        component={MessagesStackScreens}
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

const HomeStack = createNativeStackNavigator();
function HomeStackScreens() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen
        name="NearestRestaurants"
        component={NearestRestaurant}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="PopularMenu"
        component={PopularMenu}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();
function ProfileStackScreens() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="User" component={User} />
    </ProfileStack.Navigator>
  );
}

const CartStack = createNativeStackNavigator();
function CartStackScreens() {
  return (
    <CartStack.Navigator screenOptions={{ headerShown: false }}>
      <CartStack.Screen name="Cart" component={Cart} />
    </CartStack.Navigator>
  );
}

const MessagesStack = createNativeStackNavigator();
function MessagesStackScreens() {
  return (
    <MessagesStack.Navigator screenOptions={{ headerShown: false }}>
      <MessagesStack.Screen name="Messages" component={Messages} />
    </MessagesStack.Navigator>
  );
}

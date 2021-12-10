import React from "react";
import { View, Text, StyleSheet } from "react-native";
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
import RestaurantDetails from "../../screens/RestaurantDetails";
import PopularMenuDetails from "../../screens/PopularMenuDetails";
import { Counter } from "../counter";
import Login from "../../screens/Login";
import Register from "../../screens/Register";
import SignUpBio from "../../screens/SignUpBio";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../redux/userSlice";
import { selectCartLength } from "../../../redux/cartSlice";

export default function Navigation() {
  return (
    <NavigationContainer independent={true}>
      <MainNavigation />
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();
function TabNavigation() {
  const cartLength = useSelector(selectCartLength);
  console.log(cartLength);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 5,
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
          tabBarIcon: ({ focused, endTab = false }) => (
            <View
              style={[
                focused ? styles.activeTab : styles.inactiveTab,
                { left: endTab ? -10 : 10 },
              ]}
            >
              <MaterialIcons
                name="home-filled"
                size={30}
                color="black"
                style={{ color: focused ? "#ff5a5f" : "#8f8f8f" }}
              />

              {focused && (
                <Text
                  style={{
                    color: "black",
                    marginLeft: 5,
                  }}
                >
                  Home
                </Text>
              )}
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
            <View style={focused ? styles.activeTab : styles.inactiveTab}>
              <Ionicons
                name="person-sharp"
                size={30}
                style={{ color: focused ? "#ff5a5f" : "#8f8f8f" }}
              />
              {focused && (
                <Text
                  style={{
                    color: "black",
                    marginLeft: 5,
                  }}
                >
                  Profile
                </Text>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CartStackScreens"
        component={CartStackScreens}
        options={{
          headerShown: false,
          tabBarBadge: ` ${cartLength}`,
          tabBarBadgeStyle: {
            position: "relative",
            top: 20,
            left: 15,
            zIndex: 1,
          },
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.activeTab : styles.inactiveTab}>
              <Ionicons
                name="cart"
                size={30}
                style={{ color: focused ? "#ff5a5f" : "#8f8f8f" }}
              />
              {focused && (
                <Text
                  style={{
                    color: "black",
                    marginLeft: 5,
                  }}
                >
                  Cart
                </Text>
              )}
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
          tabBarIcon: ({ focused, endTab = true }) => (
            <View
              style={[
                focused ? styles.activeTab : styles.inactiveTab,
                { left: endTab ? -10 : 10 },
              ]}
            >
              <Ionicons
                name="chatbubble-ellipses"
                size={30}
                style={{ color: focused ? "#ff5a5f" : "#8f8f8f" }}
              />
              {focused && (
                <Text
                  style={{
                    color: "black",
                    marginLeft: 5,
                  }}
                >
                  Chat
                </Text>
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function MainNavigation() {
  const user = useSelector(selectUser);
  console.log(user, "TabNavigation");

  return (
    <Stack.Navigator>
      {!user.email ? (
        <>
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="signUpBio"
            component={SignUpBio}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="TabNavigation"
            component={TabNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RestaurantDetails"
            component={RestaurantDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PopularMenuDetails"
            component={PopularMenuDetails}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreens() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
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
      <ProfileStack.Screen
        name="User"
        component={User}
        options={{ headerShown: false }}
      />
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

const styles = StyleSheet.create({
  activeTab: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    backgroundColor: "#eafaf2",
    borderRadius: 15,
    padding: 10,
    width: 95,
    height: 50,
    position: "relative",

    // marginLeft: 30,
  },
  inactiveTab: {},
});

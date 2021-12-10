import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import * as AppAuth from "expo-app-auth";

// When configured correctly, URLSchemes should contain your REVERSED_CLIENT_ID

import Button from "../components/Button";
import Input from "../components/Input";
import InputIcon from "../components/InputIcon";
import InputPass from "../components/InputPass";
import { useDispatch, useSelector } from "react-redux";
import {
  signInUsingEmail,
  selectUser,
  handleSignOut,
} from "../../redux/userSlice";
import * as GoogleSignIn from "expo-google-sign-in";
export default function Login({ navigation }) {
  const { URLSchemes } = AppAuth;
  const [state, setState] = useState(null);
  console.log(URLSchemes);
  const syncUserWithStateAsync = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync();
    setState({ user });
  };
  const initAsync = async () => {
    await GoogleSignIn.initAsync({
      // You may ommit the clientId when the firebase `googleServicesFile` is configured
      /* clientId: '<YOUR_IOS_CLIENT_ID>', */
    });
    syncUserWithStateAsync();
  };
  const signOutAsync = async () => {
    await GoogleSignIn.signOutAsync();
    setState({ user: null });
  };
  const signInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === "success") {
        syncUserWithStateAsync();
      }
    } catch ({ message }) {
      alert("login: Error:" + message);
    }
  };
  const googleSignIn = () => {
    if (state?.user) {
      signOutAsync();
    } else {
      signInAsync();
    }
  };
  //   const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
  console.log(password);
  const userDetails = { email, password };
  console.log(userDetails);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user?.email, "login user");

  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "null"}
      >
        {/* <View style={styles.container}> */}
        <Image
          style={{ width: "100%" }}
          source={require("../../assets/Pattern.png")}
        ></Image>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/icon.png")}
          ></Image>
        </View>
        <View style={styles.formContainer}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 24,
              textAlign: "center",
              marginVertical: 10,
            }}
          >
            Login To Your Account
          </Text>

          <InputIcon
            placeholder="Email"
            iconName="ios-mail"
            onChangeText={(email) => setEmail(email)}
          />

          <InputPass
            placeholder="Password"
            iconName="ios-lock-closed"
            onChangeText={(password) => setPassword(password)}
          />

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              textAlign: "center",
              marginVertical: 10,
            }}
          >
            Or Continue with
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <TouchableOpacity
              onPress={() => console.log("Pressed")}
              style={{
                backgroundColor: "white",
                width: 150,
                height: 50,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15,
              }}
            >
              <Image source={require("../../assets/facebook.png")}></Image>
              <Text style={{ marginHorizontal: 10 }}>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => console.log("Pressed")}
              style={{
                backgroundColor: "white",
                width: 150,
                height: 50,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15,
              }}
              onPress={googleSignIn}
            >
              <Image source={require("../../assets/google-icon.png")}></Image>
              <Text style={{ marginHorizontal: 10 }}>Google</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              textAlign: "center",
              marginVertical: 10,
              fontSize: 18,
              color: "#53E88B",
            }}
          >
            Forgot Your Password
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text
              style={{
                textAlign: "center",
                marginVertical: 10,
                fontSize: 18,
                color: "#53E88B",
              }}
            >
              Don't have an account?
            </Text>
          </TouchableOpacity>
        </View>
        <Button
          title="Login"
          titleColor={{ color: "white" }}
          onPress={() => dispatch(signInUsingEmail(userDetails))}
        />
        {/*     </View> */}
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F4F4F4",

    // justifyContent: "center",
  },
  logoContainer: {
    width: "100%",
    paddingTop: 50,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },

  formContainer: {
    width: "100%",
    padding: 25,
  },
});

import React, { useState } from "react";
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

import Button from "../components/Button";
import Input from "../components/Input";
import InputIcon from "../components/InputIcon";
import InputPass from "../components/InputPass";
import RadioInput from "../components/RadioInput";

export default function Register({ navigation }) {
  const [newsLetter, setNewsLetter] = useState(false);
  const [KeepSignIn, setKeepSignIn] = useState(false);

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
            Sign Up For Free
          </Text>
          <InputIcon placeholder="Username" iconName="person" />
          <InputIcon placeholder="Email" iconName="ios-mail" />
          <InputPass
            placeholder="Password"
            secureTextEntry={true}
            iconName="ios-lock-closed"
          />

          <RadioInput
            label="Keep Me Sign In"
            value={KeepSignIn}
            setValue={setKeepSignIn}
          />
          <RadioInput
            label="Email me about special Pricing"
            value={newsLetter}
            setValue={setNewsLetter}
          />
        </View>
        <Button
          title="Create Account"
          titleColor={{ color: "white" }}
          onPress={() => navigation.navigate("signUpBio")}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              textAlign: "center",
              marginVertical: 10,
              fontSize: 18,
              color: "#53E88B",
            }}
          >
            Already have an account?
          </Text>
        </TouchableOpacity>
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

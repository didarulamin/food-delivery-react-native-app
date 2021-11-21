import React from "react";
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

export default function Login({ navigation }) {
  //   const [showPassword, setShowPassword] = React.useState(false);

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
          <InputIcon placeholder="Email" iconName="ios-mail" />

          <InputPass placeholder="Password" iconName="ios-lock-closed" />

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
        <Button title="Login" titleColor={{ color: "white" }} />
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

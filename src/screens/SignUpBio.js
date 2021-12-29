import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import Header from "../components/Header/Header";
import { useRoute } from "@react-navigation/native";
import { showMessage, hideMessage } from "react-native-flash-message";
import { signUpUsingEmail } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { saveUserData } from "../../redux/userSlice";
export default function SignUpBio() {
  const dispatch = useDispatch();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const route = useRoute();

  const userData = {
    name: fname + " " + lname,
    mobile: mobile,
    address: address,
    ...route.params.userData,
  };

  const handleNext = (data) => {
    console.log(data);
    dispatch(saveUserData(data));
    dispatch(signUpUsingEmail(data));
    // route.params.handleNext(userData);
  };

  return (
    <View>
      <Image
        style={styles.image}
        source={require("../../assets/Pattern.png")}
      />
      <View style={styles.container}>
        <Header />
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            textAlign: "left",
            width: "70%",
            marginVertical: 10,
          }}
        >
          Fill in your bio to get started
        </Text>
        <Text style={{ fontSize: 20, textAlign: "left", marginVertical: 10 }}>
          This data will be displayed in your account profile for security
        </Text>

        <Input
          placeholder="First Name"
          onChangeText={(text) => setFname(text)}
        />
        <Input
          placeholder="Last Name"
          onChangeText={(text) => setLname(text)}
        />
        <Input
          placeholder="Mobile Number"
          onChangeText={(text) => setMobile(text)}
        />
        <Input
          placeholder="Address"
          onChangeText={(text) => setAddress(text)}
        />

        <Button
          title="Next"
          titleColor={{ color: "white" }}
          customStyles={{ alignSelf: "center", marginVertical: 30, width: 100 }}
          onPress={() => handleNext(userData)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    padding: 20,
  },
  image: {
    position: "absolute",
    top: -150,
    right: -50,
    width: "100%",
    transform: [{ rotate: "45deg" }],
  },
});

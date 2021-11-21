import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const InputPass = ({ placeholder, onChangeText, value, iconName }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={!showPassword}
        value={value}
      />
      <Icon
        onPress={() => setShowPassword(!showPassword)}
        style={styles.hidePass}
        name={showPassword ? "eye-off" : "eye"}
        color="#000"
        size={24}
      />
      <Icon style={styles.icon} name={iconName} color="#53E88B" size={24} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // justifyContent: "center",
  },
  input: {
    borderBottomColor: "#ccc",
    padding: 15,
    marginBottom: 15,
    borderRadius: 15,
    backgroundColor: "white",
    paddingStart: 50,
  },
  icon: {
    position: "absolute",

    left: 15,
    bottom: "40%",
  },
  hidePass: {
    position: "absolute",
    // alignSelf: "flex-end",
    right: 15,
    bottom: "40%",
  },
});

export default InputPass;

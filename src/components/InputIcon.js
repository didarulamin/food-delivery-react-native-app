import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const InputIcon = ({
  placeholder,
  onChangeText,
  value,
  iconName,
  customStyles,
}) => {
  return (
    <View style={[styles.container]}>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[styles.input, customStyles]}
        value={value}
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
});

export default InputIcon;

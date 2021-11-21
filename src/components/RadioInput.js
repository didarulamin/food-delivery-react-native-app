import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const RadioInput = ({ label, setValue, value }) => {
  const isSelected = value;

  return (
    <Pressable onPress={() => setValue(!value)}>
      <View style={styles.container}>
        <View style={[styles.outerCircle]}>
          {isSelected && (
            <Icon
              name="md-checkmark"
              color="rgba(255, 255, 255, .9)"
              size={24}
            />
          )}
        </View>
        <Text style={{ marginLeft: 10 }}>{label}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  outerCircle: {
    width: 40,
    height: 40,
    backgroundColor: "#53E88B",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  innerCircle: {
    borderWidth: 1,
    height: 10,
    width: 10,
    borderRadius: 5,
  },
});

export default RadioInput;

import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
// import { colors } from "../theme";
// import Text from "./text/text";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { typography } from "../../theme";
export default function CounterButton({ style, setAmount, initialVal }) {
  const [count, setCount] = useState(initialVal || 1);
  const onIncrement = () => {
    setCount((prev) => prev + 1);
    setAmount(count + 1);
  };
  const onDecrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
      setAmount(count - 1);
    }
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Entypo
        name="minus"
        size={24}
        color="black"
        style={{
          backgroundColor: "#E3CBBC",
          padding: 5,
          borderRadius: 10,
        }}
        onPress={() => onDecrement()}
      />
      <Text
        style={{
          fontSize: 18,
          fontFamily: typography.Medium,
          marginHorizontal: 10,
        }}
      >
        {count}
      </Text>
      <Entypo
        name="plus"
        size={24}
        color="white"
        style={{
          backgroundColor: "#E38751",
          padding: 5,
          borderRadius: 10,
        }}
        onPress={() => onIncrement()}
      />
    </View>
  );
}
/* 
const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    width: 120,
    height: 48,
    flexDirection: "row",
    backgroundColor: colors.grey,
    borderRadius: 4,
  },
  counterBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontWeight: "bold",
  },
}); */

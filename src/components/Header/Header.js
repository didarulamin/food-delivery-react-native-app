import React from "react";
import { StatusBar, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { spacing, colors } from "../../theme";
// import Text from "../text/text";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const Header = ({ backButton = true }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.header}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {backButton && (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign
              name="left"
              size={24}
              color="#FF9012"
              style={{
                marginRight: 16,
                top: 2,
                backgroundColor: "#Fdf5ed",
                padding: 8,
                borderRadius: 8,
              }}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* <StatusBar backgroundColor="#ffff" /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingLeft: 15,
    paddingVertical: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: "white",
    // backgroundColor: "black",
  },
});

export default Header;

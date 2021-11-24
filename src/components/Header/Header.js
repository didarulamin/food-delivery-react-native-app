import React from "react";
import { StatusBar, StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { spacing, colors } from "../../theme";
// import Text from "../text/text";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { typography } from "../../../theme";

const Header = ({ backButton = true, heading, subheading }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.header}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          style={styles.image}
          source={require("../../../assets/Pattern.png")}
        />
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
      <View>
        {heading && (
          <Text
            style={{
              fontSize: 26,
              // fontWeight: "bold",
              textAlign: "left",
              width: "70%",
              marginVertical: 10,
              fontFamily: typography.MediumBold,
            }}
          >
            {heading}
          </Text>
        )}
        {subheading && (
          <Text
            style={{
              fontSize: 16,
              textAlign: "left",
              marginVertical: 10,
              fontFamily: typography.Small,
            }}
          >
            {subheading}
          </Text>
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
  image: {
    position: "absolute",
    top: -100,
    right: -50,
    transform: [{ rotate: "45deg" }],
  },
});

export default Header;

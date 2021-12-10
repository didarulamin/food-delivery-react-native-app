import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
const slides = [
  {
    key: 1,
    title: "Find you Comfort\nFood here",
    text: "Here you Can find a chef or dish for every\ntase and color. Enjoy!",
    image: require("../../../assets/onboardingOne.png"),
  },
  {
    key: 2,
    title: "Food Ninja is Where Your\nComfort Food Lives",
    text: "Enjoy a fast and smooth food delivery at\nyour doorstep",
    image: require("../../../assets/onboardingtwo.png"),
  },
];

export default function OnBoarding({ setOnBoarding }) {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  const onDone = async () => {
    try {
      await AsyncStorage.setItem("onboarding", JSON.stringify(true));
    } catch (e) {
      console.log(e);
    }

    setOnBoarding(true);
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="md-checkmark" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };

  /*   const renderNextButton = () => {
    return (
      <View style={styles.nextButton}>
        <Icon
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  }; */

  return (
    <View style={styles.container}>
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        onDone={onDone}
        renderDoneButton={renderDoneButton}
        keyExtractor={(item) => item.key.toString()}
        activeDotStyle={{ backgroundColor: "green" }}
        // showNextButton={true}
        // renderNextButton={renderNextButton}
        // renderPagination={renderPagination}
        // bottomButton
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#0df",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    marginVertical: 10,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  nextButton: {
    width: 44,
    height: 44,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
});

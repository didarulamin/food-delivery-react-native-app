import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import OnBoarding from "../components/OnBoarding/OnBoarding";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import InputIcon from "../components/InputIcon";
import BannerSlider from "../components/Slider/BannerSlider";
import { spacing, typography } from "../../theme";
import RestaurantData from "../../DemoData/Restaurant";
import FoodData from "../../DemoData/Food";

export default function Home({ navigation }) {
  // console.log(RestaurantData);
  const renderItem = ({ item }) => (
    <View
      key={item.id}
      style={{
        height: 184,
        width: 147,
        backgroundColor: "white",
        // justifyContent: "center",
        alignItems: "center",
        marginVertical: spacing[4],
        borderRadius: 15,
      }}
    >
      <Image
        style={{ height: 73, width: 96, marginTop: spacing[6] }}
        source={item.image}
      />
      <Text
        style={{
          color: "black",
          fontFamily: typography.MediumBold,
          marginVertical: spacing[4],
        }}
      >
        {item.name}
      </Text>
      <Text
        style={{
          color: "black",
          fontFamily: typography.Medium,
          marginTop: spacing[0],
          color: "#CECDD2",
        }}
      >
        {item.time}
      </Text>
    </View>
  );

  const popularMenuItem = ({ item }) => (
    <View
      key={item.id}
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        height: 90,
        // width: 330,
        alignItems: "center",
        padding: 20,
        marginVertical: spacing[3],
        borderRadius: 15,
      }}
    >
      <Image source={item.image} />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontSize: 20, fontFamily: typography.MediumBold }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: typography.Medium,
              color: "#CECDD2",
            }}
          >
            {item.restaurant}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 24,
            fontFamily: typography.LargeBold,
            color: "#FFAD1D",
          }}
        >
          ${item.price}
        </Text>
      </View>
    </View>
  );

  const viewMoreHandler = (params) => {
    console.log(params);
  };

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/Pattern.png")}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={styles.headingContainer}>
            <Text style={styles.headings}>Find Your Favorite Food</Text>
          </View>
          <View style={styles.bell}>
            <Ionicons
              name="ios-notifications-outline"
              size={40}
              color="#fcc379"
              // style={{ margin: 5 }}
            />
          </View>
        </View>
        <View style={styles.searchContainer}>
          <InputIcon
            placeholder="What do you want to order?"
            iconName="md-search-sharp"
            customStyles={{ backgroundColor: "#fcf5eb" }}
          />
          <View
            style={{
              height: 55,
              width: 55,
              borderRadius: 10,
              backgroundColor: "#fcf5eb",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <Octicons name="settings" size={24} color="black" />
          </View>
        </View>

        {/* BannerSlider */}
        <View
          style={{
            height: 200,
            padding: 20,
          }}
        >
          <BannerSlider />

          {/* <Image source={require("../../assets/Promo.png")} resizeMode="cover" />  */}
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <Text style={{ fontFamily: typography.MediumBold, fontSize: 20 }}>
            Nearest Restaurants
          </Text>
          <Text
            onPress={() => navigation.navigate("NearestRestaurants")}
            style={{
              color: "#E6A986",
              fontFamily: typography.Medium,
              fontSize: 16,
            }}
          >
            View More
          </Text>
        </View>

        <SafeAreaView
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {RestaurantData.slice(0, 2).map((item) => renderItem({ item }))}
        </SafeAreaView>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontFamily: typography.MediumBold, fontSize: 20 }}>
            Popular Menu
          </Text>
          <Text
            onPress={() => navigation.navigate("PopularMenu")}
            style={{
              color: "#E6A986",
              fontFamily: typography.Medium,
              fontSize: 16,
            }}
          >
            View More
          </Text>
        </View>

        <SafeAreaView
          style={{
            flexDirection: "column",
            display: "flex",
            justifyContent: "space-around",
            padding: 20,
          }}
        >
          {FoodData.slice(0, 2).map((item) => popularMenuItem({ item }))}
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    position: "absolute",
    top: -100,
    right: -50,
    transform: [{ rotate: "45deg" }],
  },
  headings: {
    fontSize: 30,
    // fontWeight: "bold",
    marginTop: 60,
    fontFamily: typography.LargeBold,
  },
  headingContainer: {
    width: 233,
    marginLeft: 30,
  },
  bell: {
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: "#fafdff",
    marginRight: 30,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  searchContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
  },
});

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
  SectionList,
  Animated,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
// import FoodData from "../../../DemoData/Food";
import TestimonialData from "../../../DemoData/Testimonial";
import { colors, spacing, typography } from "../../../theme";
import Steve from "react-native-steve";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { LogBox } from "react-native";

export default function RestaurantDetailsData({ RestaurantData }) {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const navigation = useNavigation();
  const FoodData = RestaurantData.food;
  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => navigation.navigate("PopularMenuDetails", { item })}
    >
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
          margin: spacing[2],
        }}
      >
        <Image
          style={{ height: 73, width: 96, marginTop: spacing[6] }}
          source={{ uri: item.image }}
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
          {item.price}$
        </Text>
      </View>
    </Pressable>
  );

  const renderTestimonialItem = ({ item }) => (
    <View
      key={item.id}
      style={{
        height: 140,

        // width: "100%",
        // width: 340,
        // backgroundColor: colors.lightGrey,
        // justifyContent: "center",
        alignItems: "center",
        marginVertical: spacing[4],
        borderRadius: 15,

        flexDirection: "row",
        // flexWrap: "wrap",
        // flex: 1,
        alignItems: "flex-start",
        backgroundColor: "white",
      }}
    >
      <Image
        style={{ height: 64, width: 64, padding: 5, margin: 10 }}
        source={item.img}
      />

      <View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              // backgroundColor: "white",
              // width: 230,
              marginTop: spacing[3],
            }}
          >
            <View>
              <Text
                style={{
                  fontFamily: typography.Medium,
                  fontSize: 18,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  fontFamily: typography.Regular,
                  fontSize: 15,
                  color: "#CECDD2",
                }}
              >
                {item.date}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <EvilIcons name="star" size={24} color="black" />
              <Text>{item.rating}</Text>
            </View>
          </View>
        </View>
        <View style={{ width: 213 }}>
          <Text>{item.comment}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: spacing[4],
        }}
      >
        <View
          style={{
            backgroundColor: "#e6e6e6",
            // opacity: 0.5,
            padding: spacing[3],
            borderRadius: 15,
            // height: 34,
          }}
        >
          <Text
            style={{
              color: colors.background,
              // fontSize: 12,
              fontFamily: typography.Medium,
            }}
          >
            Popular
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              backgroundColor: "#e6e6e6",
              // opacity: 0.5,
              padding: spacing[3],
              borderRadius: 15,
            }}
          >
            <Ionicons name="location" size={24} color="green" />
          </View>
          <View
            style={{
              backgroundColor: "#e6e6e6",
              // opacity: 0.5,
              padding: spacing[3],
              borderRadius: 15,
              marginStart: spacing[2],
            }}
          >
            <Entypo name="heart" size={24} color="red" />
          </View>
        </View>
      </View>

      <View style={{ marginBottom: spacing[4] }}>
        <Text style={{ fontFamily: typography.MediumBold, fontSize: 27 }}>
          {RestaurantData.name}
        </Text>
        <View style={{ flexDirection: "row", marginVertical: spacing[2] }}>
          <View style={{ flexDirection: "row" }}>
            <EvilIcons name="location" size={24} color="#53E88B" />
            <Text style={{ fontSize: 16 }}>19 km</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <EvilIcons name="star" size={24} color="#53E88B" />
            <Text style={{ fontSize: 16 }}>4.3 Rating</Text>
          </View>
        </View>
        <Text style={{ fontSize: 16, fontFamily: typography.Regular }}>
          Most whole Alaskan Red King Crabs get broken down into legs, claws,
          and lump meat. We offer all of these options as well in our online
          shop, but there is nothing like getting the whole.
        </Text>
      </View>

      <SafeAreaView style={{ Width: 350 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 20, fontFamily: typography.MediumBold }}>
            Popular Menu
          </Text>
          <Text style={{ color: "#FF7C32", fontSize: 16 }}>View All</Text>
        </View>
        {/*   <FlatList
          // contentContainerStyle={{ paddingHorizontal: 10 }}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={RestaurantData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        /> */}

        <Animated.ScrollView
        // style={{ flexWrap: "wrap", flex: 1, flexDirection: "column" }}
        // scrollEnabled={true}
        // horizontal={true}
        // nestedScrollEnabled={true}
        >
          {/* {FoodData.map((item, index) => renderItem({ item }))} */}

          {/*   <Steve
            // isRTL={false}
            data={FoodData}
            renderItem={renderItem}
            // itemStyle={{ margin: 5 }}
            // containerStyle={steveContainer}
            keyExtractor={(item) => item.id}
          /> */}

          <FlatList
            contentContainerStyle={{ alignSelf: "center" }}
            // showsHorizontalScrollIndicator={false}
            // horizontal={true}
            data={FoodData}
            renderItem={renderItem}
            numColumns={2}
            keyExtractor={(item) => item.id}
          />
        </Animated.ScrollView>
      </SafeAreaView>

      <SafeAreaView>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 20, fontFamily: typography.MediumBold }}>
            Testimonial
          </Text>
        </View>
        {/*     <FlatList
          // contentContainerStyle={{ paddingHorizontal: 10 }}
          // showsHorizontalScrollIndicator={false}
          // horizontal={true}
          data={TestimonialData}
          renderItem={renderTestimonialItem}
          keyExtractor={(item) => item.id}
        /> */}
        {TestimonialData.map((item, index) => {
          return <View key={index}>{renderTestimonialItem({ item })}</View>;
        })}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
  },
});

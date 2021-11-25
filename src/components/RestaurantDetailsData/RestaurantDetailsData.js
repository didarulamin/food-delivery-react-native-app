import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import RestaurantData from "../../../DemoData/Restaurant";
import TestimonialData from "../../../DemoData/Testimonial";
import { spacing, typography } from "../../../theme";

export default function RestaurantDetailsData() {
  const renderItem = ({ item }) => (
    <View
      key={item.id}
      style={{
        height: 184,
        width: 147,
        backgroundColor: "yellow",
        // justifyContent: "center",
        alignItems: "center",
        marginVertical: spacing[4],
        borderRadius: 15,
        margin: spacing[2],
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

  const renderTestimonialItem = ({ item }) => (
    <View
      key={item.id}
      style={{
        height: 140,
        width: "100%",
        backgroundColor: "yellow",
        // justifyContent: "center",
        alignItems: "center",
        marginVertical: spacing[4],
        borderRadius: 15,

        flexDirection: "row",
        // flexWrap: "wrap",
        flex: 1,
      }}
    >
      <Image style={{ height: 73, width: 96 }} source={item.img} />

      <View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text>{item.name}</Text>
            <Text>{item.date}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <EvilIcons name="star" size={24} color="black" />
            <Text>{item.rating}</Text>
          </View>
        </View>

        <View style={{ width: "100%", flex: 1 }}>
          <Text>{item.comment}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text>Popular</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Ionicons name="location" size={24} color="black" />
            </View>
            <View>
              <Entypo name="heart" size={24} color="black" />
            </View>
          </View>
        </View>

        <View>
          <Text>Wijie Bar and Resto</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row" }}>
              <EvilIcons name="location" size={24} color="black" />
              <Text>19 km</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <EvilIcons name="star" size={24} color="black" />
              <Text>4.3 Rating</Text>
            </View>
          </View>
          <Text>
            Most whole Alaskan Red King Crabs get broken down into legs, claws,
            and lump meat. We offer all of these options as well in our online
            shop, but there is nothing like getting the whole.
          </Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Popular Menu</Text>
          <Text>View All</Text>
        </View>

        <SafeAreaView>
          <FlatList
            contentContainerStyle={{ paddingHorizontal: 10 }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={RestaurantData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
        <SafeAreaView>
          <FlatList
            contentContainerStyle={{ paddingHorizontal: 10 }}
            // showsHorizontalScrollIndicator={false}
            // horizontal={true}
            data={TestimonialData}
            renderItem={renderTestimonialItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

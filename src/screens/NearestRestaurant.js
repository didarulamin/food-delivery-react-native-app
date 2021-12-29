import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import RestaurantData from "../../DemoData/Restaurant";
import { spacing, typography } from "../../theme";
import SearchBar from "../components/SearchBar/SearchBar";
import { useNavigation } from "@react-navigation/native";

export default function NearestRestaurant() {
  const navigation = useNavigation();

  const handleRestaurantItem = (item) => {
    console.log(item);
  };

  const renderItem = ({ item }) => (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => navigation.navigate("RestaurantDetails", { item })}
      key={item.id}
      style={{
        height: 184,
        width: 147,
        backgroundColor: "white",
        // justifyContent: "center",
        alignItems: "center",
        marginVertical: spacing[4],
        borderRadius: 15,
        margin: spacing[4],
      }}
    >
      <View
      // onPress={() => handleRestaurantItem(item)}
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
          {item.time}
        </Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      {/* <ScrollView contentContainerStyle={{ paddingBottom: 90 }}> */}
      <SearchBar />
      {/*   <SafeAreaView
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      > */}
      {/* {RestaurantData.map((item) => renderItem({ item }))} */}

      <FlatList
        contentContainerStyle={{
          // flexWrap: "wrap",
          // flexDirection: "row",
          // justifyContent: "center",
          alignItems: "center",
          paddingBottom: 70,
          // height: 500,
        }}
        // horizontal={true}
        data={RestaurantData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListFooterComponent={<View style={{ height: 270 }} />}
      />
      {/* </SafeAreaView> */}
      {/* </ScrollView> */}
    </View>
  );
}

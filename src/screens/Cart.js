import React from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header/Header";
import FoodData from "../../DemoData/Food";
import { spacing, typography } from "../../theme";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
export default function Cart() {
  const [counter, setCounter] = React.useState(0);
  const rightSwipeActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 300],
      outputRange: [0, 2],
      extrapolate: "clamp",
    });
    return (
      <TouchableOpacity
        style={{
          width: 80,
          backgroundColor: "#FFC668",
          height: 120,
          marginVertical: spacing[3],
          borderRadius: 15,
        }}
        onPress={() => console.log("Delete")}
      >
        <View
          style={{
            backgroundColor: "#FFC668",
            flexDirection: "row",
            justifyContent: "flex-end",

            height: 120,

            borderRadius: 15,
            width: "100%",
            position: "relative",
            left: -20,
          }}
        >
          <AntDesign
            name="delete"
            size={24}
            color="white"
            style={{ alignSelf: "center", marginRight: 10 }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const popularMenuItem = ({ item }) => (
    <Swipeable renderRightActions={rightSwipeActions}>
      <View
        key={item.id}
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          height: 120,
          // width: 330,
          alignItems: "center",
          padding: 10,
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
          <Text
            style={{
              fontSize: 18,
              fontFamily: typography.MediumBold,
              position: "absolute",
              top: -25,
              left: 10,
            }}
          >
            {item.name}
          </Text>
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: typography.Medium,
                color: "#CECDD2",
              }}
            >
              {item.restaurant}
            </Text>

            <Text
              style={{
                fontSize: 24,
                fontFamily: typography.LargeBold,
                color: "#FFAD1D",
              }}
            >
              $ {item.price}
            </Text>
          </View>
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
              onPress={() => setCounter(counter - 1)}
            />
            <Text
              style={{
                fontSize: 18,
                fontFamily: typography.Medium,
                marginHorizontal: 10,
              }}
            >
              {counter}
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
              onPress={() => setCounter(counter + 1)}
            />
          </View>
        </View>
      </View>
    </Swipeable>
  );

  return (
    <View>
      <Header heading="Order Details" />
      <SafeAreaView
      /*  style={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "space-around",
          padding: 20,
        }} */
      >
        {/* {FoodData.map((item) => popularMenuItem({ item }))} */}
        <FlatList
          contentContainerStyle={{ padding: 20 }}
          data={FoodData}
          renderItem={popularMenuItem}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<View style={{ height: 430 }} />}
        />
      </SafeAreaView>
    </View>
  );
}

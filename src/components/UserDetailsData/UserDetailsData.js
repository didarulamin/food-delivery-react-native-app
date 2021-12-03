import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { spacing, typography, colors } from "../../../theme";
import FoodData from "../../../DemoData/Food";

export default function UserDetailsData() {
  const popularMenuItem = ({ item }) => (
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
          <Text
            style={{
              fontSize: 18,
              fontFamily: typography.Medium,
              marginHorizontal: 10,
            }}
          ></Text>
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
            Member Gold
          </Text>
        </View>
      </View>

      <View style={{ marginBottom: spacing[4] }}>
        <Text style={{ fontFamily: typography.MediumBold, fontSize: 27 }}>
          Anam Wusono
        </Text>
        <View style={{ flexDirection: "row", marginVertical: spacing[2] }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 16 }}>anamanam@gmail.com</Text>
          </View>
        </View>
      </View>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
  },
});

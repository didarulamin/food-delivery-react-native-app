import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import SwipeSheet from "../components/DragableSheet/SwipeSheet";
import PopularMenuDetailsData from "../components/PopularMenuDetailsData/PopularMenuDetailsData";
import Button from "../components/Button";

export default function PopularMenuDetails() {
  const route = useRoute();
  const { name, description, price, image } = route.params.item;
  console.log(route.params);

  return (
    <View style={{ flex: 1 }}>
      <SwipeSheet
        image={image}
        content={<PopularMenuDetailsData menuData={route.params.item} />}
      />
      <View style={{ position: "absolute", bottom: 30, width: "100%" }}>
        <Button
          title="Add to Cart"
          titleColor={{ color: "white" }}
          customStyles={{ width: "80%", alignSelf: "center" }}
        />
      </View>
    </View>
  );
}

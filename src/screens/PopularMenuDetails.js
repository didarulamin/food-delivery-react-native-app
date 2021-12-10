import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import SwipeSheet from "../components/DragableSheet/SwipeSheet";
import PopularMenuDetailsData from "../components/PopularMenuDetailsData/PopularMenuDetailsData";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

export default function PopularMenuDetails() {
  const route = useRoute();
  const dispatch = useDispatch();

  const { price, image } = route.params.item;

  const cartProduct = {
    ...route.params.item,
    quantityPrice: 1 * parseFloat(price),
    amount: 1,
  };

  return (
    <View style={{ flex: 1 }}>
      <SwipeSheet
        image={{ uri: image }}
        content={<PopularMenuDetailsData menuData={route.params.item} />}
      />
      <View style={{ position: "absolute", bottom: 30, width: "100%" }}>
        <Button
          title="Add to Cart"
          titleColor={{ color: "white" }}
          customStyles={{ width: "80%", alignSelf: "center" }}
          onPress={() => dispatch(addToCart(cartProduct))}
        />
      </View>
    </View>
  );
}

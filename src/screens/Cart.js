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
import { useDispatch, useSelector } from "react-redux";
import {
  selectCart,
  deleteFromCart,
  addToCart,
  updateCartProduct,
  selectTotalAmount,
  selectTotal,
  selectDiscount,
  selectDeliveryCharge,
  placeOrder,
  saveUserOrders,
} from "../../redux/cartSlice";
import { selectUser } from "../../redux/userSlice";
import CounterButton from "../components/CounterButton";

export default function Cart() {
  const dispatch = useDispatch();
  // const count = useSelector(selectCount);
  const cart = useSelector(selectCart);
  const totalAmount = useSelector(selectTotalAmount);
  let grandTotal = selectTotal;
  const discount = selectDiscount;
  const deliveryCharge = selectDeliveryCharge;
  const user = useSelector(selectUser);
  console.log(user, "user");
  const { email, displayName, uid, address, location, mobile } = user;

  const onAmountChange = (value, cartItem) => {
    console.log(value, "value");
    console.log(cartItem, "cartItem");
    const cartProduct = {
      ...cartItem,
      quantityPrice: parseInt(value) * parseFloat(cartItem.price),
      amount: parseInt(value),
    };

    dispatch(updateCartProduct({ cartProduct }));
  };

  const rightSwipeActions = (dragX, item) => {
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
        onPress={() => dispatch(deleteFromCart(item))}
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
    <Swipeable renderRightActions={(dragX) => rightSwipeActions(dragX, item)}>
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
              ${!item.amount ? item.price : item.quantityPrice}
            </Text>
          </View>
          <CounterButton
            initialVal={item.amount}
            setAmount={(value) => {
              onAmountChange(value, item);
            }}
          />
        </View>
      </View>
    </Swipeable>
  );

  const Total = () => {
    return (
      <View
        style={{
          backgroundColor: "#32d180",
          height: 206,
          padding: 20,
          borderRadius: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            fontSize: 16,
            fontFamily: typography.Medium,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: typography.Medium,
              color: "white",
            }}
          >
            Sub-Total
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: typography.Medium,
              color: "white",
            }}
          >
            {totalAmount} $
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            fontSize: 16,
            fontFamily: typography.Medium,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: typography.Medium,
              color: "white",
            }}
          >
            Delivery Charge
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: typography.Medium,
              color: "white",
            }}
          >
            {deliveryCharge} $
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            fontSize: 16,
            fontFamily: typography.Medium,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: typography.Medium,
              color: "white",
            }}
          >
            Discount
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: typography.Medium,
              color: "white",
            }}
          >
            {discount} $
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            fontSize: 18,
            fontFamily: typography.Medium,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: typography.Medium,
              color: "white",
            }}
          >
            Total
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: typography.Medium,
              color: "white",
            }}
          >
            {(grandTotal = totalAmount + grandTotal)} $
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            padding: 10,
            borderRadius: 15,
            marginTop: 15,
          }}
          onPress={() =>
            dispatch(
              saveUserOrders({
                cart: [...cart],
                grandTotal,
                uid,
                email,
                displayName,
                address,
                location,
                mobile,
                timestamp: Date.now(),
              })
            )
          }
        >
          <Text style={{ textAlign: "center", color: "#32d180", fontSize: 20 }}>
            Place My Order
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

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
          data={cart}
          renderItem={popularMenuItem}
          keyExtractor={(item) => item.id}
          ListFooterComponent={
            <View style={{ marginBottom: 430 }}>
              <Total />
            </View>
          }
        />
      </SafeAreaView>
    </View>
  );
}

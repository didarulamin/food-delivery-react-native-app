import React, { useEffect, useState, useRef } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  SafeAreaView,
} from "react-native";
import {
  PanGestureHandler,
  NativeViewGestureHandler,
  State,
  TapGestureHandler,
} from "react-native-gesture-handler";
import { LoremIpsum } from "../../screens/LoremIpsum";

const HEADER_HEIGHT = 50;
const windowHeight = Dimensions.get("window").height;
const SNAP_POINTS_FROM_TOP = [100, windowHeight * 0.5, windowHeight * 0.4];

export default function SwipeSheet({ children }) {
  const masterdrawer = useRef();
  const drawer = useRef();
  const drawerheader = useRef();
  const scroll = useRef();

  const START = SNAP_POINTS_FROM_TOP[0];
  const END = SNAP_POINTS_FROM_TOP[SNAP_POINTS_FROM_TOP.length - 1];

  // const [lastSnap, setLastSnap] = useState(END);

  const state = {
    lastSnap: END,
  };

  let lastScrollYValue = 0;
  const lastScrollY = new Animated.Value(0);
  const onRegisterLastScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: lastScrollY } } }],
    { useNativeDriver: true }
  );

  lastScrollY.addListener(({ value }) => {
    lastScrollYValue = value;
  });

  const dragY = new Animated.Value(0);
  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationY: dragY } }],
    { useNativeDriver: true }
  );

  const reverseLastScrollY = Animated.multiply(
    new Animated.Value(-1),
    lastScrollY
  );

  const translateYOffset = new Animated.Value(END);
  const translateY = Animated.add(
    translateYOffset,
    Animated.add(dragY, reverseLastScrollY)
  ).interpolate({
    inputRange: [START, END],
    outputRange: [START, END],
    extrapolate: "clamp",
  });

  const onHeaderHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.oldState === State.BEGAN) {
      lastScrollY.setValue(0);
    }
    onHandlerStateChange({ nativeEvent });
  };

  const onHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      let { velocityY, translationY } = nativeEvent;
      translationY -= lastScrollYValue;
      const dragToss = 0.05;
      const endOffsetY = state.lastSnap + translationY + dragToss * velocityY;

      let destSnapPoint = SNAP_POINTS_FROM_TOP[0];
      for (let i = 0; i < SNAP_POINTS_FROM_TOP.length; i++) {
        const snapPoint = SNAP_POINTS_FROM_TOP[i];
        const distFromSnap = Math.abs(snapPoint - endOffsetY);
        if (distFromSnap < Math.abs(destSnapPoint - endOffsetY)) {
          destSnapPoint = snapPoint;
        }
      }

      // setLastSnap(destSnapPoint);
      // setLastSnap({ lastSnap: destSnapPoint });\
      state.lastSnap = destSnapPoint;
      translateYOffset.extractOffset();
      translateYOffset.setValue(translationY);
      translateYOffset.flattenOffset();
      dragY.setValue(0);
      Animated.spring(translateYOffset, {
        velocity: velocityY,
        tension: 68,
        friction: 12,
        toValue: destSnapPoint,
        useNativeDriver: true,
      }).start();
    }
  };

  // console.log("lastSnap", lastSnap);
  // console.log(lastSnap - SNAP_POINTS_FROM_TOP[0]);
  return (
    <View>
      <Image
        source={require("../../../assets/Photo_restaurant.png")}
        resizeMode="cover"
        style={styles.image}
      />
      <TapGestureHandler
        maxDurationMs={100000}
        ref={masterdrawer}
        maxDeltaY={state.lastSnap - SNAP_POINTS_FROM_TOP[0]}
      >
        <View style={StyleSheet.absoluteFillObject} pointerEvents="box-none">
          <Animated.View
            style={[
              StyleSheet.absoluteFillObject,
              {
                transform: [{ translateY: translateY }],
              },
            ]}
          >
            <PanGestureHandler
              ref={drawerheader}
              simultaneousHandlers={[scroll, masterdrawer]}
              shouldCancelWhenOutside={false}
              onGestureEvent={onGestureEvent}
              onHandlerStateChange={onHeaderHandlerStateChange}
            >
              <Animated.View style={styles.header} />
            </PanGestureHandler>
            <PanGestureHandler
              ref={drawer}
              simultaneousHandlers={[scroll, masterdrawer]}
              shouldCancelWhenOutside={false}
              onGestureEvent={onGestureEvent}
              onHandlerStateChange={onHandlerStateChange}
            >
              <Animated.View
              // style={{ flex: 1, height: "100%", backgroundColor: "white" }}
              >
                <NativeViewGestureHandler
                  ref={scroll}
                  waitFor={masterdrawer}
                  simultaneousHandlers={drawer}
                >
                  <Animated.ScrollView
                    style={[
                      styles.scrollView,
                      { marginBottom: SNAP_POINTS_FROM_TOP[0] },
                    ]}
                    bounces={false}
                    onScrollBeginDrag={onRegisterLastScroll}
                    scrollEventThrottle={1}
                  >
                    {/* <LoremIpsum /> */}

                    {children}
                  </Animated.ScrollView>
                </NativeViewGestureHandler>
              </Animated.View>
            </PanGestureHandler>
          </Animated.View>
        </View>
      </TapGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    height: "100%",
  },
  header: {
    height: HEADER_HEIGHT,
    backgroundColor: "white",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    position: "relative",
    bottom: -2,
  },
  image: {
    width: "100%",
    height: "80%",
  },

  parent: {
    flex: 1,
    height: 50,
    width: "100%",
    transform: [{ scaleX: 2 }],
    borderTopStartRadius: 200,
    borderTopEndRadius: 200,
    overflow: "hidden",
  },
  child: {
    flex: 1,
    transform: [{ scaleX: 0.5 }],

    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import OnBoarding from "./src/components/OnBoarding/OnBoarding";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import SignUpBio from "./src/screens/SignUpBio";
import AppLoading from "expo-app-loading";

import TabNavigation from "./src/components/TabNavigation/TabNavigation";
import { useFonts } from "expo-font";

import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/components/TabNavigation/TabNavigation";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import initializeAuthentication from "./Firebase/firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  signInUsingEmail,
  selectUser,
  saveUser,
  setAuth,
} from "./redux/userSlice";
import { LogBox } from "react-native";
import FlashMessage from "react-native-flash-message";
import { fetchFoods, selectFoods } from "./redux/foodSlice";
initializeAuthentication();

const MainApp = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
      <FlashMessage position="top" />
    </SafeAreaProvider>
  );
};

LogBox.ignoreLogs(["AsyncStorage"]);
// LogBox.ignoreAllLogs();
function App() {
  // LogBox.ignoreAllLogs();
  const [userLoading, setUserLoading] = React.useState(true);
  const auth = getAuth();
  const user = useSelector(selectUser);
  console.log("user from state", user);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setAuth(auth));
    dispatch(fetchFoods());
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(saveUser(user));
        setUserLoading(false);
      } else {
        dispatch(saveUser({}));
        setUserLoading(false);
      }
    });
  }, [user.email, dispatch]);

  const [onBoarding, setOnBoarding] = React.useState(null);

  console.log("onBoarding", onBoarding);

  React.useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem("onboarding");
      /*  const savedtem = await AsyncStorage.setItem(
        "onboarding",
        JSON.stringify(false)
      ); */
      console.log("saved", saved);
      const initialValue = JSON.parse(saved);
      console.log("initialValue", initialValue);
      setOnBoarding(initialValue);
    })();
  }, [onBoarding]);

  //Fonts loading
  let [fontsLoaded] = useFonts({
    "Large-bold": require("./assets/Fonts/BentonSans-Black.otf"),
    "Medium-Bold": require("./assets/Fonts/BentonSans-Bold.otf"),
    Medium: require("./assets/Fonts/BentonSans-Medium.otf"),
    Regular: require("./assets/Fonts/BentonSans-Regular.otf"),
    Small: require("./assets/Fonts/BentonSans-Book.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return onBoarding ? (
      userLoading ? (
        <AppLoading />
      ) : (
        <MainApp />
      )
    ) : (
      <OnBoarding setOnBoarding={setOnBoarding} />
    );
  }
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);

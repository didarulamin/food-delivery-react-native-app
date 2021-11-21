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

const Stack = createNativeStackNavigator();

const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/*    <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        /> */}
        {/*  <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="signUpBio"
          component={SignUpBio}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function App() {
  const [onBoarding, setOnBoarding] = React.useState(false);

  console.log("onBoarding", onBoarding);

  React.useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem("onboarding");
      console.log("saved", saved);
      const initialValue = JSON.parse(saved);
      console.log("initialValue", initialValue);
      setOnBoarding(initialValue);
    })();
  }, [onBoarding]);

  return onBoarding ? (
    <OnBoarding setOnBoarding={setOnBoarding} />
  ) : (
    <MainApp />
  );
}

export default App;

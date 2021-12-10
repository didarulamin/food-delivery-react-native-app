import React from "react";
import { Button, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setUser, selectUser } from "../../redux/userSlice";

export function Counter() {
  const count = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, marginTop: 100 }}>
      <View>
        <Button title="Decrement" onPress={() => dispatch(setUser())}></Button>
        <Text>{count.currentUser}</Text>
        {/*   <Button
          title="Increment"
          onPress={() => dispatch(decrement())}
        ></Button> */}
      </View>
    </View>
  );
}

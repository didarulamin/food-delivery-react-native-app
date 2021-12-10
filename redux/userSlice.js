import { createSlice } from "@reduxjs/toolkit";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// const auth = getAuth();

const initialState = {
  user: {},
  auth: {},
};

const userSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    signInUsingEmail: (state, action) => {
      const { email, password } = action.payload;
      const { auth } = state;
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          console.log("sign in success", result.user);
          console.log(state, "usersignin");
          // state.user = auth.currentUser;
          // console.log(state.user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    },
    handleSignOut: (state, action) => {
      const { auth } = state;
      signOut(auth)
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        });
    },

    saveUser: (state, action) => {
      state.user = action.payload;
      console.log(state.user, "user action");
    },

    setAuth: (state, action) => {
      state.auth = action.payload;
      console.log(state.auth, "auth action");
      console.log(state, "state");
    },
  },
});

export const { signInUsingEmail, saveUser, handleSignOut, setAuth } =
  userSlice.actions;
export const selectUser = (state) => state.userAuth.user;

export default userSlice.reducer;

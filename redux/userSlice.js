import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { showMessage, hideMessage } from "react-native-flash-message";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

// const auth = getAuth();

export const saveUserData = createAsyncThunk(
  "saveUserData",
  async (userData) => {
    const data = json.stringify(userData);
    console.log(data, "data");
    {
      const res = await axios.post(
        "https://immense-tundra-77464.herokuapp.com/saveUser/",
        {
          ...userData,
        }
      );

      showMessage({
        message: "success",
        type: "success",
      });

      return res.data;
    }
  }
);

const initialState = {
  user: {},
  auth: {},
};

const userSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    signInUsingEmail: (state, action) => {
      const { email, password, fname, lname } = action.payload;
      const { auth } = state;
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          updateProfile(auth.currentUser, {
            displayName: `${fname}+${lname}`,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              showMessage({
                message: "success",
                type: "success",
              });
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    },
    signUpUsingEmail: (state, action) => {
      const { auth } = state;
      const { email, password } = action.payload;
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
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
      /*  console.log(state.user, "user action"); */
    },

    setAuth: (state, action) => {
      state.auth = action.payload;
      /* console.log(state.auth, "auth action");
      console.log(state, "state"); */
    },
  },
  extraReducers: {
    [saveUserData.fulfilled]: (state, action) => {
      console.log("success");
    },
  },
});

export const {
  signInUsingEmail,
  saveUser,
  handleSignOut,
  setAuth,
  signUpUsingEmail,
} = userSlice.actions;
export const selectUser = (state) => state.userAuth.user;

export default userSlice.reducer;

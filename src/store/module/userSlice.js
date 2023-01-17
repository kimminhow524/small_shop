import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", email: "", age: "", lastLogin: "" };
let user = createSlice({
  name: "user",
  initialState,
  reducers: {
    ChangeName(state, param) {
      return param.payload + state;
    },
  },
});
export let { ChangeName } = user.actions;
export default user;

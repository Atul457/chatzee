import { createSlice } from "@reduxjs/toolkit";
import { IFriend } from "../../helpers/types";
import { IFriendProps } from "../../helpers/types";
const chatSlice = createSlice({
  name: "chat",
  initialState: {
    opened_chat: {},
    friends: [],
  },
  reducers: {
    switchChat: (state, action: { payload: IFriend | {} }) => {
      state.opened_chat = action.payload;
    },
    handleFriends: (state, action: { payload: IFriend[] | any }) => {
      state.friends = action.payload;
    },
  },
});

export const chat = chatSlice.reducer;
export const { switchChat, handleFriends } = chatSlice.actions;

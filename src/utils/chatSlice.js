import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: []
  },
  reducers: {
    addChat: (state, action) => {
      state.messages.splice(20, 1);
      state.messages.unshift(action.payload);
    },
    resetChat: (state, action) => {
      state.messages = [];
    }
  }
})

export const { addChat, resetChat } = chatSlice.actions;

export default chatSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import suggestionSlice from "./suggestionSlice";
import commentSlice from "./commentSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    suggestion: suggestionSlice,
    comments: commentSlice,
    chats: chatSlice
  }
})

export default store;
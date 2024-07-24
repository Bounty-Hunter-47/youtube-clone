import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import suggestionSlice from "./suggestionSlice";
import commentSlice from "./commentSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    suggestion: suggestionSlice,
    comments: commentSlice
  }
})

export default store;
import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import suggestionSlice from "./suggestionSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    suggestion: suggestionSlice
  }
})

export default store;
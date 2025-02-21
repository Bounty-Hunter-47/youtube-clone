import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comment",
  initialState: {},
  reducers: {
    addComment: (state, action) => {
      return { ...state, ...action.payload }
    }
  }
})
export const { addComment } = commentSlice.actions;

export default commentSlice.reducer
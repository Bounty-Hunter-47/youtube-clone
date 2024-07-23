import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice = createSlice({
  name: "suggestion",
  initialState: {
    LRU: [],
    cache: {},
    CACHE_LIMIT: 10
  },
  reducers: {
    addSuggestion: (state, action) => {
      if (state.LRU.length >= state.CACHE_LIMIT) {
        delete state.cache[state.LRU.shift()];
      }
      state.LRU.push(action.payload[0]);
      state.cache[action.payload[0]] = action.payload[1];
      console.log('mutated state');
    }
  }
})

export const { addSuggestion } = suggestionSlice.actions;

export default suggestionSlice.reducer;



// [1,2,3,4,5]
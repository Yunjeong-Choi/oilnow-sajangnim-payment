import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface PayState {
  isDetailOpen: boolean;
  openedRowIndex?: number;
}

// Define the initial state using that type
const initialState: PayState = {
  isDetailOpen: false,
};

export const paySlice = createSlice({
  name: "pay",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    isOpen: (state, action: PayloadAction<number>) => {
      state.isDetailOpen = !state.isDetailOpen;
      state.openedRowIndex = !state.isDetailOpen ? undefined : action.payload;
    },
  },
});

export const { isOpen } = paySlice.actions;

export default paySlice.reducer;

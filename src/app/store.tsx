import { configureStore } from "@reduxjs/toolkit";
import payReducer from "../features/paySlice";

export const store = configureStore({
  devTools: true,
  reducer: {
    pay: payReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

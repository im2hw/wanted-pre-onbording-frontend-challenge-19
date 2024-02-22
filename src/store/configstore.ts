import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./modules/todosSlice";

const store = configureStore({
  reducer: {
    todos: todosSlice,
  }, // key-value pair
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

interface Todo {
  id: string;
  text: string;
}

const initialState: Todo[] = [
  {
    id: uuid(),
    text: "원티드 사전과제 완성~",
  },
  {
    id: uuid(),
    text: "유후",
  },
];

const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({ id: uuid(), text: action.payload });
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const todoId = action.payload;
      return state.filter((todo) => todo.id !== todoId);
    },
  },
});

export default todosSlice.reducer;
export const { addTodo, deleteTodo } = todosSlice.actions;

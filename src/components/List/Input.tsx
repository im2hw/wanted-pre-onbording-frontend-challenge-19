import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { AppDispatch } from "../../store/configstore";
import { addTodo } from "../../store/modules/todosSlice";

const Input = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const submitButtonHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div>
      <StForm onSubmit={submitButtonHandler}>
        <input type="text" value={text} onChange={onChangeHandler} />
        <button type="submit">Add</button>
      </StForm>
    </div>
  );
};

export default Input;

const StForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 800px;
  height: 40px;
  gap: 20px;

  & input {
    height: 30px;
    width: 400px;
    border-radius: 12px;
    padding: 4px;
  }

  & button {
    width: 80px;
    height: 32px;
    border-radius: 10px;
    background-color: #0051ff;
    color: white;
    border: none;
  }
`;

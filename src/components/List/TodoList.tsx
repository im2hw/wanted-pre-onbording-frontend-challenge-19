import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AppDispatch, RootState } from "../../store/configstore";
import { deleteTodo } from "../../store/modules/todosSlice";

const TodoList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todoList = useSelector((state: RootState) => state.todos);

  const deleteHandler = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      {todoList.map((todo) => {
        return (
          <StTodo key={todo.id}>
            <p>{todo.text}</p>
            <button onClick={() => deleteHandler(todo.id)}>delete</button>
          </StTodo>
        );
      })}
    </div>
  );
};

export default TodoList;

const StTodo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 1px solid #ddd;
  margin: 16px 0;
  border-radius: 14px;
  padding: 16px;
  height: 40px;
  width: 500px;
  margin: 30px auto;
  margin & p {
    font-size: 16px;
    margin: 0;
    height: 20px;
  }

  & button {
    width: 80px;
    height: 30px;
    border-radius: 14px;
    color: white;
    background-color: #0051ff;
    border: none;
  }
`;

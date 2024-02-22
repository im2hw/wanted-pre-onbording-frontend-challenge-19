import styled from "styled-components";
import Input from "./components/List/Input";
import TodoList from "./components/List/TodoList";

export type todoProps = {
  todos: todos[];
  setTodos: React.Dispatch<
    React.SetStateAction<{ id: string; text: string; isDelete: boolean }[]>
  >;
};

export type todos = {
  id: string;
  text: string;
  isDelete: boolean;
};

const App = () => {
  return (
    <StWrapper>
      <Input />
      <TodoList />
    </StWrapper>
  );
};

export default App;

const StWrapper = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  background-color: #eee;
  padding: 20px;
  height: auto;
`;

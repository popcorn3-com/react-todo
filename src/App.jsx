import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setincompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    setincompleteTodos([...incompleteTodos, todoText]);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setincompleteTodos(newIncompleteTodos);
  };

  const onClickComplite = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    setincompleteTodos(newIncompleteTodos);
    setcompleteTodos([...completeTodos, incompleteTodos[index]]);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setincompleteTodos([...incompleteTodos, completeTodos[index]]);
    setcompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={onClickAdd}
      />

      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplite={onClickComplite}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};

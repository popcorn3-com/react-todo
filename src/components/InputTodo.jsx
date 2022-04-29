export const InputTodo = (props) => {
  const style = {
    width: "400px",
    margin: "8px",
    padding: "10px",
    borderRadius: "6px",
    backgroundColor: "#c1ffff"
  };
  const { todoText, onChangeTodoText, onClickAdd } = props;
  return (
    <div style={style}>
      <input
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChangeTodoText}
      />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};

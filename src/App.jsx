import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setincompleteTodos] = useState([
    "ああああああああ",
    "いいいいいい"
  ]);
  const [completeTodos, setcompleteTodos] = useState(["うううううう"]);

  return (
    <>
      <div className="input-area">
        <input type="text" placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul className="to-do-list">
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo} className="list-row">
                <p>{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul className="to-do-list">
          {completeTodos.map((todo) => {
            return (
              <li key={todo} className="list-row">
                <p>{todo}</p>
                <button>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div></div>
    </>
  );
};

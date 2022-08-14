import React, { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    setTodos([...todos, text]);
    setText("");
  };

  return (
    <div className="todo">
      <h2>TodoLIst</h2>
      <div className="top">
        <input
          autoFocus
          onChange={handleChange}
          value={text}
          placeholder="add todos..."
        />
        <button onClick={handleClick}>Add+</button>
      </div>

      <div className="todoList">
        <h3>Todos :</h3>
        {todos.map((todo) => (
          <p className="todos">{todo}</p>
        ))}
      </div>
    </div>
  );
};

export default Todo;

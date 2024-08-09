import React, { useState } from "react";

const Eight = () => {
  const [input, setinput] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setinput("");
    }
  };
  const removeTodo = (index) => {
    const updateTodo = todos.filter((_, i) => i !== index);
    setTodos(updateTodo);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setinput(e.target.value);
        }}
        value={input}
      />
      <p>Input:{input}</p>
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeTodo(index)}>Remove</button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Eight;

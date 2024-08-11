import React, { useState } from "react";

const Eight = () => {
  const [todos, setTodos] = useState([]);
  const [input, setinput] = useState("");

  const addTodos = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
    }
    setinput("");
  };

  const removeTodos = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  console.log(todos);

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setinput(e.target.value)}
        value={input}
      />
      <p>input : {input}</p>
      <button onClick={addTodos}>Add Todos</button>
      <ul>
        {todos.map((elem, index) => (
          <div key={index}>
            {" "}
            <li>{elem}</li>
            <button onClick={()=>removeTodos(index)}>Remove Todo</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Eight;

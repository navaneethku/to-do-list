import React, { useState } from "react";
import "./App.css";
const App = () => {
  // const [value, setValue] = useState("Jhone Doe");
  const [inputValue, setInputValue] = useState("");
  const [lists, setLists] = useState([]);
  const update = () => {
    let obj = {
      id: lists.length,
      name: inputValue,
    };
    if (inputValue) {
      setLists([...lists, obj]);
      setInputValue("");
    }
  };
  const deleteObj = (id) => {
    let new_array = lists.filter((item) => item.id !== id);
    setLists(new_array)
  };
  console.log(lists);
  return (
    <>
      <h1>ToDo List</h1>
      <ul>
        {lists.map((item, i) => (
          <li key={i}>
            {item.name}
            <button onClick={() => deleteObj(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        placeholder="Enter Here"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
      ></input>
      <button onClick={() => update()}>Add New</button>
    </>
  );
};
export default App;

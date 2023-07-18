import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = useState(() => {
    const savedData = localStorage.getItem("list");
    return savedData ? JSON.parse(savedData) : [];
  });

  // const inputChange = (newValue) => {
  //   setInput(newValue)
  // }
  // console.log(input.filter( (item) => item.trim() !== ""));
  console.log(input);

 
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(input.filter((item) => item.text.trim() !== "")));
    // localStorage.setItem("list", JSON.stringify(input));
  }, [input]);

  return (
    <div className="App">
      <Header setInput={setInput} input={input} />
      <TodoList
        setInput={setInput}
        input={input}
        // input={input.filter((item) => item.text.trim() !== "")}
      />
    </div>
  );
}

export default App;

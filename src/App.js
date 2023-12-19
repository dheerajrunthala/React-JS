import React, { useState } from 'react';
import "./App.css";
import Header from "./MyComponents/Header";
import Addtodo from "./MyComponents/Addtodo";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";

function App() {
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "make an app",
      description: "we have to make this work today on github too with all the possible functionalities"
    },
    {
      sno: 2,
      title: "Say hii",
      description: "we have to say hiiii to Santa"
    },
    {
      sno: 3,
      title: "Say hii",
      description: "we have to say hiiii to Santa"
    }
  ]);

  const onDelete = (todo) => {
    console.log("I am deleting todo ", todo);
    setTodos(todos.filter((e) => e !== todo));
  };

  const addTodo = (title,desciption) => {
    console.log("I am adding this todo " , title,desciption);
  
  };



  return (
    <>
      <Header />
      <Addtodo addTodo = {addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;

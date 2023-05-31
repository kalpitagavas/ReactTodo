import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Todos from "./component/Todos";
import Footer from "./component/Footer";
import { useState } from "react";
import AddTodo from "./component/AddTodo";

function App() {
  
  const onDelete=(todo)=>{
    // console.log("ii",todo)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))

  }
  const addTodo=(title,desc)=>{
  let sno=todos[todos.length-1].sno+1
    const myTodo={
  sno:sno,
  title,
  desc
}
setTodos([...todos,myTodo])

  }
  const [todos,setTodos]=useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "Buy apples",
    },
    {
      sno: 2,
      title: "Go to the market",
      desc: "Buy mangoes",
    },
    {
      sno: 3,
      title: "Go to the market",
      desc: "Buy grapes",
    },
  ]);
  return (
    <div className="App">
      <Header title="Todo List" searchBar={false} />
      <AddTodo addTodo={addTodo}/>
      <hr></hr>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </div>
  );
}

export default App;

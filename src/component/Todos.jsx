import React from "react";
import TodoItem from "./TodoItem";

const Todos = ({ todos,onDelete }) => {
  return (
    <div className="container">

      <h1 className="text-center my-8 p-8">Todos</h1>
     {todos.length===0?<h4 className="text-secondary">No todos</h4>:
      todos.map((todo)=>{
       return <TodoItem todo={todo} key={todo.sno} onDelete={onDelete}/>
})
   }
    </div>
  );
};

export default Todos;

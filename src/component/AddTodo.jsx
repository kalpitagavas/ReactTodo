import React, { useState } from "react";

const AddTodo = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault()
    if(!title||!desc){
        alert("Fill all details")
    }
    addTodo(title,desc)
  };
  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div class="mb-3">
          <label for="title" class="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            class="form-control"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="desc" class="form-label">
            Description
          </label>
          <input
            type="text"
            value={desc}
            class="form-control"
            id="desc"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-sm btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;

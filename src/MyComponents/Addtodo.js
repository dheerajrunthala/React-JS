import React, { useState } from "react";

export default function Addtodo({ addTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const Addtodobtn = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title or Description cannot be blank");
    } else {
      addTodo(title, description);
      setTitle(""); // Clear the input fields after adding a todo
      setDescription("");
    }
  };

  let st = {
    top: "70vh",
  };

  return (
    <div className="container my-5" style={st}>
      <h3 className="my-3">Add Todo Task</h3>
      <div className="mb-3">
        <label htmlFor="todotitle" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="todotitle"
          placeholder="Add your Todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tododescription" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="tododescription"
          rows="2"
          placeholder="Add your Todo description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="button"
          className="btn btn-success container"
          onClick={() => Addtodobtn()}
        >
          Add Todo +
        </button>
      </div>
      <hr />
    </div>
  );
}

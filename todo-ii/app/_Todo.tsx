"use client";

import { useState } from "react";

export default function Todo(props: any) {
  const [isEditing, setEditing] = useState(false);

  const [newName, setNewName] = useState("");

  function handleChange(e: any) {
    setNewName(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center">
        <label htmlFor={props.id}>New Name for {props.name}</label>
        <input
          className="mx-5 rounded-lg"
          type="text"
          id={props.id}
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-row justify-center">
        <button type="button" className="m-5" onClick={() => setEditing(false)}>
          Cancel <span className="sr-only">renaming {props.name}</span>
        </button>
        <button type="submit" className="m-5">
          Save <span className="sr-only">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div>
      <div>
        <input
          id="todo-0"
          type="checkbox"
          className="mr-3"
          defaultChecked={props.complete}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="text-xl" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div>
        <button type="button" className="m-5" onClick={() => setEditing(true)}>
          Edit <span className="sr-only">{props.name}</span>
        </button>
        <button
          type="button"
          className="m-5"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="sr-only">{props.name}</span>
        </button>
      </div>
    </div>
  );

  return (
    <li className="m-2 bg-coralPink shadow-md rounded-3xl pt-3">
      {isEditing ? editingTemplate : viewTemplate}
    </li>
  );
}

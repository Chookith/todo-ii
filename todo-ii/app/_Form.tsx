"use client";

import { useState } from "react";

export default function Form(props: any) {
  const [name, setName] = useState("");

  function handleChange(event: any) {
    setName(event.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    props.addTask(name);
    setName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-3xl mb-5">
        <label htmlFor="new-todo-input">what needs to be done</label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="m-3 p-3 rounded-2xl ring ring-dun"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="bg-dun py-3 px-2 rounded-full shadow-md">
        Add
      </button>
    </form>
  );
}

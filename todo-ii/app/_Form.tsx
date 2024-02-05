"use client";

import { useState } from "react";

export default function Form(props: any) {
  const [name, setName] = useState("");

  function handleChange(event: any) {
    setName(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    props.addTask(name);
    setName("");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center divide-x divide-x-reverse "
    >
      <h2 className="text-3xl mb-5">
        <label htmlFor="new-todo-input"></label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="mx-3 p-5 rounded-2xl ring ring-dun just"
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

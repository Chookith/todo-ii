"use client";
import Add from "@mui/icons-material/Add";
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

  const addTitle = `Add New Task ${name}`;
  return (
    <form onSubmit={handleSubmit} className="m-5 flex flex-row ">
      <input
        type="text"
        id="new-todo-input"
        className="mr-3 flex basis-4/5 rounded-2xl p-3 text-center ring  ring-dun focus:ring-4 focus:ring-inset focus:ring-dun dark:bg-charcoal dark:ring-cinereous"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button
        type="submit"
        title={addTitle}
        className="flex basis-1/5 items-center justify-center rounded-full bg-dun shadow-md transition delay-75 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-coralPink dark:bg-cinereous dark:hover:shadow-darkCyan"
      >
        <Add />
        <span className="sr-only">Add</span>
      </button>
    </form>
  );
}

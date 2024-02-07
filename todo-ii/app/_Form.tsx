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
  return (
    <form onSubmit={handleSubmit} className="mt-5 flex w-full flex-row ">
      <input
        type="text"
        id="new-todo-input"
        className="dark:ring-cinereous mx-3 flex basis-4/5 rounded-2xl p-5  ring ring-dun focus:ring-4 focus:ring-inset focus:ring-dun dark:bg-charcoal"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button
        type="submit"
        className=" dark:bg-cinereous mx-3 flex basis-1/5 items-center justify-center rounded-full bg-dun shadow-md transition delay-75 hover:-translate-y-1 hover:scale-105 dark:hover:shadow-darkCyan"
      >
        <Add />
        <span className="sr-only">Add</span>
      </button>
    </form>
  );
}

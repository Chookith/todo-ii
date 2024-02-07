"use client";

import { Edit, Close, EditNote, Save, Backspace } from "@mui/icons-material";
import { useState } from "react";

export default function Todo(props: any) {
  const [isEditing, setEditing] = useState(false);
  const [isEditingDescription, setEditingDescription] = useState(false);

  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");

  function handleChangeName(e: any) {
    setNewName(e.target.value);
  }
  function handleChangeDescription(f: any) {
    setNewDescription(f.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  function handleSubmitDescription(e: any) {
    e.preventDefault();
    props.editTaskDescription(props.id, newDescription);
    setNewDescription("");
    setEditingDescription(false);
  }

  function editingTypeInput() {
    if (isEditing === true) {
      return (
        <>
          <label htmlFor={props.id}>New Name for {props.name}</label>
          <input
            className="mx-5 rounded-lg dark:bg-charcoal"
            type="text"
            id={props.id}
            value={newName}
            onChange={handleChangeName}
          />
        </>
      );
    } else if (isEditingDescription === true) {
      return (
        <>
          <label htmlFor={props.id}>New description for {props.name}</label>
          <input
            className="mx-5 rounded-lg dark:bg-charcoal"
            type="text"
            id={props.id}
            value={newDescription}
            onChange={handleChangeDescription}
          />
        </>
      );
    } else {
      return (
        <>
          <p>Umm what are you doing messing around in here</p>
        </>
      );
    }
  }

  function editingTypeButton() {
    if (isEditing === true && isEditingDescription === false) {
      return (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center">
            {editingTypeInput()}
          </div>
          <div className="flex flex-row justify-center">
            <button
              title="Save New Name"
              type="submit"
              className="m-2  rounded-2xl bg-apricot p-2 transition delay-75 hover:-translate-y-1 hover:scale-105  dark:bg-charcoal"
            >
              <Save className="items-center justify-center" />
              <span className="sr-only">Save new name for {props.name}</span>
            </button>
            <button
              type="button"
              className="m-2  rounded-2xl bg-apricot p-2 transition delay-75 hover:-translate-y-1 hover:scale-105 dark:bg-charcoal"
              title="Cancel renaming"
              onClick={() => setEditing(false)}
            >
              <Backspace></Backspace>
              <span className="sr-only"> Cancel renaming {props.name}</span>
            </button>
          </div>
        </form>
      );
    } else if (isEditingDescription === true && isEditing === false) {
      return (
        <form onSubmit={handleSubmitDescription} className="flex flex-row">
          <div className="flex basis-11/12 flex-col items-center justify-start">
            {editingTypeInput()}
          </div>
          <div className="m-1 flex flex-col justify-center">
            <button
              title="Save New Description"
              type="submit"
              className="my-1.5 flex items-center justify-start rounded-2xl bg-apricot p-2 shadow-lg transition delay-75 hover:-translate-y-1 hover:scale-105 dark:bg-charcoal"
            >
              <Save />
              <span className="sr-only">
                Save new description for {props.name}
              </span>
            </button>
            <button
              title="Cancel Description Rewriting"
              type="button"
              className="my-1.5 flex items-center justify-start rounded-2xl bg-apricot p-2 shadow-lg transition delay-75 hover:-translate-y-1 hover:scale-105 dark:bg-charcoal"
              onClick={() => setEditingDescription(false)}
            >
              <Backspace />
              <span className="sr-only">
                Cancel rewriting {props.name} description
              </span>
            </button>
          </div>
        </form>
      );
    } else if (isEditing === false && isEditingDescription === false) {
      return (
        <div className="m-2 flex w-full flex-row ">
          <section className="flex basis-11/12 flex-col items-center justify-start">
            <label
              className="divide-y divide-solid text-2xl "
              htmlFor={props.id}
            >
              {props.name}
            </label>
            <p>{props.description}</p>
          </section>
          <div className="mx-5 flex basis-1/12 flex-col items-end">
            <button
              title="Edit Name"
              type="button"
              className="my-0.5 rounded-2xl bg-apricot p-2 shadow-lg transition delay-75 hover:-translate-y-1 hover:scale-105 dark:bg-charcoal"
              onClick={() => setEditing(true)}
            >
              <Edit />
              <span className="sr-only">Edit name of {props.name}</span>
            </button>

            <button
              title="Edit Description"
              type="button"
              className="my-0.5 rounded-2xl bg-apricot p-2 shadow-lg transition delay-75 hover:-translate-y-1 hover:scale-105 dark:bg-charcoal"
              onClick={() => setEditingDescription(true)}
            >
              <EditNote />
              <span className="sr-only">Edit description of {props.name}</span>
            </button>

            <button
              title="Delete Task"
              type="button"
              className="my-0.5 rounded-2xl bg-apricot p-2 shadow-lg transition delay-75 hover:-translate-y-1 hover:scale-105 dark:bg-charcoal"
              onClick={() => props.deleteTask(props.id)}
            >
              <Close />
              <span className="sr-only">Delete {props.name}</span>
            </button>
          </div>
        </div>
      );
    } else {
      setEditing(false);
      setEditingDescription(false);
      return <p>respectfully you can't be here</p>;
    }
  }

  return (
    <li className="m-2 flex flex-row items-center justify-center rounded-3xl bg-coralPink pt-3 shadow-md dark:bg-darkCyan">
      <input
        id="todo-0"
        type="checkbox"
        className="dark:text-cinereous m-5 flex items-center justify-center rounded-xl p-2 text-darkCyan"
        defaultChecked={props.completed}
        onChange={() => props.toggleTaskCompleted(props.id)}
      />
      {editingTypeButton()}
    </li>
  );
}

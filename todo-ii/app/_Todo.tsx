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
    if (newName.length > 0) {
      props.editTask(props.id, newName);
      setNewName("");
      setEditing(false);
    } else {
      handleChangeName;
    }
  }

  function handleSubmitDescription(f: any) {
    f.preventDefault();
    if (newDescription.length > 0) {
      props.editTaskDescription(props.id, newDescription);
      setNewDescription("");
      setEditingDescription(false);
    } else {
      handleChangeDescription;
    }
  }

  function editingTypeInput() {
    if (isEditing === true) {
      return (
        <>
          <label htmlFor={props.id}>
            New Name for <b> {props.name}</b>
          </label>
          <input
            className="rounded-lg p-1.5 px-4 text-center dark:bg-charcoal"
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
          <label htmlFor={props.id}>
            New description for <b>{props.name} </b>
          </label>
          <input
            className="rounded-lg p-1.5 px-4 text-center dark:bg-charcoal"
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
        <form onSubmit={handleSubmit} className="m-2 flex flex-row ">
          <div className="basis-3/24 xl:basis-2/24 flex"></div>
          <section className="basis-20/24 flex flex-col ">
            {editingTypeInput()}
          </section>
          <div className="basis-1/24 mx-5 my-1.5 flex flex-col items-center justify-center">
            <button
              title="Save New Name"
              type="submit"
              className="my-1.5 rounded-2xl bg-apricot p-2 shadow-lg transition delay-75 hover:-translate-y-1 hover:scale-105 hover:shadow-darkRose dark:bg-charcoal dark:hover:shadow-charcoal"
            >
              <Save className="items-center justify-center" />
              <span className="sr-only">Save new name for {props.name}</span>
            </button>
            <button
              type="button"
              className="my-1.5 rounded-2xl bg-apricot p-2 shadow-lg transition delay-75 hover:-translate-y-1 hover:scale-105 hover:shadow-darkRose dark:bg-charcoal dark:hover:shadow-charcoal"
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
        <form onSubmit={handleSubmitDescription} className="m-2 flex flex-row ">
          <div className="basis-3/24 xl:basis-2/24 flex"></div>
          <section className="basis-20/24 flex flex-col">
            {editingTypeInput()}
          </section>
          <div className="basis-1/24 mx-5 flex flex-col items-center justify-center">
            <button
              title="Save New Description"
              type="submit"
              className="my-1.5 rounded-2xl bg-apricot p-2 shadow-lg transition delay-75 hover:-translate-y-1 hover:scale-105 hover:shadow-darkRose dark:bg-charcoal dark:hover:shadow-charcoal"
            >
              <Save />
              <span className="sr-only">
                Save new description for {props.name}
              </span>
            </button>
            <button
              title="Cancel Description Rewriting"
              type="button"
              className="my-1.5 rounded-2xl bg-apricot p-2 shadow-lg transition delay-75 hover:-translate-y-1 hover:scale-105 hover:shadow-darkRose dark:bg-charcoal dark:hover:shadow-charcoal"
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
      const completedNoun = props.completed ? "complete" : "not complete";
      const checkBoxTitle = `${props.name} is ${completedNoun}`;
      return (
        <div className=" m-2 flex h-full flex-row">
          <div className="basis-3/24 xl:basis-2/24 flex items-center justify-center">
            <input
              id="todo-0"
              title={checkBoxTitle}
              type="checkbox"
              className=" rounded-xl p-3 text-darkCyan dark:text-cinereous"
              defaultChecked={props.completed}
              onChange={() => props.toggleTaskCompleted(props.id)}
            />
          </div>
          <section className="basis-20/24 flex w-full flex-col items-center justify-start">
            <label className="text-2xl " htmlFor={props.id}>
              <b>{props.name}</b>
            </label>
            <p>{props.description}</p>
          </section>
          <div className=" basis-1/24 mx-5 flex flex-col items-center justify-center">
            <button
              title="Edit Name"
              type="button"
              className="my-1.5 rounded-2xl bg-apricot p-2 shadow-lg transition delay-75 hover:-translate-y-1 hover:scale-105 hover:shadow-darkRose dark:bg-charcoal dark:hover:shadow-charcoal"
              onClick={() => setEditing(true)}
            >
              <Edit />
              <span className="sr-only">Edit name of {props.name}</span>
            </button>

            <button
              title="Edit Description"
              type="button"
              className="my-1.5 rounded-2xl bg-apricot p-2 shadow-lg transition delay-75 hover:-translate-y-1 hover:scale-105 hover:shadow-darkRose dark:bg-charcoal dark:hover:shadow-charcoal"
              onClick={() => setEditingDescription(true)}
            >
              <EditNote />
              <span className="sr-only">Edit description of {props.name}</span>
            </button>

            <button
              title="Delete Task"
              type="button"
              className="my-1.5 rounded-2xl bg-apricot p-2 shadow-lg transition delay-75 hover:-translate-y-1 hover:scale-105 hover:shadow-darkRose dark:bg-charcoal dark:hover:shadow-charcoal"
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
    <li className="m-2 rounded-3xl bg-coralPink pt-3 shadow-md dark:bg-darkCyan">
      {editingTypeButton()}
    </li>
  );
}

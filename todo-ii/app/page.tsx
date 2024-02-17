"use client";

import FilterButton from "./_FilterButton";
import Form from "./_Form";
import Todo from "./_Todo";
import { useState } from "react";
import { nanoid } from "nanoid";

const DATA = [
  { id: "todo-0", name: "Eat", complete: false, description: "else" },
  { id: "todo-1", name: "Sleep", complete: false, description: "something" },
  { id: "todo-2", name: "Rave", complete: false, description: "something" },
];

const FILTER_MAP = {
  All: () => true,
  Active: (task: TaskInter) => task.complete === false,
  Complete: (task: TaskInter) => task.complete === true,
};

const All = () => true;
const Active = (task: TaskInter) => task.complete === false;
const Complete = (task: TaskInter) => task.complete === true;
const FILTER_ARRAY = [All, Active, Complete];

const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function Home() {
  const [tasks, setTask] = useState(DATA);
  const [filter, setFilter] = useState("All");

  function toggleTaskCompleted(id: string) {
    const updatedTasks = tasks.map((task: TaskInter) => {
      if (id === task.id) {
        return { ...task, complete: !task.complete };
      }

      return task;
    });
    console.log(tasks);
    setTask(updatedTasks);
  }

  function deleteTask(id: string) {
    const remainingTasks = tasks.filter((task: any) => id !== task.id);
    setTask(remainingTasks);
  }

  function addTask(name: string) {
    const newTask = {
      id: `todo-${nanoid()}`,
      name: name,
      complete: false,
      description: "",
    };
    setTask([...tasks, newTask]);
  }

  function editTask(id: string, newName: string) {
    const editedTaskList = tasks.map((task: TaskInter) => {
      if (id === task.id) {
        if (newName.length > 0) {
          return { ...task, name: newName };
        } else {
          console.log("I cant do anything with this");
          return { ...task, name: newName };
        }
      }
      return task;
    });
    setTask(editedTaskList);
  }

  function editTaskDescription(id: string, newDescription: string) {
    const editedTaskList = tasks.map((task: TaskInter) => {
      if (id === task.id) {
        return { ...task, description: newDescription };
      }
      return task;
    });
    setTask(editedTaskList);
  }

  function filterBeingUsed() {
    if (filter === "All") {
      return All;
    } else if (filter === "Active") {
      return Active;
    } else if (filter === "Complete") {
      return Complete;
    } else {
      return All;
    }
  }

  const taskList = tasks
    .filter(filterBeingUsed())
    .map((task: TaskInter) => (
      <Todo
        id={task.id}
        name={task.name}
        description={task.description}
        completed={task.complete}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
        editTaskDescription={editTaskDescription}
      />
    ));

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} left`;

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  return (
    <div className="m-5">
      <h1 className="mb-5 text-5xl">Todo II</h1>
      <div className="m-2 flex justify-center ">{filterList}</div>
      <h2 className="mx-5 flex items-center justify-center text-center">
        {headingText}
      </h2>
      <ul
        role="list"
        className="mx-3 flex flex-col"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
      <Form className=" flex w-full" addTask={addTask} />
    </div>
  );
}

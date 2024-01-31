"use client";

import FilterButton from "./_FilterButton";
import Form from "./_Form";
import Todo from "./_Todo";
import { useState } from "react";
import { nanoid } from "nanoid";

const FILTER_MAP = [
  {
    All: () => true,
    Active: (task: TaskInter) => !task.complete,
    Complete: (task: TaskInter) => task.complete,
  },
];

const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function Home(props: TaskInter) {
  const [nm, setTask] = useState(props.tasks);
  const [filter, setFilter] = useState("All");

  function deleteTask(id: string) {
    const remainingTasks = tasks.filter((task: any) => id !== task.id);
    setTask(remainingTasks);
  }

  function addTask(name: string) {
    const newTask = { id: `todo-${nanoid()}`, name, complete: false };
    setTask([...tasks, newTask]);
  }

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task: TaskInter) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.complete}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  function toggleTaskCompleted(id: string) {
    const updatedTasks = tasks.map((task: any) => {
      if (id === task.id) {
        return { ...task, complete: !task.complete };
      }
      return task;
    });
    setTask(updatedTasks);
  }

  function editTask(id: string, newName: string) {
    const editedTaskList = tasks.map((task: any) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTask(editedTaskList);
  }

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-center p-24">
      <div>
        <h1 className="text-5xl mb-5">Todo II</h1>
        <Form addTask={addTask} />
        <div className="m-2">{filterList}</div>
        <h2>{headingText}</h2>
        <ul role="list" className="" aria-labelledby="list-heading">
          {taskList}
        </ul>
      </div>
    </main>
  );
}

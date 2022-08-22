import React from "react";
import useTodo from "../../hooks";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const Todo = () => {
  const { tasks, addTask, deleteTask, setDoneTask } = useTodo([
    {
      id: Date.now(),
      body: "test task",
      isDone: false,
    },
  ]);
  return (
    <div>
      <TaskInput addTask={addTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default Todo;

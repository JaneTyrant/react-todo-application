import React from "react";
import useTodo from "../../hooks";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const Todo = () => {
  const { tasks, addTask, deleteTask, setDoneTask } = useTodo([
    {
      id: Date.now(),
      body: "Work 1",
      isDone: false,
    },
  ]);
  return (
    <section>
      <TaskInput addTask={addTask} name="body" />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        setDoneTask={setDoneTask}
      />
    </section>
  );
};

export default Todo;

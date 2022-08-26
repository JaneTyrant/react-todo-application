import React from "react";
import useTodo from "../../hooks";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import styles from "./Todo.module.scss";

const Todo = () => {
  const { tasks, addTask, deleteTask, setDoneTask } = useTodo([
    {
      id: Date.now(),
      body: "Work 1",
      isDone: false,
    },
  ]);
  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>todo list</h1>
      <div className={styles.container}>
        <TaskInput addTask={addTask} name="body" />
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          setDoneTask={setDoneTask}
        />
      </div>
    </section>
  );
};

export default Todo;

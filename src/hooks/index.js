import { useState } from "react";

const useTodo = (initialTasks) => {
  const [tasks, setTasks] = useState(initialTasks);
  const addTask = (values, formikBag) => {
    const newTask = {
      id: Date.now(),
      body: values.body,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
    formikBag.resetForm();
  };
  const setDoneTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : { ...task }
      )
    );
  };
  return {
    tasks,
    addTask,
    setDoneTask,
    deleteTask: (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    },
  };
};

export default useTodo;

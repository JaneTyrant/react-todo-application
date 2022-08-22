import { useState } from "react";

const useTodo = (initialTasks) => {
  const [tasks, setTasks] = useState(initialTasks);
  
  return {
    tasks,
    addTask: (values) => {
      const newTask = {
        id: Date.now(),
        body: values.body,
        isDone: false,
      };
      setTasks([...tasks, newTask])
    },
    deleteTask : (id) => {
      setTasks(tasks.filter((task)=>task.id!==id))
    },
    setDoneTask: (id) => {
        //map
    }
  };
};

export default useTodo;
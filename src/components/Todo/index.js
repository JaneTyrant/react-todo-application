import React from "react";
import { Formik, Form, Field } from "formik";
import useTodo from "../../hooks";

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
      <Formik initialValues={{ body: "" }} onSubmit={addTask}>
        <Form>
          <Field name="body" />
          <input type="submit" value="+" />
        </Form>
      </Formik>
      <section>
        {tasks.map((task) => (
          <p key={task.id}>
            {task.body}
            <span
              onClick={() => {
                deleteTask(task.id);
              }}
            >
              X
            </span>
          </p>
        ))}
      </section>
    </div>
  );
};

export default Todo;

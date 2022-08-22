import React from "react";
import { Formik, Form, Field } from "formik";

const TaskInput = (props) => {
  const { addTask } = props;
  return (
    <div>
      <Formik initialValues={{ body: "" }} onSubmit={addTask}>
        <Form>
          <Field name="body" />
          <input type="submit" value="+" />
        </Form>
      </Formik>
    </div>
  );
};

export default TaskInput;
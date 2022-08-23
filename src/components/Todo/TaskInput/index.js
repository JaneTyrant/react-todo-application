import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import cx from "classnames";
import { SCHEMA_TASK } from "../../../utils/validateSchemas";
import styles from "./TaskInput.module.scss";

const TaskInput = (props) => {
  const { addTask, name, ...restProps } = props;
  return (
    <Formik
      initialValues={{ body: "" }}
      onSubmit={addTask}
      validationSchema={SCHEMA_TASK}
    >
      <Form>
        <label className={styles.label}>
          <Field name={name}>
            {({ field, form, meta }) => {
              const inputClasses = cx(styles.input, {
                [styles.invalid]: meta.error && meta.touched,
                [styles.valid]: !meta.error && meta.value,
              });
              return (
                <input {...field} className={inputClasses} {...restProps} />
              );
            }}
          </Field>
          <ErrorMessage name={name} component="span" className={styles.error} />
        </label>
        <input type="submit" value="+" />
      </Form>
    </Formik>
  );
};

export default TaskInput;

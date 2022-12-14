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
      <Form className={styles.form}>
        <label>
          <Field name={name}>
            {({ field, form, meta }) => {
              const inputClasses = cx(styles.form_input, {
                [styles.form_input_invalid]: meta.error && meta.touched,
                [styles.form_input_valid]: !meta.error && meta.value,
              });
              return (
                <input {...field} className={inputClasses} {...restProps} />
              );
            }}
          </Field>
          <ErrorMessage name={name} component="span" className={styles.form_error} />
        </label>
        <input className={styles.form_submit} type="submit" value="+" />
      </Form>
    </Formik>
  );
};

export default TaskInput;

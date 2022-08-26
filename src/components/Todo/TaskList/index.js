import React, { useState } from "react";
import { Delete } from "@mui/icons-material";
import SelectTask from "../SelectTask";
import OptionValues from "../../../constants.js";
import styles from "./TaskList.module.scss";

const TaskList = (props) => {
  const { tasks, deleteTask, setDoneTask } = props;
  const [selectValue, setSelectValue] = useState(OptionValues.all);
  const showTask = (task) => {
    return (
      <div className={styles.container} key={`div${task.id}`}>
        <label>
          <p className={styles["task-body"]} key={task.id}>
            {task.body}
          </p>
          <input
            className={styles.checkbox}
            type="checkbox"
            value={task.isDone}
            checked={task.isDone}
            onChange={() => {
              setDoneTask(task.id);
            }}
          />
        </label>
        <span
          className={styles.delete}
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          <span className={styles["delete-wrapper"]}>
          <Delete />
          </span>
        </span>
      </div>
    );
  };
  const ShowSelected = () => {
    if (selectValue === OptionValues.all) {
      return tasks.map(showTask);
    }
    if (selectValue === OptionValues.done) {
      return tasks.filter((task) => task.isDone).map(showTask);
    }
    if (selectValue === OptionValues.not_done) {
      return tasks.filter((task) => !task.isDone).map(showTask);
    }
  };
  return (
    <>
      <SelectTask selectValue={selectValue} setSelectValue={setSelectValue} />
      <article className={styles.article}>
        <ShowSelected />
      </article>
    </>
  );
};

export default TaskList;

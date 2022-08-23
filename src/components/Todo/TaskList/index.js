import React, { useState } from "react";
import SelectTask from "../SelectTask";
import OptionValues from "../../../utils";

const TaskList = (props) => {
  const { tasks, deleteTask, setDoneTask } = props;
  const [selectValue, setSelectValue] = useState(OptionValues.all);
  const showTask = (task) => {
    return (
      <div key={`div${task.id}`}>
        <label>
          <input
            type="checkbox"
            value={task.isDone}
            checked={task.isDone}
            onChange={() => {
              setDoneTask(task.id);
            }}
          />
          <p key={task.id}>{task.body}</p>
        </label>
        <span
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          X
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
      <article>
        <ShowSelected />
      </article>
    </>
  );
};

export default TaskList;

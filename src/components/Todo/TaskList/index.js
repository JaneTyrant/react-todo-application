import React from "react";

const TaskList = (props) => {
  const { tasks, deleteTask } = props;
  return (
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
  );
};

export default TaskList;
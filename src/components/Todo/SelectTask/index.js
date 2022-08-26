import React from "react";
import OptionValues from "../../../constants.js";
import styles from "./SelectTask.module.scss";

const SelectTask = (props) => {
  const { selectValue, setSelectValue } = props;
  const handlerSelect = ({ target: { value } }) => {
    setSelectValue(value);
  };
  const Options = () => {
    return Object.values(OptionValues).map((value, i) => (
      <option key={i} value={value}>
        {value}
      </option>
    ));
  };
  return (
    <>
      <div className={styles.container}>
          <select
            className={styles.select}
            name="select"
            value={selectValue}
            onChange={handlerSelect}
          >
            <Options />
          </select>
      </div>
    </>
  );
};

export default SelectTask;

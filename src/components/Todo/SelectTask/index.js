import React from "react";
import OptionValues from "../../../utils";

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
    <select name="select" value={selectValue} onChange={handlerSelect}>
      <Options />
    </select>
  );
};

export default SelectTask;

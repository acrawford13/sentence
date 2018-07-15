import React from "react";

const Select = ({ options, value, onChange, onClick, onBlur }) => (
  <select
    value={value}
    onChange={onChange}
    onClick={event => {
      event.stopPropagation();
      onClick && onClick(event);
    }}
    onBlur={onBlur}
  >
    <option value="">None</option>
    {options.map(option => <option value={option}>{option}</option>)}
  </select>
);

export default Select;

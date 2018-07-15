import React from "react";

const Select = ({ options, value, onChange, onClick }) => (
  <select value={value} onChange={onChange} onClick={onClick}>
    {options.map(option => <option>{option}</option>)}
  </select>
);

export default Select;

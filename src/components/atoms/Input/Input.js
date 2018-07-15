import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  padding: 0.5rem 0.75rem;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const Input = ({ value, onClick, onChange, autofocus, type, placeholder }) => (
  <StyledInput
    value={value}
    onChange={onChange}
    type={type}
    placeholder={placeholder}
    onClick={onClick}
    autoFocus={autofocus}
    onKeyPress={e => {
      e.stopPropagation();
    }}
  />
);

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string
};

export default Input;

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  padding: 0.5rem 0.75rem;
  width: 100%;
  font-size: 1rem;
  border: none;
  &:focus {
    outline: none;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  font-family: "Rubik", sans-serif;
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  min-height: 1rem;
  resize: none;
  height: 100%;
  border: none;
`;

export const Textarea = props => (
  <StyledTextarea
    {...props}
    rows="1"
    onKeyPress={e => {
      e.stopPropagation();
    }}
  />
);

export const Input = props => (
  <StyledInput
    {...props}
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

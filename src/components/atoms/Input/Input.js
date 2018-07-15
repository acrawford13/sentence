import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  padding: 0.5rem 0.75rem;
  width: 100%;
`;

const Input = ({ value, onChange, type, placeholder }) => (
  <StyledInput
    value={value}
    onChange={onChange}
    type={type}
    placeholder={placeholder}
  />
);

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string
};

export default Input;

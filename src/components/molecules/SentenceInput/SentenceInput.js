import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Input from "../../atoms/Input/Input";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SentenceInput = ({ value, onChange }) => (
  <Wrapper>
    <Input
      value={value}
      onChange={onChange}
      type="text"
      placeholder="Type your sentence here"
    />
  </Wrapper>
);

SentenceInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default SentenceInput;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Word from "../../molecules/Word/Word";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
`;

const Sentence = ({ children }) => (
  <Wrapper>{children.split(/\b\s?/).map(word => <Word>{word}</Word>)}</Wrapper>
);

Sentence.propTypes = {
  children: PropTypes.string
};

export default Sentence;

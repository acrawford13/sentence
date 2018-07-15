import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Word from "../../molecules/Word/Word";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: top;
  max-width: 70vw;
  justify-self: center;
  padding: 2rem 0;
`;

const Sentence = ({ words, handlePropertyChange }) => (
  <Wrapper>
    {words.map(
      word =>
        word && (
          <Word handlePropertyChange={handlePropertyChange} word={word}>
            {word.value}
          </Word>
        )
    )}
  </Wrapper>
);

Sentence.propTypes = {
  children: PropTypes.string
};

export default Sentence;

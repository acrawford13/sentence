import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 5vw;
`;

const Tooltip = styled.div`
  background-color: #f7f7f7;
  padding: 1rem;
  border-radius: 0.4rem;
  position: absolute;
  display: none;
  top: 110%;
  left: 0;
  width: max-content;
  max-width: 20rem;
  z-index: 1;
  color: #222;
`;

const WordWrapper = styled.a`
  position: relative;
  cursor: pointer;
  font-size: 2rem;
  line-height: 1.5;
  text-decoration: none;
  color: ${props => (props.hasDefinition ? "#0066b3" : "inherit")};
  &::after {
    content: "\00a0";
    display: inline-block;
  }
  &:hover {
    ${Tooltip} {
      display: inline-block;
    }
  }
`;

const Read = ({ words }) => {
  return (
    <Wrapper>
      <div>
        {words.valueSeq().map(word => (
          <WordWrapper
            target="_blank"
            href={`https://en.wiktionary.org/wiki/${word
              .get("value")
              .replace(/[,.]/g, "")
              .toLowerCase()}#Czech`}
            hasDefinition={word.get("definition")}
          >
            {word.get("value")}
            {word.get("definition") && (
              <Tooltip>{word.get("definition")}</Tooltip>
            )}
          </WordWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default Read;

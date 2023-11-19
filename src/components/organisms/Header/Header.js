import React from "react";
import styled from "styled-components";

import Button from "components/atoms/Button/Button";

const Wrapper = styled.div`
  background-color: #fafafa;
  padding: 1rem;
`;

const Heading = styled.h1`
  color: purple;
  margin: 0;
`;

const Header = ({ openSentenceDialog }) => (
  <Wrapper>
    <Heading>Sentence</Heading>
    <Button onClick={openSentenceDialog}>Add a sentence</Button>
  </Wrapper>
);

export default Header;

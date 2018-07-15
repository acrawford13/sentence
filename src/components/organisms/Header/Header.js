import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fafafa;
  padding: 1rem;
`;

const Heading = styled.h1`
  color: purple;
  margin: 0;
`;

const Header = () => (
  <Wrapper>
    <Heading>Sentence</Heading>
  </Wrapper>
);

export default Header;

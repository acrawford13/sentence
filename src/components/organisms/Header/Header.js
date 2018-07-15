import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fafafa;
  padding: 1rem;
`;

const Heading = styled.h1`
  color: purple;
`;

const Header = () => (
  <Wrapper>
    <Heading>Andrea</Heading>
  </Wrapper>
);

export default Header;

import styled from "styled-components";

const Button = styled.button`
  background-color: ${props => props.theme.colors.grass};
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
`;

export default Button;

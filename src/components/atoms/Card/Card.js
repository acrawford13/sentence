import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Card = styled.div`
  border: 1px solid #eee;
  display: inline-block;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  font-family: "Rubik", sans-serif;
  padding: 0.5rem 0.75rem;
  margin: 0.25rem;
  border-radius: 2px;
`;

// const Card = ({ children }) => <Wrapper>{children}</Wrapper>;

// Card.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.node,
//     PropTypes.arrayOf(PropTypes.node)
//   ])
// };

export default Card;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "../../atoms/Card/Card";

const Word = ({ children }) =>
  children.match(/[A-Za-z0-9']+/) ? (
    <Card>{children}</Card>
  ) : (
    <span>{children}</span>
  );

Word.propTypes = {
  children: PropTypes.string
};

export default Word;

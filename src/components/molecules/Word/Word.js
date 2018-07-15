import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "../../atoms/Card/Card";

const WordCard = Card.extend`
  border-top: 3px solid ${props => props.theme.wordTypes[props.type]};
`;

class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "verb"
    };
  }
  render() {
    return <WordCard type={this.state.type}>{this.props.children}</WordCard>;
  }
}

Word.propTypes = {
  children: PropTypes.string
};

export default Word;

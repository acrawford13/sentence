import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Card from "../../atoms/Card/Card";
import Select from "../../atoms/Select/Select";
import Input from "../../atoms/Input/Input";
import Noun from "./DialogTypes/Noun";
import List from "./components/List";
import Item from "./components/Item";

const Wrapper = styled.div`
  border-top: 1px solid #ccc;
  margin-top: 0.5rem;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
`;

const WordType = styled.span`
  color: ${props => props.theme.wordTypes[props.type]};
`;

const getDialogOptions = (type, props) => {
  switch (type) {
    case "noun":
      return <Noun {...props} />;
    case "verb":
    case "adjective":
    case "adverb":
    default:
      return;
  }
};

class Dialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeChangeEnabled: false
    };
    this.toggleTypeChange = this.toggleTypeChange.bind(this);
  }

  toggleTypeChange(event) {
    event.stopPropagation();
    this.setState({ typeChangeEnabled: !this.state.typeChangeEnabled });
  }

  render() {
    return (
      <Wrapper>
        <List>
          <Input
            value={this.props.word.definition}
            placeholder="Definition"
            onChange={event =>
              this.props.handlePropertyChange(
                "definition",
                this.props.word.id,
                event
              )
            }
            onClick={e => {
              e.stopPropagation();
            }}
          />
          <Item>
            Word type:{" "}
            {this.state.typeChangeEnabled ? (
              <Select
                value={this.props.word.type}
                options={["verb", "noun", "adjective", "adverb", "preposition"]}
                onChange={event =>
                  this.props.handlePropertyChange(
                    "type",
                    this.props.word.id,
                    event
                  )
                }
                onBlur={e => {
                  this.toggleTypeChange(e);
                }}
              />
            ) : (
              <WordType
                onClick={this.toggleTypeChange}
                type={this.props.word.type || "none"}
              >
                {this.props.word.type || "select"}
              </WordType>
            )}
          </Item>
          {getDialogOptions(this.props.word.type, {
            word: this.props.word,
            onChange: (key, event) =>
              this.props.handlePropertyChange(key, this.props.word.id, event)
          })}
        </List>
      </Wrapper>
    );
  }
}

export default Dialog;

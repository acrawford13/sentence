import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Card from "../../atoms/Card/Card";
import Dialog from "../../organisms/Dialog/Dialog";

const WordCard = Card.extend`
  cursor: pointer;
  color: ${props => !props.definition && "red"};
  border-top: 3px solid
    ${props =>
      !props.definition
        ? "red"
        : props.theme.wordTypes[props.type] || "transparent"};
  &:focus {
    outline: none;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
    color: dodgerblue;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  > * {
    margin-right: 0.5rem;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const Definition = styled.div`
  font-size: 0.8rem;
  color: #aaa;
`;

const Details = styled.div`
  font-size: 0.8rem;
  color: #aaa;
`;

class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
      typeChangeEnabled: false
    };
  }

  convertKeyCode(code) {
    switch (code) {
      case "v":
        return "verb";
      case "n":
        return "noun";
      case "j":
        return "adjective";
      case "d":
        return "adverb";
      case "p":
        return "preposition";
      default:
        return;
    }
  }

  render() {
    return (
      <div>
        <WordCard
          tabIndex="0"
          type={this.props.word.type}
          definition={this.props.word.definition}
          onClick={() =>
            this.setState({
              showDialog: !this.state.showDialog
            })
          }
          onKeyPress={event => {
            ["d", "j", "n", "p", "v"].indexOf(event.key) > -1 &&
              this.props.handlePropertyChange("type", this.props.word.id, {
                ...event,
                target: { value: this.convertKeyCode(event.key) },
                preventDefault: () => {}
              });
            [" "].indexOf(event.key) > -1 &&
              this.setState({ showDialog: !this.state.showDialog });
          }}
        >
          {this.props.children}
          <Info>
            {this.props.word.definition ? (
              <Definition>{this.props.word.definition}</Definition>
            ) : (
              false
            )}
            {(this.props.word.gender || this.props.word.case) && (
              <Details>
                {[
                  this.props.word.gender &&
                    this.props.word.gender
                      .replace("feminine", "♀")
                      .replace("masculine", "♂"),
                  this.props.word.case
                ]
                  .filter(item => item)
                  .join(" | ")}
              </Details>
            )}
          </Info>
          {this.state.showDialog && (
            <Dialog
              toggleTypeChange={this.toggleTypeChange}
              typeChangeEnabled={this.state.typeChangeEnabled}
              handlePropertyChange={this.props.handlePropertyChange}
              word={this.props.word}
            />
          )}
        </WordCard>
      </div>
    );
  }
}

Word.propTypes = {
  children: PropTypes.string
};

export default Word;

import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "../../atoms/Card/Card";
import Dialog from "../../organisms/Dialog/Dialog";

const WordCard = Card.extend`
  cursor: pointer;
  border-top: 3px solid
    ${props => props.theme.wordTypes[props.type] || "transparent"};
`;

class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: null,
      showDialog: false,
      typeChangeEnabled: false
    };
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.toggleTypeChange = this.toggleTypeChange.bind(this);
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
      default:
        return;
    }
  }

  handleTypeChange(event) {
    event.preventDefault();
    this.setState({ type: event.target.value });
  }

  toggleTypeChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({ typeChangeEnabled: !this.state.typeChangeEnabled });
  }

  render() {
    return (
      <div>
        <WordCard
          tabIndex="0"
          type={this.state.type}
          onClick={() =>
            this.setState({
              showDialog: !this.state.showDialog
            })
          }
          onKeyPress={event => {
            this.handleTypeChange({
              ...event,
              target: { value: this.convertKeyCode(event.key) },
              preventDefault: () => {}
            });
          }}
        >
          {this.props.children}
          {this.state.showDialog && (
            <Dialog
              onTypeChange={this.handleTypeChange}
              toggleTypeChange={this.toggleTypeChange}
              word={{ type: this.state.type }}
              typeChangeEnabled={this.state.typeChangeEnabled}
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

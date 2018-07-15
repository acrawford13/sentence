import React, { Component } from "react";
import Header from "./components/organisms/Header/Header";
import Sentence from "./components/organisms/Sentence/Sentence";
import Input from "./components/atoms/Input/Input";
import SentenceInput from "./components/molecules/SentenceInput/SentenceInput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentence: "Once upon a time"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ sentence: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SentenceInput
          onChange={this.handleChange}
          value={this.state.sentence}
        />
        <Sentence>{this.state.sentence}</Sentence>
      </div>
    );
  }
}

export default App;

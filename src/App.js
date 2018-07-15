import React, { Component } from "react";
import styled from "styled-components";
import Header from "./components/organisms/Header/Header";
import Sentence from "./components/organisms/Sentence/Sentence";
import SentenceInput from "./components/molecules/SentenceInput/SentenceInput";
import { OrderedMap, Map } from "immutable";

const Wrapper = styled.div`
  display: grid;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: OrderedMap(
        "Jednou v zimě, když ležel venku sníh a a mrzlo jen praštilo, vzpomněla si Holena, že by chtěla fialky."
          .split(" ")
          .map((word, i) => [
            `${i}`,
            Map({
              id: `${i}`,
              cases: Map(),
              value: word
            })
          ])
      ),
      sentence:
        "Jednou v zimě, když ležel venku sníh a mrzlo jen praštilo, vzpomněla si Holena, že by chtěla fialky."
    };
    this.handlePropertyChange = this.handlePropertyChange.bind(this);
    this.handleSentenceChange = this.handleSentenceChange.bind(this);
  }

  handlePropertyChange(property, id, event) {
    event.preventDefault();
    const state = this.state.words.setIn(
      [id, ...property.split(".")],
      event.target.value
    );
    this.setState({ words: state });
  }

  handleSentenceChange(event) {
    this.setState({
      sentence: event.target.value,
      words: OrderedMap(
        event.target.value.split(" ").map((word, i) => [
          `${i}`,
          Map({
            id: `${i}`,
            cases: Map({}),
            value: word
          })
        ])
      )
    });
  }

  render() {
    return (
      <Wrapper className="App">
        <Header />
        <SentenceInput
          onChange={this.handleSentenceChange}
          value={this.state.sentence}
        />
        <Sentence
          handlePropertyChange={this.handlePropertyChange}
          words={this.state.words.valueSeq().toJS()}
        >
          {this.state.sentence}
        </Sentence>
      </Wrapper>
    );
  }
}

export default App;

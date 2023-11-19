import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/organisms/Header/Header";
import Sentence from "./components/organisms/Sentence/Sentence";
import Table from "./components/organisms/Table/Table";
import Modal from "components/atoms/Modal/Modal";
import Button from "components/atoms/Button/Button";
import Input, { Textarea } from "./components/atoms/Input/Input";
import { OrderedMap, Map, fromJS } from "immutable";
import Read from "./scenes/Read/Read";

const Wrapper = styled.div`
  display: grid;
`;

export const splitSentence = sentence =>
  OrderedMap(
    sentence
      .split(/\s/)
      .filter(word => word)
      .map((word, i) => [
        `${i}`,
        Map({
          id: `${i}`,
          cases: Map({}),
          value: word
        })
      ])
  );

export const getFromLocalStorage = key => localStorage.getItem(key);
export const saveToLocalStorage = (key, value) =>
  localStorage.setItem(key, value);

export const orderedMapFromJS = object =>
  OrderedMap(object).map(value => Map(value));

export const intialise = () => {};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: Map({}),
      sentence: "",
      view: Map({
        sentenceModal: false,
        hideCzech: true,
        hideDefinitions: false
      })
      // words: OrderedMap(
      //   "Jednou v zimě, když ležel venku sníh a mrzlo jen praštilo, vzpomněla si Holena, že by chtěla fialky."
      //     .split(" ")
      //     .map((word, i) => [
      //       `${i}`,
      //       Map({
      //         id: `${i}`,
      //         cases: Map(),
      //         value: word
      //       })
      //     ])
      // ),
      // sentence:
      //   "Jednou v zimě, když ležel venku sníh a mrzlo jen praštilo, vzpomněla si Holena, že by chtěla fialky."
    };
  }

  componentDidMount() {
    const sentence = getFromLocalStorage("sentence") || "";
    const words = orderedMapFromJS(JSON.parse(getFromLocalStorage("words")));
    this.setState({ sentence, words });
  }

  handlePropertyChange = (property, id, event) => {
    event.preventDefault();
    const state = this.state.words.setIn(
      [id, ...property.split(".")],
      event.target.value
    );
    this.setState({ words: state });
    saveToLocalStorage("words", JSON.stringify(state.toJS()));
  };

  setSentenceDialog = value => {
    this.setState({ view: this.state.view.set("sentenceModal", value) });
  };

  handleSentenceChange = event => {
    this.setState({
      sentence: event.target.value,
      words: splitSentence(event.target.value)
    });
    saveToLocalStorage("sentence", event.target.value);
    saveToLocalStorage(
      "words",
      JSON.stringify(splitSentence(event.target.value).toJS())
    );
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/revise" exact render={() => "Revise"} />
          <Route
            path="/read"
            exact
            render={() => <Read words={this.state.words} />}
          />
          <Route path="/">
            <Wrapper className="App">
              {this.state.view.get("sentenceModal") && (
                <Modal closeBtnClicked={() => this.setSentenceDialog(false)}>
                  <Textarea
                    onChange={this.handleSentenceChange}
                    value={this.state.sentence}
                    autofocus
                  />
                </Modal>
              )}
              <Header openSentenceDialog={() => this.setSentenceDialog(true)} />
              <Sentence
                handlePropertyChange={this.handlePropertyChange}
                words={this.state.words.valueSeq().toJS()}
              >
                {this.state.sentence}
              </Sentence>
              <Button
                onClick={() =>
                  this.setState({
                    view: this.state.view.update("hideCzech", value => !value)
                  })
                }
              >
                Toggle Czech
              </Button>
              <Button
                onClick={() =>
                  this.setState({
                    view: this.state.view.update(
                      "hideDefinitions",
                      value => !value
                    )
                  })
                }
              >
                Toggle definitions
              </Button>
              <Table
                words={this.state.words}
                handlePropertyChange={this.handlePropertyChange}
                hideCzech={this.state.view.get("hideCzech")}
                hideDefinitions={this.state.view.get("hideDefinitions")}
              />
            </Wrapper>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

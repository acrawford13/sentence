import React, { Fragment } from "react";
import styled from "styled-components";
import Select from "../../../atoms/Select/Select";
import Item from "../components/Item";
import Cases from "./Cases";

const Verb = ({ word, onChange }) => (
  <Fragment>
    <Item>
      Tense:{" "}
      <Select
        value={word.tense}
        onChange={event => onChange("tense", event)}
        options={["present", "past", "future", "imperative"]}
      />
    </Item>
    <Item>
      Aspect:{" "}
      <Select
        value={word.aspect}
        onChange={event => onChange("aspect", event)}
        options={["imperfective", "perfective"]}
      />
    </Item>
    <Item>
      Conjugation:{" "}
      <Select
        value={word.conjugation}
        onChange={event => onChange("conjugation", event)}
        options={["I", "You (sg.)", "He/she/it", "We", "You (pl.)", "They"]}
      />
    </Item>
  </Fragment>
);

export default Verb;

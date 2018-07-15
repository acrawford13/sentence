import React, { Fragment } from "react";
import styled from "styled-components";
import Select from "../../../atoms/Select/Select";
import List from "../components/List";
import Item from "../components/Item";
import Input from "../../../atoms/Input/Input";
import Cases from "./Cases";

const Wrapper = styled.div``;

const Noun = ({ word, onChange }) => (
  <Fragment>
    <Item>
      Gender:{" "}
      <Select
        value={word.gender}
        onChange={event => onChange("gender", event)}
        options={["masculine", "feminine", "neuter"]}
      />
    </Item>
    <Item>
      Case:{" "}
      <Select
        value={word.case}
        onChange={event => onChange("case", event)}
        options={[
          "nominative",
          "accusative",
          "genitive",
          "dative",
          "locative",
          "instrumental",
          "vocative"
        ]}
      />
    </Item>
    <Cases word={word} onChange={onChange} />
  </Fragment>
);

export default Noun;

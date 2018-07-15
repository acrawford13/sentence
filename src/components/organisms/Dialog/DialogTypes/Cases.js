import React from "react";
import styled from "styled-components";
import Item from "../components/Item";
import { CASES } from "../../../../constants";
import Input from "../../../atoms/Input/Input";

const Cases = ({ word, onChange }) =>
  CASES.filter(item => item !== word.case).map(item => (
    <Item>
      {item}:{" "}
      <Input
        type="text"
        value={word.cases[item]}
        onChange={event => onChange(`cases.${item}`, event)}
      />
    </Item>
  ));

export default Cases;

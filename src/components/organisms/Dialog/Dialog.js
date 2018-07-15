import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Card from "../../atoms/Card/Card";
import Select from "../../atoms/Select/Select";
import Input from "../../atoms/Input/Input";

const Wrapper = styled.div`
  border-top: 1px solid #ccc;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
`;

const WordType = styled.span`
  color: ${props => props.theme.wordTypes[props.type]};
`;

// const getDialogOptions = type => {
//   switch (type) {
//     case "verb":
//     case "noun":
//     case "adjective":
//     case "adverb":
//     default:
//       return (
//         <Select
//           value={type}
//           options={["verb", "noun", "adjective", "adverb"]}
//           onChange={}
//         />
//       );
//   }
// };

const Dialog = ({
  word,
  handlePropertyChange,
  toggleTypeChange,
  typeChangeEnabled
}) => (
  <Wrapper>
    Word type:{" "}
    <WordType onClick={toggleTypeChange} type={word.type || "none"}>
      {word.type || "select"}
    </WordType>
    <div>
      {typeChangeEnabled && (
        <Select
          value={word.type}
          options={["verb", "noun", "adjective", "adverb", "preposition"]}
          onChange={event => handlePropertyChange("type", event)}
          onClick={e => {
            e.stopPropagation();
          }}
        />
      )}
    </div>
    <div>
      <Input
        value={word.definition}
        onChange={event => handlePropertyChange("definition", event)}
        onClick={e => {
          e.stopPropagation();
        }}
      />
    </div>
  </Wrapper>
);

export default Dialog;

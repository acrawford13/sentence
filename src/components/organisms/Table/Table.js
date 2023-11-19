import React, { Fragment } from "react";
import styled from "styled-components";
import Input from "components/atoms/Input/Input";
import Select from "react-select";

import { TYPES } from "constants.js";

const StyledInput = styled(Input)`
  margin-right: 1rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  align-items: center;
  align-content: center;
`;

const Word = styled.div`
  width: ${props => props.hide && 0};
  padding: ${props => (props.hide ? "1rem 0" : "1rem")};
`;

const Row = styled.div`
  padding: 1rem;
`;

const Table = ({ words, handlePropertyChange, hideCzech, hideDefinitions }) => {
  const typeOptions = TYPES.map(type => ({ value: type, label: type }));
  return (
    <Wrapper>
      {words.valueSeq().map(word => {
        return (
          <Fragment>
            <Word hide={hideCzech}>{word.get("value")}</Word>
            <StyledInput
              {...(hideDefinitions
                ? {
                    defaultValue: "",
                    value: ""
                  }
                : {
                    value: word.get("definition"),
                    onChange: event =>
                      handlePropertyChange("definition", word.get("id"), event)
                  })}
            />

            <Select
              value={typeOptions.find(type => type.value === word.get("type"))}
              options={typeOptions}
              onChange={option =>
                handlePropertyChange("type", word.get("id"), {
                  target: { value: option.value },
                  preventDefault: () => {}
                })
              }
            />
          </Fragment>
        );
      })}
    </Wrapper>
  );
};

export default Table;

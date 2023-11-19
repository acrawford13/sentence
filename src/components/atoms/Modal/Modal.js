import React from "react";
import styled from "styled-components";

import Button from "components/atoms/Button/Button";

const Wrapper = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
`;

const ModalWrapper = styled.div`
  background-color: white;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  width: 60vw;
  height: 60vh;
  position: relative;
  border-radius: 2rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled(Button)`
  margin-top: 1rem;
`;

const Modal = ({ children, closeBtnClicked, ...props }) => (
  <Wrapper>
    <ModalWrapper>
      {children}
      <CloseButton onClick={closeBtnClicked}>close</CloseButton>
    </ModalWrapper>
  </Wrapper>
);

export default Modal;

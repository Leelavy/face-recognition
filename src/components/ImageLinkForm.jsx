import React, { useState } from "react";
import styled from "styled-components";
import { ContainerCenter, ContainerColumn } from "../style/general";

const ImageLinkForm = ({ onRecognizeClick }) => {
  const [input, setInput] = useState("");

  const onClick = () => {
    onRecognizeClick(input);
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <ContainerColumn>
      <Description>
        {"we're all about detecting faces in your pictures. Give it a try!"}
      </Description>
      <ContainerCenter>
        <input type="text" onChange={onInputChange} />
        <button onClick={onClick}>Recognize</button>
      </ContainerCenter>
    </ContainerColumn>
  );
};

const Description = styled.p``;

export default ImageLinkForm;

import React from "react";
import { ContainerColumn } from "../style/general";
import styled from "styled-components";

const Description = () => {
  return (
    <DescriptionDiv>
      <p>
        {"We're all about detecting faces in your pictures. Give it a try!"}
      </p>
    </DescriptionDiv>
  );
};

const DescriptionDiv = styled(ContainerColumn)`
  align-items: flex-start;
  width: 70%;
  p {
    font-weight: bold;
    font-size: 20px;
  }
`;

export default Description;

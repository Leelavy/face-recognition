import React from "react";
import { ContainerColumn } from "../style/general";
import styled from "styled-components";

const FaceRecognition = ({ imageUrl, imageRef }) => {
  return (
    <ContainerColumn>
      {imageUrl && (
        <>
          <h1>Face Recognition:</h1>
          <img src={imageUrl} alt="face-recognition" ref={imageRef} />
          <FaceBox></FaceBox>
        </>
      )}
    </ContainerColumn>
  );
};

const FaceBox = styled.div`
  position: absolute;
  box-shadow: 0 0 0 3px #149df2 inset;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export default FaceRecognition;

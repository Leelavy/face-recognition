import React from "react";
import { ContainerColumn } from "../style/general";
import styled from "styled-components";

const FaceRecognition = ({ imageUrl, imageRef, faceBox, isLoading }) => {
  const isValidUrl = (string) => {
    let url;
    try {
      url = new URL(string);
    } catch (err) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  };

  const getValidationError = () =>
    imageUrl.length ? "This is not a valid URL. Please try again" : "";

  console.log(isLoading);
  return (
    <ContainerColumn>
      {isValidUrl(imageUrl) ? (
        <ImageDiv>
          <img src={imageUrl} alt="face-recognition" ref={imageRef} />
          {Object.keys(faceBox).length > 0 && (
            <FaceBox
              top={`${faceBox.topRow}px`}
              right={`${faceBox.rightCol}px`}
              bottom={`${faceBox.bottomRow}px`}
              left={`${faceBox.leftCol}px`}
            />
          )}
        </ImageDiv>
      ) : (
        getValidationError()
      )}
    </ContainerColumn>
  );
};

const FaceBox = styled.div`
  position: absolute;
  top: ${(props) => props.top ?? "unset"};
  right: ${(props) => props.right ?? "unset"};
  bottom: ${(props) => props.bottom ?? "unset"};
  left: ${(props) => props.left ?? "unset"};
  box-shadow: 0 0 0 3px #149df2 inset;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const ImageDiv = styled.div`
  position: relative;
  margin: 2rem;
`;

export default FaceRecognition;

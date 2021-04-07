import React, { useState, useEffect, useRef } from "react";
import Logo from "../components/Logo";
import ImageLinkForm from "../components/ImageLinkForm";
import Rank from "../components/Description";
import Background from "../components/Background";
import FaceRecognition from "../components/FaceRecognition";
import { faceRecognition } from "../api/faceRecognitionApi";
import { ContainerCenter } from "../style/general";

const Home = ({ setIsLoading, isLoading }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [faceBox, setFaceBox] = useState({});
  const imageRef = useRef();

  const calculateFaceLocation = (data) => {
    const faceBoundaries =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const imageWidth = parseInt(imageRef.current.width);
    const imageHeight = parseInt(imageRef.current.height);
    setFaceBox({
      leftCol: Math.round(faceBoundaries.left_col * imageWidth),
      topRow: Math.round(faceBoundaries.top_row * imageHeight),
      rightCol: Math.round(imageWidth - faceBoundaries.right_col * imageWidth),
      bottomRow: Math.round(
        imageHeight - faceBoundaries.bottom_row * imageHeight
      ),
    });
  };

  const onRecognizeClick = (input) => {
    setFaceBox({});
    setImageUrl(input);
  };

  useEffect(() => {
    sendFaceRecognitionRequest();
  }, [imageUrl]);

  const sendFaceRecognitionRequest = async () => {
    setIsLoading(true);
    try {
      const response = await faceRecognition(imageUrl);
      calculateFaceLocation(response);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Background />
      <ContainerCenter>
        <Logo />
        <Rank />
      </ContainerCenter>
      <ImageLinkForm onRecognizeClick={onRecognizeClick} />
      <FaceRecognition
        faceBox={faceBox}
        imageUrl={imageUrl}
        imageRef={imageRef}
        isLoading={isLoading}
      />
    </>
  );
};

export default Home;

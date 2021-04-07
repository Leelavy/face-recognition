import React, { useState, useEffect, useRef } from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import ImageLinkForm from "../components/ImageLinkForm";
import Rank from "../components/Rank";
import Background from "../components/Background";
import FaceRecognition from "../components/FaceRecognition";
import { faceRecognition } from "../api/faceRecognitionApi";

const Home = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [faceBox, setFaceBox] = useState({});
  const imageRef = useRef();

  const calculateFaceLocation = (data) => {
    const faceBoundaries =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const imageWidth = parseInt(imageRef.current.width);
    const imageHeight = parseInt(imageRef.current.height);
    setFaceBox({
      leftCol: faceBoundaries.left_col * imageWidth,
      topRow: faceBoundaries.top_row * imageHeight,
      rightCol: imageWidth - faceBoundaries.right_col * imageWidth,
      bottomRow: imageHeight - faceBoundaries.bottom_row * imageHeight,
    });
  };

  useEffect(() => {
    console.log(faceBox);
  }, [faceBox]);

  const onRecognizeClick = (input) => {
    setImageUrl(input);
  };

  useEffect(() => {
    sendFaceRecognitionRequest();
  }, [imageUrl]);

  const sendFaceRecognitionRequest = async () => {
    try {
      const response = await faceRecognition(imageUrl);
      calculateFaceLocation(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Background />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onRecognizeClick={onRecognizeClick} />
      <FaceRecognition
        faceBox={faceBox}
        imageUrl={imageUrl}
        imageRef={imageRef}
      />
    </>
  );
};

export default Home;

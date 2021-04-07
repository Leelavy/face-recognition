import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "f4a92e60e6884edd90a5d65770f36ded",
});

export const faceRecognition = (imageUrl) =>
  app.models.predict(Clarifai.FACE_DETECT_MODEL, imageUrl);

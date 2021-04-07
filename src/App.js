import React, { useState } from "react";
import GlobalStyles from "./style/GlobalStyles";
import Home from "./pages/Home";
import Loader from "./components/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <GlobalStyles />
      <Loader isLoading={isLoading} />
      <Home setIsLoading={setIsLoading} isLoading={isLoading} />
    </>
  );
};

export default App;

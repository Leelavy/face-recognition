import React from "react";
import GlobalStyles from "./style/GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

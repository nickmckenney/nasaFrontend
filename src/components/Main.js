import React from "react";
import { Switch, Route } from "react-router-dom";
import Nasa from "./NasaPictures";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Nasa} />
  </Switch>
);

export default Main;

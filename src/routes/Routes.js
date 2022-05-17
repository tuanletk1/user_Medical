import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";

// import Step1 from "../pages/Step1";
// import Step2 from "../pages/Step2";
// import Step3 from "../pages/Step3";
import Inject from "../pages/Inject";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/inject" component={Inject} />
    </Switch>
  );
};

export default Routes;

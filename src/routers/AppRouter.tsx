import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeScreen, AboutScreen } from "../screens";
import { TRouter } from "../types";
import { _routes } from "../constants";
import { withHeader } from "../hoc";

const AppRouter: TRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={_routes.HOME} component={withHeader(HomeScreen)} />
        <Route path={_routes.ABOUT} component={withHeader(AboutScreen)} />
      </Switch>
    </Router>
  );
};

export default AppRouter;

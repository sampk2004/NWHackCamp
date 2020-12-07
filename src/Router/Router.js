import { Switch, Route, Redirect } from "react-router-dom";

import MapPage from "../pages/MapPage/MapPage";
import StepperPage from "../pages/StepperPage/StepperPage";
import List from "../pages/List/";

export function Router({ config }) {
  const nonprofits = config.nonprofits;

  return (
    <Switch>
      <Redirect exact from="/" to="/main-page" />
      <Route
        exact
        path="/main-page"
        component={() => StepperPage({ nonprofits })}
      />
      <Route path="/map-view" component={MapPage} />
      <Route path="/list" component={() => List({ nonprofits })} />
    </Switch>
  );
}

export default Router;

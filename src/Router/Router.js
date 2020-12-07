import { Switch, Route, Redirect } from "react-router-dom";

import MapPage from "../pages/MapPage/MapPage";
import StepperPage from "../pages/StepperPage/StepperPage";

export function Router() {
  return (
    <Switch>
      <Redirect exact from="/" to="/main-page" />
      <Route exact path="/main-page" component={StepperPage} />
      <Route path="/map-view" component={MapPage} />
    </Switch>
  );
}

export default Router;

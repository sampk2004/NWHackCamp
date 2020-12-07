import { Switch, Route, Redirect } from "react-router-dom";

import Intro from "../pages/Intro/";
import MapPage from "../pages/MapPage/MapPage";
import StepperPage from "../pages/StepperPage/StepperPage";
import List from "../pages/List/";
import WelcomePage from "../pages/WelcomePage/WelcomePage";


export function Router({ config }) {
  const nonprofits = config.nonprofits;

  return (
    <Switch>
      <Redirect exact from="/" to="/intro" />
      <Route path="/intro" component={Intro} />
      <Route
        exact
        path="/main-page"
        component={() => StepperPage({ nonprofits })}
      />
      <Route path="/map-view" component={MapPage} />
      <Route path="/list" component={() => List({ nonprofits })} />
      <Route path="/welcome-page" component={WelcomePage} />
    </Switch>
  );
}

export default Router;

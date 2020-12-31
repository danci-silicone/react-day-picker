import { Switch, Route, Redirect } from "react-router-dom";
import { Calendar, DayPicker } from "../components";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/calendar" />} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/daypicker" component={DayPicker} />
    </Switch>
  );
};

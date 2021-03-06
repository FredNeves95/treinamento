import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import AdminPage from "../pages/AdminPage";
import ApplicationForm from "../pages/ApplicationForm";
import CreateTripPage from "../pages/CreateTripPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage";
import TripsPage from "../pages/TripsPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/trips"}>
          <TripsPage />
        </Route>

        <Route exact path={"/trips/application/:id"}>
          <ApplicationForm />
        </Route>

        <Route exact path={"/login"}>
          <LoginPage />
        </Route>

        <Route exact path={"/admin/trips"}>
          <AdminPage />
        </Route>

        <Route exact path={"/admin/trips/create"}>
          <CreateTripPage />
        </Route>

        <Route exact path={"/admin/trips/:id"}>
          <TripDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

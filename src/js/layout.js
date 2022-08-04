import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./views/home";
import { Characters } from "./views/characters";
import { Planets } from "./views/planets";
import { Vehicles } from "./views/vehicles";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/


  return (
    <div>
      <BrowserRouter>

          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/characters/:id">
              <Characters />
            </Route>
            <Route exact path="/planets/:id">
              <Planets />
            </Route>
            <Route exact path="/vehicles/:id">
              <Vehicles />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />

      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavbarHeader from ".components/auth/NavbarHeader";
import Home from ".components/pages/Home";
import { Switch, Route } from "react-router-dom";
import Login from ".components/auth/Login";
import Signup from ".components/auth/Signup";
import Footer from ".components/auth/Footer";

function App() {
  return (
    <div className="App">
      <NavbarHeader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/login"
          render={() => <Login getUser={this.getTheUser} />}
        />
        <Route
          exact
          path="/signup"
          render={() => <Signup getUser={this.getTheUser} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

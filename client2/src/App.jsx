import React from "react";
import "./App.css";
import NavbarHeader from "./components/NavbarHeader";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Footer from "./components/Footer";

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

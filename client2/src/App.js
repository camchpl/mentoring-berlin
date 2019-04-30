import React from "react";
import logo from "./logo.svg";
import "./App.css";

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

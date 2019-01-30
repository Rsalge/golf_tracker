import { Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Signup from "./components/Signup";

function Main() {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        {/* <Route path='/schedule' component={Schedule}/> */}
      </Switch>
    </main>
  );
}

export default Main;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./Main.js";

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackEndApi()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log("An error occured: ", err));
  }

  callBackEndApi = async () => {
    const response = await fetch("/express_backend");
    const body = response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
  render() {
    return (
      <div className="App">
        <Main />
        <div>Change</div>
      </div>
    );
  }
}

export default App;

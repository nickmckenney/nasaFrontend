import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Route, Link } from "react-router-dom";
class App extends Component {
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    axios.get("https://nasa-picutres.herokuapp.com/").then(res => {
      this.setState({ nasa: res.data });
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
            className="App-logo"
          />
        </header>
      </div>
    );
  }
}

export default App;

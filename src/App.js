import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Route, Link } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nasa: [],
      picture: "",
      explanation: "",
      title: "",
      date: Date
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=GJ6Jvh1c8erMgH5edhmmQ538fNHcSbldUeAc68AK"
      )
      .then(res => {
        this.setState({ nasa: res.data });
        // this.setState({ picture: this.state.nasa[0].url });
        this.setState({ picture: res.data.url });
        this.setState({ explanation: res.data.explanation });
        this.setState({ title: res.data.title });
        this.setState({ date: res.data.date });

        console.log(res.data);
      });
  };

  render() {
    return (
      <div className="App-header">
        <div className="title">{this.state.title}</div>
        <img
          src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
          className="App-logo"
        />
        <div className="date">{this.state.date}</div>
        <div className="iframe">
          <img className="picture" src={this.state.picture} />
        </div>
        <div className="explanation">{this.state.explanation}</div>
      </div>
    );
  }
}

export default App;

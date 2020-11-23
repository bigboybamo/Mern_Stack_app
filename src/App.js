import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreatePlayer from "./components/create-player";
import EditPlayer from "./components/edit-player";
import PlayerList from "./components/player-list";

function App() {
  return (<Router>
    <div className="App">
    <Container>
  <Row>
    <Col className="logo"><b>PerfumeHouse</b></Col>
    <Col className="right-content">See All Perfumes || Submit a perfume</Col>
  </Row>
  </Container>
  <div className="body-div">
  <Container>
  <Row>
    <Col sm={5} className="welcome-text">Share Your Guilty Pleasure. Indulge. Connect</Col>
    <Col sm={7}> <img src="/images/perfumeee.jpg" alt="perf"></img> </Col>
  </Row>
  </Container>
  </div>
      
    </div>
  </Router>);
}

export default App;
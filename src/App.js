import React from "react";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Show from "./components/Show";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import home from "./components/home";
import createPerfume from "./components/createPerfume";
import perfumeList from "./components/perfumeList";

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <Row>
            <Col className="logo">
              <b>
                <Link to="/" className="link">
                  PerfumeHouse
                </Link>
              </b>
            </Col>
            <Col className="right-content">
              <div className="grid-child purple">
                <Link to="/perfumeList" className="link">
                  See All Perfumes
                </Link>
              </div>
              <div className="link">
                <Link to="/createPerfume">Submit a perfume</Link>
              </div>
            </Col>
          </Row>
        </Container>
        <home />

        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/perfumeList" component={perfumeList} />
          <Route path="/createPerfume" component={createPerfume} />
          <Route path="/show/:id" component={Show} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

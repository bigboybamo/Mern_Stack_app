import React, {Component} from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class navbar extends Component{
render(){
return(
  <Container>
  <Row>
    <Col className="logo"><b>PerfumeHouse</b></Col>
    <Col className="right-content"><div className="grid-child purple"><Link to="/perfumeList">See All Perfumes</Link></div><div className="grid-child green">Submit a perfume</div></Col>
  </Row>
  </Container>
)
}
}
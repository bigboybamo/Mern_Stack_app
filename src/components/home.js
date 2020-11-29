import React, {Component} from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


export default class home extends Component{
render(){
return(
  <div className="body-div">
  <Container>
  <Row>
    <Col sm={5} className="welcome-text">Tell Us what You Love. Indulge. Connect</Col>
    <Col sm={7}> <img src="/images/perfumeee.jpg" alt="perf"></img> </Col>
  </Row>
  </Container>
  </div>
)
}
}
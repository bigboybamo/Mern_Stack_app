import React, {Component} from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Col"
import axios from 'axios'
import { Card } from "react-bootstrap";
// import Button from "./Button";

export default class perfumeList extends Component{
    constructor(props){
        super(props)
        this.state = {
            perfumes: []
        }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:4000/perfume')
        const json = await response.json();
        this.setState({perfumes : json})
        
    }

       

render(){
return(
    <div className="body-div">
        <div className="row">
       {this.state.perfumes.map((el) => (
          <div className="cardDiv" key={el._id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Text>
                  <strong>{el.perfumeName}</strong>
                </Card.Text>
                <Card.Text>
                  <i>@{el.brand}</i>
                </Card.Text>
                <Card.Text>
                <u>{el.yourName}</u>
                </Card.Text>
                {/* <Button id={el.id} /> */}
              </Card.Body>
            </Card>
          </div>
        ))}
        </div>
    </div>
)
}
}
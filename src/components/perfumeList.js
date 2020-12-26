import React, {Component} from "react"
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Card } from "react-bootstrap";


export default class perfumeList extends Component{
    constructor(props){
        super(props)
        this.state = {
            perfumes: []
        }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:5000/perfumes/')
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
                  <i>{el.brand}</i>
                </Card.Text>
                <Card.Text>
                 <u>{el.yourName}</u>
                </Card.Text>
                <Card.Text>
              <Link to ={`/show/${el._id}`}>More Details</Link> 
                </Card.Text>
                </Card.Body>
            </Card>
          </div>
        ))}
        </div>
    </div>
)
}
}
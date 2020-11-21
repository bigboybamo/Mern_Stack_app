import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default class CreateStudent extends Component {
    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangePlayerName = this.onChangePlayerName.bind(this);
        this.onChangePlayerClub = this.onChangePlayerClub.bind(this);
        this.onChangePlayerShirtNo = this.onChangePlayerShirtNo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          name: '',
          club: '',
          shirtno: ''
        }
      }
    
      onChangePlayerName(e) {
        this.setState({name: e.target.value})
      }
    
      onChangePlayerClub(e) {
        this.setState({club: e.target.value})
      }
    
      onChangePlayerShirtNo(e) {
        this.setState({shirtno: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()
    
        console.log(`Player successfully created!`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Club: ${this.state.club}`);
        console.log(`Shirt no: ${this.state.shirtno}`);
    
        this.setState({name: '', club: '', shirtno: ''})
      }


  render() {
    return (<div class="form-wrapper">
      <Form>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Club</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Shirt No</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Player
        </Button>
      </Form>
    </div>);
  }
}
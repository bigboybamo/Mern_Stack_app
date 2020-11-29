import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class createPerfume extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeperfumeName = this.onChangeperfumeName.bind(this);
    this.onChangebrand = this.onChangebrand.bind(this);
    this.onChangenotes = this.onChangenotes.bind(this);
    this.onChangeyourName = this.onChangeyourName.bind(this);
    this.onChangeluvFragrance = this.onChangeluvFragrance.bind(this);
    this.onChangeprice = this.onChangeprice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      perfumeName: "",
      brand: "",
      notes: "",
      yourName: "",
      luvFragrance: "",
      price: "",
    };
  }

  onChangeperfumeName(e) {
    this.setState({ perfumeName: e.target.value });
  }

  onChangebrand(e) {
    this.setState({ brand: e.target.value });
  }

  onChangenotes(e) {
    this.setState({ notes: e.target.value });
  }

  onChangeyourName(e) {
    this.setState({ yourName: e.target.value });
  }

  onChangeluvFragrance(e) {
    this.setState({ luvFragrance: e.target.value });
  }

  onChangeprice(e) {
    this.setState({ price: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const perfumeObject = {
      perfumeName: this.state.perfumeName,
      brand: this.state.brand,
      notes: this.state.notes,
      yourName: this.state.yourName,
      luvFragrance: this.state.luvFragrance,
      price: this.state.price,
    };

    axios
      .post("http://localhost:4000/perfume", perfumeObject)
      .then((res) => console.log(res.data));

    this.setState({
      perfumeName: "",
      brand: "",
      notes: "",
      yourName: "",
      luvFragrance: "",
      price: "",
    });

    console.log(`Perfume successfully created!`);
    console.log(`perfumeName: ${this.state.perfumeName}`);
    console.log(`brand: ${this.state.brand}`);
    console.log(`Notes: ${this.state.notes}`);
    console.log(`yourname: ${this.state.yourName}`);
    console.log(`luvFragrance: ${this.state.luvFragrance}`);
    console.log(`price: ${this.state.price}`);
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="perfumeName">
            <Form.Label>Your Favorite Perfume:</Form.Label>
            <Form.Control
              type="text"
              value={this.state.perfumeName}
              onChange={this.onChangeperfumeName}
              required
            />
          </Form.Group>

          <Form.Group controlId="brand">
            <Form.Label>Brand of the fragrance:</Form.Label>
            <Form.Control
              type="text"
              value={this.state.brand}
              onChange={this.onChangebrand}
              required
            />
          </Form.Group>

          <Form.Group controlId="notes">
            <Form.Label>
              What do you think are the main notes of this perfume(3 max):
            </Form.Label>
            <Form.Control
              type="text"
              value={this.state.notes}
              onChange={this.onChangenotes}
              required
            />
          </Form.Group>

          <Form.Group controlId="yourName">
            <Form.Label>What's your name:</Form.Label>
            <Form.Control
              type="text"
              value={this.state.yourName}
              onChange={this.onChangeyourName}
              required
            />
          </Form.Group>

          <Form.Group controlId="luvFragrance">
            <Form.Label>Why do you love this perfume:</Form.Label>
            <Form.Control
              type="text"
              value={this.state.luvFragrance}
              onChange={this.onChangeluvFragrance}
              required
            />
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>How much did a bottle Cost: </Form.Label>
            <Form.Control
              type="Number"
              value={this.state.price}
              onChange={this.onChangeprice}
              required
            />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Submit perfume
          </Button>
        </Form>
      </div>
    );
  }
}

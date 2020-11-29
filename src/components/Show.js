import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      perfume: {}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/perfume/'+this.props.match.params.id)
      .then(res => {
        this.setState({ perfume: res.data });
        console.log(this.state.perfume);
      });
  }

  // delete(id){
  //   console.log(id);
  //   axios.delete('http://localhost:4000/perfume/'+id)
  //     .then((result) => {
  //       this.props.history.push("/")
  //     });
  // }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 class="panel-title">
             Perfume Name: {this.state.perfume.perfumeName}
            </h3>
          </div>
          <div class="panel-body">
           
            <dl>
              <dt>Brand:</dt>
              <dd>{this.state.perfume.brand}</dd>
              <dt>Notes:</dt>
              <dd>{this.state.perfume.notes}</dd>
              <dt>Submitted by:</dt>
              <dd>{this.state.perfume.yourName}</dd>
              <dt>Why {this.state.perfume.yourName} loves this perfume:</dt>
              <dd><i>"{this.state.perfume.luvFragrance}"</i></dd>
              <dt>Price($):</dt>
              <dd>${this.state.perfume.price}</dd>
            </dl>
              </div>
        </div>
      </div>
    );
  }
}

export default Show;
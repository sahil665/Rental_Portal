import React, { Component } from "react";
//import "./App.css";
import List from "./List";

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      items: []
    };
  }

  /*componentDidMount() {
    getList().then(data => {
      //console.log(data);
      this.setState({
        items: [...this.state.items, ...data]
      });
    });
  }*/

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h1 className="text-center">Add Listing </h1>
            <List />
          </div>
        </div>
      </div>
    );
  }
}

export default Listing;
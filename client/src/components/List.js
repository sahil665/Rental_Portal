import React, { Component } from "react";
import { getentry, setentry, deleteentry, updateentry } from "./ListFunctions";

class List extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      editDisabled: false,
      items: []
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }

  onChange = event => {
    this.setState({ term: event.target.value, editDisabled: "disabled" });
    console.log(this.state.editDisabled);
  };

  getAll = () => {
    getentry().then(data => {
      this.setState(
        {
          term: "",
          items: [...data]
        },
        () => {
          console.log(this.state.items);
        }
      );
    });
  };

  onSubmit = e => {
    e.preventDefault();
    setentry(this.state.name).then(() => {
      this.getAll();
    });
  };

   render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 mt-8 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal"></h1>
              <div className="form-group">
                <label htmlFor="name">Listing Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter your listing name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Rental Price</label>
                <input
                  type="integer"
                  className="form-control"
                  name="price"
                  placeholder="Enter your listing rental price"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Rental Property Photos</label>
                <input
                  type="attachment"
                  className="form-control"
                  name="photos"
                  placeholder="Please attach your photographs"
                  value={this.state.photo}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Rental Property Description</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  placeholder="Please enter property description"
                  value={this.state.description}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Expiry Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="Expiry Date"
                  placeholder="Please enter expiry date"
                  value={this.state.expiry_date}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Add Listing
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
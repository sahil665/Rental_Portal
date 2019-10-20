import React, { Component } from "react";
import { getentry, setentry, deleteentry, updateentry } from "./ListFunctions";

class ViewListing extends Component {
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

  onUpdate = e => {
    e.preventDefault();
    updateentry(this.state.id,this.state.name,this.state.price,this.state.photo,this.state.description,this.state.expiry_date).then(() => {
      this.getAll();
    });
  };

  onEdit = (name, id, e) => {
    e.preventDefault();
    this.setState({
      id: id,
      name: name
    });
  };

  onDelete = (val, e) => {
    e.preventDefault();
    deleteentry(val);

    var data = [...this.state.items];
    data.filter(function(item, index) {
      if (item[1] === val) {
        data.splice(index, 1);
      }
	  return true;
    });
    this.setState({ items: [...data] });
  };

  render() {
    return (
     
        <table className="table">
          <tbody>
            {this.state.items.map((item, index) => (
              <tr key={index}>
                <td className="text-left">{item[0]}</td>
                <td className="text-right">
                  <button
                    href=""
                    className="btn btn-info mr-1"
                    disabled={this.state.editDisabled}
                    onClick={this.onEdit.bind(this, item[0], item[1])}
                  >
                    Edit
                  </button>
                  <button
                    href=""
                    className="btn btn-danger"
                    onClick={this.onDelete.bind(this, item[1])}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    
    );
  }
}

export default ViewListing;
import React, { Component } from "react";

class AddTransactionForm extends Component {
  
  state = {
    date: "",
    description: "",
    category: "",
    amount: 0
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNewTransaction(this.state)
  }

  handleChange = (e) => {
    let {value, name} = e.target
    this.setState({
      [name]: value
    })
  }
  
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="inline fields">
            <input onChange={this.handleChange} type="date" name="date" />
            <input onChange={this.handleChange} type="text" name="description" placeholder="Description" />
            <input onChange={this.handleChange} type="text" name="category" placeholder="Category" />
            <input
              onChange={this.handleChange}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;

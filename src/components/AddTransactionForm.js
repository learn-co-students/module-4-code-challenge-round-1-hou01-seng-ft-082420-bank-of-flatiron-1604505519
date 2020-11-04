import React, { Component } from "react";

class AddTransactionForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTransaction(e)
  }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={(e) => {this.handleSubmit(e)}} className="ui form">
          <div className="inline fields">
            <input type="date" name="date" />
            <input type="text" name="description" placeholder="Description" />
            <input type="text" name="category" placeholder="Category" />
            <input
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

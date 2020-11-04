import React, { Component } from "react";

class AddTransactionForm extends Component {


    state = {
      date: "",
      description: "",
      category: "",
      amount: 0
    }

    handleChange = (e) => {
      e.preventDefault()
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    handleSubmit = (e) => {

      this.props.addTransaction(this.state)
    }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(e) =>this.handleSubmit(e)}>
          <div className="inline fields">
            <input type="date" name="date" onChange={this.handleChange}/>
            <input type="text" name="description" placeholder="Description"onChange={this.handleChange} />
            <input type="text" name="category" placeholder="Category" onChange={this.handleChange}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={this.handleChange}
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

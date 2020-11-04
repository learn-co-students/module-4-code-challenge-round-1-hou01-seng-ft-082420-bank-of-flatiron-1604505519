import React, { Component } from "react";

class AddTransactionForm extends Component {
  constructor(){
    super()
    this.state = {
      date: '',
      description: '',
      category: '',
      amount: 0
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date" name="date" onChange={this.handleChange}/>
            <input type="text" name="description" placeholder="Description" onChange={this.handleChange}/>
            <input type="text" name="category" placeholder="Category" onChange={this.handleChange}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={this.handleChange}
            />
          </div>
          <button className="ui button" type="submit" onClick={(e) => this.props.addTransaction(e, this.state)}>
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;

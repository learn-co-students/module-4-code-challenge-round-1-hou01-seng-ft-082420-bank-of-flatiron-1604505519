import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    date: "",
    description: "",
    category: "",
    amount: 0
  }
  stateChange(key, newValue) {
    this.setState({
      [key]: newValue
    })
  }
  newTransaction = (e) => {
    e.preventDefault()
    this.props.addTrans(this.state)
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form"onSubmit={(e)=>this.newTransaction(e)}>
          
          <div className="inline fields">
            <input type="date" name="date" />
            <input type="text" name="description" placeholder="Description" />
            <input type="text" name="category" placeholder="Category" 
            onChange={(e)=>this.stateChange(e.target.key, e.target.value)}/>
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

import React, { Component } from "react";

class AddTransactionForm extends Component {
  constructor(){
    super()
    this.state = {
      date: '',
      amount: '',
      description: '',
      category: ''
    }
  }



  handleChange = (e) => {
    let {value,name} = e.target
    this.setState({
      [name]: value
    })
  }


  render() {
    return (
      <div className="ui segment">
        <form onChange = {this.handleChange} onSubmit = {() => this.props.handleSubmit(this.state)} className="ui form">
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

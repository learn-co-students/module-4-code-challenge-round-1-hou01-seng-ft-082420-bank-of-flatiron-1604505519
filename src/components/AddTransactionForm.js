import React, { Component } from "react";


class AddTransactionForm extends Component {

  state = {
    date: "",
    description: "",
    category: "",
    amount: ""
  }
  
  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({[name]: value})
    //console.log("I changed", this.state[name])
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let form = document.querySelector("#newForm")
    form.reset()
    this.props.newTransaction(this.state)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" id="newForm" onSubmit={(e)=>this.handleSubmit(e)}>
          <div className="inline fields">
            <input type="date" name="date" onChange={(e)=>this.handleChange(e)}/>
            <input type="text" name="description" placeholder="Description" onChange={(e)=>this.handleChange(e)}/>
            <input type="text" name="category" placeholder="Category" onChange={(e)=>this.handleChange(e)}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={(e)=>this.handleChange(e)}
            />
          </div>
          <button className="ui button" type="submit" >
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;

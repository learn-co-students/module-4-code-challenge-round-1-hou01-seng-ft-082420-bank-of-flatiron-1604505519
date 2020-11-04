import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

const transactionsUrl = `http://localhost:6001/transactions/`

class App extends Component {

  

  state = {
    transactions: [],
    searchOptions: ''
  }

  componentDidMount(){
    fetch(transactionsUrl)
      .then(res => res.json())
      .then(transactionData => {this.setState({transactions: transactionData})})
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.date.value, event.target.amount.value)
    fetch(transactionsUrl, {
      method:'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        date: event.target.date.value,
        description: event.target.description.value,
        category: event.target.category.value,
        amount: event.target.amount.value
      })
    })
    .then(res => res.json())
    .then(data => {
      let transactions = [...this.state.transactions, data]
      this.setState({transactions: transactions})
    })
  }

  handleSearch = event => {
    this.setState({searchOptions: event.target.value})

    var filtered = []

    for(let i = 0; i < this.state.transactions; i++){
      let filter = this.state.transactions.substring(0,this.state.searchOptions.length)
      if(filter === this.state.searchOptions){
        filtered.append(this.state.transactions[i])
      }
    }
  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer 
        transactions={this.state.transactions} 
        handleSubmit={this.handleSubmit} 
        handleSearch={this.handleSearch}
        searchValue={this.state.searchOptions}
        />
      </div>
    );
  }
}

export default App;

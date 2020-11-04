import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      searchValue: ''
    }
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions').then(response => response.json())
    .then(transactions => this.setState({transactions}))
  }

  addTransaction = (e) => {
    e.preventDefault()
    let date = e.target[0].value
    let description = e.target[1].value
    let category = e.target[2].value
    let amount = e.target[3].value

    let postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        date,
        description,
        category,
        amount
      })
    }

    fetch('http://localhost:6001/transactions', postOptions).then(response => response.json())
    .then(newTransaction => {
      return this.setState({
        transactions: [...this.state.transactions, newTransaction]
      })
    })
  }

  handleSearch = (searchValue) => {
    this.setState({searchValue})
  }

  displayTransactions = () => {
    let displayTransactions = this.state.transactions.filter(transaction => {
      return transaction.description.toLowerCase().includes(this.state.searchValue)
    })
    return displayTransactions
  }

  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch}/>
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={this.displayTransactions()}/>
      </div>
    );
  }
}

export default AccountContainer;

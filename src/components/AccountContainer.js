import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      ogTransactions: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:6001/transactions")
    .then(res => res.json())
    .then(data => {
      this.setState({
        transactions: data,
        ogTransactions: data
      })
    })
  }

  addTransaction = (e) => {
    let newTransaction = {
      date: e.target.date.value,
      description: e.target.description.value,
      category: e.target.category.value,
      amount: e.target.amount.value
    }
    fetch("http://localhost:6001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newTransaction)
    })
    .then(res => res.json())
    .then(newTrans => {
      this.setState({
        transactions: [...this.state.transactions, newTrans]
      })
    })
  }

  searchTrans = (e) => {
    let newList = this.state.ogTransactions.filter(trans => trans.description.includes(e.target.value))
    this.setState({
      transactions: newList
    })
  }



  render() {
    return (
      <div>
        <Search searchTrans={this.searchTrans} />
        <AddTransactionForm addTransaction={this.addTransaction} />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;

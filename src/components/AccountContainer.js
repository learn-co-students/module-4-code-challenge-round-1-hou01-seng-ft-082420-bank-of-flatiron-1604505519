import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Sort from "./Sort";

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
        ogTransactions: data,
        sort: ""
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

deleteTransaction = (id) => {
  fetch(`http://localhost:6001/transactions/${id}`, {
    method: "DELETE"
  })
  .then(this.removeDeleted(id))
}

removeDeleted = (id) => {
  let newTrans = this.state.transactions.filter(trans => trans.id != id)
  this.setState({
    transactions: newTrans
  })
}

sortTrans = (e) => {
  let sortTrans
  if (e.target.value === "category") {
    sortTrans = this.state.transactions.sort((a,b) => a.category < b.category ? -1 : 1)
  } else if (e.target.value === "description") {
    sortTrans = this.state.transactions.sort((a,b) => a.description < b.description ? -1 : 1)
  }
  this.setState({
    sort: e.target.value,
    transactions: sortTrans
  })
}

  render() {
    return (
      <div>
        <Search searchTrans={this.searchTrans} />
        <Sort 
        sortTrans={this.sortTrans}
        selected={this.state.sort}
         />
        <AddTransactionForm addTransaction={this.addTransaction} />
        <TransactionsList
         transactions={this.state.transactions}
         deleteTransaction={this.deleteTransaction}
          />
      </div>
    );
  }
}

export default AccountContainer;

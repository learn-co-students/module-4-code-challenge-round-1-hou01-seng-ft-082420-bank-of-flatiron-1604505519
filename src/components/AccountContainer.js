import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const baseURL = "http://localhost:6001/transactions/"

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTerm: ''
  }

  componentDidMount(){
    fetch(baseURL)
    .then(res => res.json())
    .then(transactions => {
      this.setState({
        transactions: transactions
      })
    })
  }

  addTransaction = (transaction) => {
    console.log(transaction)
    // debugger

    let transactionObj = {
      date: transaction.date,
      description: transaction.description,
      category: transaction.category,
      amount: parseFloat(transaction.amount)
    }

    let transactionOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(transactionObj)
    }

    fetch(baseURL, transactionOptions)
    .then(res => res.json())
    .then(newTransaction => {
      this.setState({
        transactions: [newTransaction, ...this.state.transactions]
      })
    })

  }

  searchTransactions = ({value}) => {
    this.setState({
      searchTerm: value
    })
  }

  render() {

    let filteredTransactions = this.state.transactions.filter( transaction => transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    return (
      <div>
        <Search 
        searchTransactions={this.searchTransactions}
        />
        <AddTransactionForm 
        addTransaction={this.addTransaction}
        />
        <TransactionsList 
        transactions={filteredTransactions}
        />
      </div>
    );
  }
}

export default AccountContainer;

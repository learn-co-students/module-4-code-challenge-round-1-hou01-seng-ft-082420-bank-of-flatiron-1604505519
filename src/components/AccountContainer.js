import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const transactionURL=('http://localhost:6001/transactions')

class AccountContainer extends Component {
  state = {
    allTransactions: [],
    filter: "All",
    searchTerm: ""
  }

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
    .then(r => r.json())
    .then(allTransactions => {
      this.setState({allTransactions})
    })
  }
  addTransaction = (transaction) => {
    let allTransactions = this.state.allTransactions
    this.setState({
      allTransactions: [...allTransactions, transaction]
    })
  }
  addNewTransaction = (transaction) => {
    let postOption ={
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(transaction),
    }
    fetch(transactionURL, postOption)
    .then(r => r.json())
    .then(newTransaction => this.addTransaction(newTransaction))
  }
  deleteTransaction = (transactionId) =>{
    let newTransactions = this.state.allTransactions.filter(transaction=> transaction.id !== transactionId)
    this.setState({allTransactions: newTransactions})
  }
  handleSearch = (search) => {
    this.setState ({ searchTerm: search })
  }
  }
  render() {
    return (
      <div>
        <Search newSearch={this.handleSearch} />
        <AddTransactionForm addTrans={this.addNewTransaction}/>
        <TransactionsList transactions={this.state.allTransactions} />
      </div>
    );
  }
}

export default AccountContainer;

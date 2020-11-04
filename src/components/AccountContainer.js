import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  constructor() {
    super()
    this.state = {
      allTransactions: [],
      transactions: [],
      search: ""
    }
  }

  componentDidMount() {
    fetch('http://localhost:6001/transactions').then(res => res.json()).then(transactions => this.setState({
      allTransactions: transactions,
      transactions: transactions
    }))
  }

  handleSubmit = (newTransaction) => {
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newTransaction)
    })
      .then(res => res.json)
      .then(newReturn =>
        this.setState({
          allTransactions: [...this.state.allTransactions, newReturn]
        }))
  }

  handleSearch = (searchTerm) => {
    this.setState({
      search: searchTerm
    })
    this.executeSearch()

  }
  executeSearch = () => {
    if(this.state.search !== ""){
    this.setState({
      allTransactions: this.state.transactions.filter(txn => 
        txn.description.toLowerCase().includes(this.state.search))
    })}else if (this.state.search === ""){
      console.log('here')
      this.setState({
        allTransactions: this.state.transactions
      })
    }
  
  }

  // deleteTransaction = (id) => {
  //   fetch(`http://localhost:6001/transactions/${id}`, {
  //     method: 'DELETE'
  //   }).then(res => res.json())
  //   .then(this.setState({
  //     allTransactions: this.state.allTransactions.filter( txn => txn.id != id),
  //     transactions: this.state.transactions.filter( txn => txn.id != id)
  //   }))
  // }



  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch} executeSearch={this.executeSearch}/>
        <AddTransactionForm handleSubmit={this.handleSubmit} />
        <TransactionsList allTransactions={this.state.allTransactions} />
      </div>
    );
  }
}

export default AccountContainer;

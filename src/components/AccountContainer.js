import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const baseURL = "http://localhost:6001/transactions/"

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTerm: '',
    sortTerm: ''
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
    console.log('adding this transaction',transaction)
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

  deleteTransaction = (transaction) => {
    console.log('deleting this transaction',transaction)
    // debugger
    fetch(baseURL + transaction.id, {
      method: 'DELETE'
    })
    this.setState({
      transactions: this.state.transactions.filter( t => t.id !== transaction.id)
    })
  }

  setSort = ({id}) => {
    console.log('setting sort', id)
    this.setState({
      sortTerm: id
    })
  }

  sortTransactions = () => {
    switch (this.state.sortTerm) {
      case 'Description':
        return this.state.transactions.sort((a,b) => a.description.localeCompare(b.description));
        break;
      case 'Category':
        return this.state.transactions.sort((a,b) => a.category.localeCompare(b.category));
        break;
      default:
        return this.state.transactions;
    }
  }

  render() {

    let filteredTransactions = this.sortTransactions().filter( transaction => transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

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
        deleteTransaction={this.deleteTransaction}
        setSort={this.setSort}
        />
      </div>
    );
  }

}

export default AccountContainer;

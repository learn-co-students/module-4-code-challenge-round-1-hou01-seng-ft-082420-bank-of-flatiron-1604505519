import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const transactionURL = 'http://localhost:6001/transactions'



class AccountContainer extends Component {
  constructor(){
    super()
    this.state = {
      transactions: [],
      displayTransactions: [],
      search: ''
    }
  }

  componentDidMount(){
    fetch(transactionURL)
    .then(res=>res.json())
    .then(transactions => {
      this.setState({
        transactions,
        displayTransactions: transactions
      })
    })
  }

  addTransaction = (e, transaction) => {
    e.preventDefault()
    // console.log("imagine a post!", transaction )
    fetch(transactionURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(transaction)
    })
    .then(res=>res.json()).then(newTransaction =>{
      this.setState({
        transactions: [...this.state.transactions, newTransaction],
        displayTransactions: [...this.state.displayTransactions, newTransaction]
      })
    })
  }

  handleSearchChange = (search) => {
    // console.log("inquisitive?", search)
    this.setState({
      search
    })
  }

  handleFilterChange = (filter) =>{
    console.log('filter change', filter)
    if(filter === 'description'){
      this.setState({
        displayTransactions: [...this.state.displayTransactions].sort((a,b) => {
          return a.description.localeCompare(b.description)
        })
      })
    } else if (filter === 'all'){
      this.setState({  
        displayTransactions: [...this.state.transactions]
      }) 
    } else if (filter === 'category'){
      this.setState({
        displayTransactions: [...this.state.displayTransactions].sort((a,b) => {
          return a.category.localeCompare(b.category)
        })
      })
    }
  }

  handleDelete = (transaction) => {
    console.log("delete", transaction.id)
    fetch(transactionURL + `/${transaction.id}`, {
      method: 'DELETE'
    })
    .then(res=>res.json())
    .then(() => {
      this.setState({
        transactions: [...this.state.transactions].filter(t => t.id !== transaction.id),
        displayTransactions: [...this.state.displayTransactions].filter(t => t.id !== transaction.id)
      })
    })
  }

  render() {
    let filteredTransactions = this.state.displayTransactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <div>
        <Search handleSearchChange={this.handleSearchChange}
        handleFilterChange={this.handleFilterChange}/>
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions = {filteredTransactions}
        handleDelete = {this.handleDelete}/>
      </div>
    );
  }
}

export default AccountContainer;

import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  constructor(){
    super();
    this.state = ({
      transactions: [],
      filteredTransactions: []
    })
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(res=>res.json())
    .then(transactions => this.setState({
      transactions: transactions,
      filteredTransactions: transactions
    }))
  }

  addNewTransaction = (transaction) => {
    fetch('http://localhost:6001/transactions',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(transaction)
    })
    .then(res=>res.json())
    .then(newTransaction=>this.setState({
      transactions: [...this.state.transactions,newTransaction]
    }))
  }

  searchTransaction = (e) => {
    let searchTerm = e.target.value.toLowerCase();
    console.log(searchTerm)
    this.setState({
      filteredTransactions: this.state.transactions.filter(
        transaction=>(transaction.description.toLowerCase()).includes(searchTerm)
      )
    })
  }

  render() {
    return (
      <div>
        <Search searchTransaction={this.searchTransaction}/>
        <AddTransactionForm addNewTransaction={this.addNewTransaction}/>
        <TransactionsList transactions={this.state.filteredTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;

import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Filter from './Filter'
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
      transactions: [...this.state.transactions,newTransaction],
      filteredTransactions: [...this.state.transactions,newTransaction]
    }))
  }

  searchTransaction = (e) => {
    let searchTerm = e.target.value.toLowerCase();
    this.setState({
      filteredTransactions: this.state.transactions.filter(
        transaction=>(transaction.description.toLowerCase()).includes(searchTerm)
      )
    })
  }
  
  deleteTransaction = (targetTransaction) => {
    fetch(`http://localhost:6001/transactions/${targetTransaction.id}`,{
      method:"DELETE"
    })
    .then(this.setState({
      transactions: this.state.transactions.filter(
        transaction=>!(transaction.id === targetTransaction.id)
      ),

      filteredTransactions: this.state.transactions.filter(
        transaction=>!(transaction.id === targetTransaction.id)
      )
    }))
  }

  sortTransactions = (e) => {
    let sortTerm = e.target.value.toLowerCase();
    this.setState({
      filteredTransactions: this.state.transactions.sort(function(a,b){
        if (a[sortTerm] < b[sortTerm]){
          return -1
        }
        else{
         return 1
        }
        return 0 
      })
    })
  }

  render() {
    return (
      <div>
        <Search searchTransaction={this.searchTransaction}/>
        <AddTransactionForm addNewTransaction={this.addNewTransaction}/>
        <Filter sortTransactions={this.sortTransactions}/>
        <TransactionsList transactions={this.state.filteredTransactions} deleteTransaction={this.deleteTransaction}/>
      </div>
    );
  }
}

export default AccountContainer;

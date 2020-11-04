import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    allTransactions: [],
    searchTerm: '',
    filteredTrans: []
  }

  // waits for the page to load and then goes and fetches all the 
  // transactions in API, sets this info as state
  componentDidMount(){
    fetch("http://localhost:6001/transactions").then(res=>res.json())
    .then(data => this.setState({allTransactions: data}))
    
  } 

  handleSearch = (e) => {
    let value = e.target.value
    console.log(e.target.value)
    console.log(value)
    this.setState({
      searchTerm: value,
      filteredTrans: this.state.allTransactions.filter(trans => trans.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()))})
  }


  newTransaction = (newTrans) => {
    //console.log("new transaction submitted", newTrans)
    fetch("http://localhost:6001/transactions", {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newTrans)
    }).then(res=>res.json())
    .then(trans => this.setState({allTransactions: [...this.state.allTransactions, trans]}))
  }



  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch}/>
        <AddTransactionForm newTransaction={this.newTransaction}/>
        {/* passing transactions object into the transactionsList */}
        <TransactionsList transactions={this.state.searchTerm ? this.state.filteredTrans : this.state.allTransactions}/>

      </div>
    );
  }
}

export default AccountContainer;

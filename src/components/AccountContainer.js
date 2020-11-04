import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

    state = {

      allTranscations: [],
      searchDes: ""
    }


  componentDidMount =() => {
    fetch("http://localhost:6001/transactions").then(res => res.json()).then(transaction => {
      this.setState({
        allTranscations: transaction
      })
    })
  }

    addTransaction =(newTransaction) => {
      fetch("http://localhost:6001/transactions", {
        method: "POST",
        header: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(newTransaction)
      }).then(res => res.json()).then(transaction => {
        console.log(transaction)
        this.setState({
          allTranscations: [...this.state.allTranscations, (transaction)]
        })
      })
    }

    handlecheck = (e) => {
      const lower = e.target.value.toLowerCase()
      console.log(lower)
      this.setState({
        searchDes: lower
      })
    }

  //   filterDescription = () => {
  //     if (this.state.allTranscations.length > 0) {
  //       this.state.allTranscations.filter(transaction => transaction.description.toLowerCase().includes(this.state.searchDes)
  //   )
  //   } else {
  //     this.state.allTranscations
  //   }
  // }
    
  render() {

  //   if (this.state.allTranscations.length > 0){
  //     this.state.allTranscations.filter(transaction => transaction.description.toLowerCase().includes(this.state.searchDes)
  // )
  // } else {
  //    {this.state.allTranscations}
  // }


    // console.log(this.state.allTranscations)
    // switch
    // if (this.state.allTranscations.length > 0) {
    //   this.state.allTranscations.filter(transaction => {
    //   return transaction.description.toLowerCase().includes(this.state.searchDes)
    // })



    return (
      <div>
        <Search 
        handlecheck={this.handlecheck}
        />
        <AddTransactionForm 
        addTransaction={this.addTransaction}
        />
        <TransactionsList
          allTranscations={this.state.allTranscations}
        />
      </div>
    );
  }
}

export default AccountContainer;

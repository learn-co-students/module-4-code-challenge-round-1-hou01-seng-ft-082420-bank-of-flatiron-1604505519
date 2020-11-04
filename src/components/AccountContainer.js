import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Transaction from "./Transaction";
const transURL = "http://localhost:6001/transactions"

class AccountContainer extends Component {


  render() {
    console.log(this.props)
    return (
      <div>
        <Search />
        <AddTransactionForm addNewTransaction={this.props.addNewTransaction}/>
        <TransactionsList transactions= {this.props.transactions} />
      </div>
    );
  }
}

export default AccountContainer;

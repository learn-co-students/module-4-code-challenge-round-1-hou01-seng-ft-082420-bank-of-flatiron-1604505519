import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const bankUrl = "http://localhost:6001/transactions"

class AccountContainer extends Component {

  state = {
    allTrans: []
  }

  componentDidMount = () => {
    fetch(bankUrl)
    .then(resp => resp.json())
    .then(trans => {
      this.setState.allTrans
    })
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transactions={this.state.} />
      </div>
    );
  }
}

export default AccountContainer;

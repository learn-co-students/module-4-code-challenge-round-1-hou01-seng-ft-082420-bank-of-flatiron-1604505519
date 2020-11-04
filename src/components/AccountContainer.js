import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state={
    trans: this.props.boop
  }
  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList boop2={this.props.boop}/>
      </div>
    );
  }
}

export default AccountContainer;

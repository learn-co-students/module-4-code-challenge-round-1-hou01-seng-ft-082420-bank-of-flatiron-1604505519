import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        {this.props.transactionData.map((transaction) => (
          <TransactionsList
            key={transaction.id}
            transactionData={transaction}
          />
        ))}
      </div>
    );
  }
}

export default AccountContainer;

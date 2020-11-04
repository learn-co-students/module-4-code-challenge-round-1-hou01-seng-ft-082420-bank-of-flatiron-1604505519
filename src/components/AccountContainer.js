import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <Search 
          handleSearch={this.props.handleSearch}
          searchValue={this.props.searchValue}
        />
        <AddTransactionForm handleSubmit={this.props.handleSubmit}/>
        <TransactionsList transactions={this.props.transactions} />
      </div>
    );
  }
}

export default AccountContainer;

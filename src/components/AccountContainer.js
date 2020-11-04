import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const URLBase = "http://localhost:6001/transactions/"

class AccountContainer extends Component {

  state = {
    allTransactions: [],
    search: ""
  }

  componentDidMount() {
    fetch(URLBase)
    .then(res => res.json())
    .then (transaction => {
      this.setState({
        allTransactions: transaction
      })
    })
  }

  addNewTransaction = (newTransaction) => {
    fetch(URLBase, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
    .then(res => res.json())
    .then(transactionObj => {
      this.setState({
        allTransactions: [...this.state.allTransactions, transactionObj]
      })
    })
  }
  
  searchTransactions = (e) => {
    let search = e.target.value
    this.setState({
      search
    })
  }

  render() {
    const filterDescription = this.state.allTransactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <div>
        <Search searchTransactions={this.searchTransactions} />
        <AddTransactionForm addNewTransaction={this.addNewTransaction}/>
        <TransactionsList allTransactions={filterDescription}/>
        {/* allTransactions={this.state.allTransactions}/> */}
      </div>
    );
  }
}

export default AccountContainer;


// handleSearchChange = (term) => {
//   let search = term.toLowerCase()
//   this.setState({
//     search
//   })
// }

// handleSortChange = value => {
//   this.setState({sort: value})
// }

// sortTransaction = () => {
//   let transaction = this.state.allTransactions
//   switch (this.state.sort) {
//     case 'Alphabetically':
//       return transaction.sort((a, b) => {
//         return a.name.localeCompare(b.name)
//       });
//       case 'None':
//         return transaction;
//       default:
//         return transaction;
//   }
// }

// handleFilterChange = value => {
//   this.setState({filter: value})
// }

// filterTransactions = () => {
//   let transactions = this.sortTransaction()
//   switch(this.state.filter){
//     case 'All':
//       return transactions
//     case 'Date':
//       return transactions.filter(transaction => transaction.date)
//     case 'Description':
//       return transactions.filter(transaction => transaction.description)
//   }
// }
import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  constructor() {
    super()
    this.state = {
           searchTerm: '',
           transactions: []
         }
  }

  componentDidMount(){
  fetch('http://localhost:6001/transactions')
  .then( response => response.json() )
  .then( data => {
    this.setState({transactions: data})
  })
}

handleChange(event) {
this.setState({
     searchTerm: event.target.value
   })
 }

render() {
  return(
    <div>
    <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange.bind(this)} />
    <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm} />
    </div>
  )

}




}

export default AccountContainer;

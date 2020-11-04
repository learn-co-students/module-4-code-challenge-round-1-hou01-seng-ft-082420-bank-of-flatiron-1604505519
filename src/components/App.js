import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";
const transURL = "http://localhost:6001/transactions"

class App extends Component {
  state = {
    allTransactions:[],
    search:''
  }

  addNewTransaction = (newTransaction) => {
    console.log("submit")
    console.log(newTransaction)
    fetch(transURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
    .then(res => res.json())
    .then((newTransaction) => {
      this.setState({
        allTransactions: [...this.state.allTransactions, newTransaction]
      })
    })
  }



  componentDidMount(){
    fetch(transURL)
    .then(res => res.json())
    .then((transaction) => {
      this.setState({
        allTransactions: transaction
      })
    })
  }
  


  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transactions={this.state.allTransactions} addNewTransaction={this.addNewTransaction} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

const URL = 'http://localhost:6001/transactions'

class App extends Component {

  state = {
    allTransactions: []
  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(transactions => {
      this.setState({
        allTransactions: transactions
      })
    })
  }

  addTrans = (newTran) => {
      this.state({
        allTransactions: [...this.state.allTransactions, newTran]
      })
  }
 

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transactions={this.state.allTransactions}/>
      </div>
    );
  }
}

export default App;

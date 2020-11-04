import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";
//import Transactions  from "./Transaction.js"
class App extends Component {

  state={
      transactions: []
    }
  


   componentDidMount(){
  fetch("http://localhost:6001")
  .then (res => res.json())
  .then (transactions =>{
    console.log(transactions)
    //this.setState({
      //transactions: transactions
    })
    
 // })
}

  
  
    render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer  transactions = {this.state.transactions}/>
      </div>
    );
  }
}

export default App;

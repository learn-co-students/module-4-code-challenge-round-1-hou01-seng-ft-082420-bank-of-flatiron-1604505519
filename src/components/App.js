import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";




class App extends Component {
 

    state = {
      allTransactions: []
    }
  
  componentDidMount = () => {
  fetch('http://localhost:6001/transactions')
  .then(res => res.json())
  .then(data => this.setState({allTransactions: data}))
  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transactionData ={this.state.allTransactions} />
      </div>
    );
  }
}

export default App;

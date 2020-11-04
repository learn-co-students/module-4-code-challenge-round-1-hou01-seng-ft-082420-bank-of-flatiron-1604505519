import React from "react";
import Transaction from "./Transaction";

const TransactionsList = ({transactions}) => {
  //destructured the props to access just the transaction itself
  console.log("transactions list", transactions)
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* itterating through each transaction and building a Transaction component */}
        {transactions.map(trans => <Transaction transaction={trans}/>)}
      </tbody>
    </table>
  );
};

export default TransactionsList;

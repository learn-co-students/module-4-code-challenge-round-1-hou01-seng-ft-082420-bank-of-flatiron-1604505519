import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  
  let {transactions, deleteTransaction, setSort} = props

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Date
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description <button className="ui icon button" onClick={(e) => setSort(e.target)} ><i id="Description" className="sort down icon"></i></button></h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category <button className="ui icon button" onClick={(e) => setSort(e.target)}><i id="Category" className="sort down icon"></i></button></h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header"></h3>
          </th>
        </tr>
        {transactions.map( transaction => <Transaction transaction={transaction} key={transaction.id} deleteTransaction={deleteTransaction} />)}
      </tbody>
    </table>
  );
};

export default TransactionsList;

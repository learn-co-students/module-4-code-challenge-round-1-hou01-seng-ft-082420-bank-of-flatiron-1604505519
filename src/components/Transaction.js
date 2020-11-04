import React from "react";

const Transaction = (props) => {
  let {transaction} = props
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <button onClick={(e) => props.handleDelete(transaction)}>Delete</button>
    </tr>
  );
};


export default Transaction;

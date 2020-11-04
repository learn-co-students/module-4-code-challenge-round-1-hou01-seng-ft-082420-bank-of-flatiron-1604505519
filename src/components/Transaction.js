import React from "react";

const Transaction = ({transaction}) => {
//destructured the props to access just the transaction itself
//displays all transaction attributes in the order that follows title bar
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>
  );
};

export default Transaction;

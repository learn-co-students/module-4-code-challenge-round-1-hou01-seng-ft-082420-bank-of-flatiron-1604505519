import React from "react";

const Transaction = ({transaction, deleteTransaction}) => {
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}
       <button onClick={() => deleteTransaction(transaction)}>Delete</button>
      </td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>
  );
};

export default Transaction;

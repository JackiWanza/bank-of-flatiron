import React, { useEffect, useState } from "react";
import "./table.css";
const Table = (props) => {
  // desctructure props
  let { transactions, value } = props;
  if (value){
    transactions=transactions.filter((transaction)=>{
        return transaction.category.toLowerCase() === value.toLowerCase()
    })
  }
//   const filteredTransactions = transactions.filter((transaction) => {
//     if (transaction.category.toLowerCase() === value.toLowerCase()) {
//       return transaction;
//     } else {
//       return transactions;
//     }
//   });
  // transaction.category.toLowerCase() === value.toLowerCase()
  //   ? transactions.filter((transaction) => {
  //       return transaction.category.toLowerCase() === value.toLowerCase();
  //     })
  //   : transactions;
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>date</th>
            <th>description</th>
            <th>category</th>
            <th>amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions &&
            transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.date}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.category}</td>
                  <td>{transaction.amount}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

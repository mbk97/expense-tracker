import React, { useContext } from "react";
import { GlobalContext } from "Context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <p>
        {transactions.length === 0 && <p>Your transaction list is empty</p>}
      </p>
      <ul className="list">
        {transactions.map((transaction) => {
          return <Transaction transaction={transaction} key={transaction.id} />;
        })}
      </ul>
    </div>
  );
};

export default TransactionList;

import React, { useContext } from "react";
import { GlobalContext } from "Context/GlobalState";
import { addNairaSign } from "utils/addNairaSign";
const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const { deleteTransactions } = useContext(GlobalContext);
  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {/* {sign}${Math.abs(transaction.amount)} */}
          {sign} {addNairaSign(Math.abs(transaction.amount))}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransactions(transaction.id)}
        >
          x
        </button>
      </li>
    </div>
  );
};

export default Transaction;

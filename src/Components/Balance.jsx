import { GlobalContext } from "Context/GlobalState";
import React, { useContext } from "react";
import { addNairaSign } from "utils/addNairaSign";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((a, b) => a + b, 0).toFixed(2);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>{addNairaSign(total)}</h1>
    </div>
  );
};

export default Balance;

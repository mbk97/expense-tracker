import { GlobalContext } from "Context/GlobalState";
import React, { useContext } from "react";
import { addNairaSign } from "utils/addNairaSign";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => acc + item, 0) * -1
  ).toFixed(2);

  console.log(expense);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{addNairaSign(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{addNairaSign(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;

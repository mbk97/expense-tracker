import React, { useState, useContext } from "react";
import { GlobalContext } from "Context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000),
      text: text,
      amount: +amount,
      //the plus sign converts the string to a number
    };
    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <div>
      <h3>Add new transactions</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter Text..."
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            <br />
            (Negative - expense, Positive-income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;

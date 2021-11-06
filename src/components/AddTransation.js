import React, { useState } from "react";
import "firebase/firestore";
import app from "../Firebase";
import { v4 as uuidv4 } from "uuid";

export const AddTransation = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const db = app.firestore();

  // form
  const onSubmit = (e) => {
    e.preventDefault();

    db.collection("expenseHistory")
      .doc()
      .set({
        id: uuidv4(),
        description: text,
        amount: parseInt(amount),
        time: new Date(),
      })
      .then(() => {
        setAmount("");
        setText("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

import React, { useContext, useEffect, useState } from "react";

import "firebase/firestore";
import app from "../Firebase";

export const IncomeExpences = () => {
  const [dbTransations, setDbTransations] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const db = app.firestore();

  useEffect(() => {
    const dbTransations = [];
    db.collection("expenseHistory").onSnapshot((querySnapShot) => {
      querySnapShot.docs.map((doc) => {
        dbTransations.push(doc.data());
      });

      const income = querySnapShot.docs
        .filter((item) => item.data().amount > 0)
        .reduce((acc, item) => (acc += item.data().amount), 0)
        .toFixed(2);
      setIncome(income);

      const expense = querySnapShot.docs
        .filter((item) => item.data().amount < 0)
        .reduce((acc, item) => (acc += item.data().amount), 0)
        .toFixed(2);
      setExpense(expense);

      console.log(income, expense);
    });
  }, [dbTransations]);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          {console.log(income, expense)}
          +Rs.{income}
        </p>
      </div>
      <div>
        <h4>Expence</h4>
        <p id="money-minus" className="money minus">
          -Rs.{expense}
        </p>
      </div>
    </div>
  );
};

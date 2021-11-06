import React, { useContext, useEffect, useState } from "react";

import "firebase/firestore";
import app from "../Firebase";

export const Balance = () => {
  const [dbTransations, setDbTransations] = useState([]);
  const [balance, setBalance] = useState(0);
  const db = app.firestore();

  useEffect(() => {
    const dbTransations = [];
    db.collection("expenseHistory").onSnapshot((querySnapShot) => {
      querySnapShot.docs.map((doc) => {
        dbTransations.push(doc.data());
      });
      const balance = querySnapShot.docs
        .reduce((acc, item) => (acc += item.data().amount), 0)
        .toFixed(2);
      setBalance(balance);
    });
  }, [dbTransations]);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">Rs.{balance}</h1>
    </>
  );
};

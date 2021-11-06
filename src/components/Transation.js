import React from "react";
import "firebase/firestore";
import app from "../Firebase";

export const Transation = ({ transation }) => {
  const sign = transation.amount > 0 ? "+" : "-";

  const db = app.firestore();

  const deleteTransation = () => {
    db.collection("expenseHistory")
      .doc(transation.docId)
      .delete()
      .then((succ) => console.log("deleted", succ));
  };
  return (
    <li className={transation.amount > 0 ? "plus" : "minus"}>
      {transation.text}{" "}
      <span>
        {sign}${Math.abs(transation.amount)}
      </span>
      <button onClick={() => deleteTransation()} className="delete-btn">
        x
      </button>
    </li>
  );
};

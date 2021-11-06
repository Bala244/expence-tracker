import React, { useContext, useEffect, useState } from "react";
import { Transation } from "./Transation";

import "firebase/firestore";
import app from "../Firebase";

export const TransationList = () => {
  const db = app.firestore();
  const [transations, setTransations] = useState([]);

  useEffect(() => {
    const dbTransations = [];
    db.collection("expenseHistory")
      .get()
      .then((querySnapShot) =>
        querySnapShot.docs.map((doc) =>
          dbTransations.push({ ...doc.data(), docId: doc.id })
        )
      )
      .then(() => setTransations(dbTransations))
      .catch((err) => console.log(err));
  }, [transations]);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transations.length === 0
          ? "Please Add Transation"
          : transations.map((transation) => (
              <Transation key={transation.id} transation={transation} />
            ))}
      </ul>
    </div>
  );
};

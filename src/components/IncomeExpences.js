import React,{ useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const IncomeExpences = () => {
    const { transations } = useContext(GlobalContext);

    const amounts = transations.map(transation => transation.amount);
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">+Rs.{income}</p>
            </div>
            <div>
                <h4>Expence</h4>
                <p id="money-minus" className="money minus">-Rs.{expense}</p>
            </div>
        </div>
    )
}

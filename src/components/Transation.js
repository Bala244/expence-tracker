import React,{ useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';


export const Transation = ({ transation }) => {
    const { deleteTransation } = useContext(GlobalContext);

    const sign = transation.amount > 0 ? '+' : '-';

    return (
        <li className={transation.amount > 0 ? 'plus' : 'minus' }>
            { transation.text } <span>{sign}${ Math.abs(transation.amount) }</span>
            <button 
            onClick={() => deleteTransation(transation.id)} 
            className="delete-btn">
                x
            </button>
        </li>
    )
}

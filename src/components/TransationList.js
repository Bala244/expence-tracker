import React,{ useContext } from 'react';
import { Transation } from './Transation';

import { GlobalContext } from '../context/GlobalState';


export const TransationList = () => {
    const { transations } = useContext(GlobalContext);

    return (
        <div>
            <h3>History</h3>
                <ul id="list" className="list">
                    {transations.length == 0 ? "Please Add Transation" : transations.map(transation => ( <Transation key={ transation.id } transation={ transation } /> )) }
                </ul>
        </div>
    )
}

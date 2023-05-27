import React, { useState } from "react";

import Card from "./UI/Card";

import './SingleExpense.css';

function SingleExpense(props) {
  const [inputReadOnly, setInputReadOnly] = useState(true);

  const onClickEditHandle = () => {
    const updatedInputReadOnly = inputReadOnly ? false : true;

    setInputReadOnly(updatedInputReadOnly);
  }

  return (
    <Card classes={inputReadOnly ? 'card' : 'card active'}>
      <div className='card__expense-info'>
        <input type="text" onChange={props.onEditHandle} value={props.data.expenseName} readOnly={inputReadOnly} />
        <div className="card__expense-info__data">
          <span>$ {props.data.expenseAmount}</span>
          <span>{props.data.expenseDate ? props.data.expenseDate : 'No date'}</span>
        </div>
        <div>
          <i className={`bi bi-${inputReadOnly ? "pencil" : "check-circle"}`} onClick={onClickEditHandle}></i>
          <i className="bi bi-x-circle" onClick={props.removeExpense}></i>
        </div>
      </div>
    </Card>
  )
}

export default SingleExpense
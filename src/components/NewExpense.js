import React, { useState } from 'react';

import Card from './UI/Card';

import './NewExpense.css';

function NewExpense(props) {
  const [error, setError] = useState('');
  const [expense, setExpense] = useState({
    expenseName: '',
    expenseAmount: '',
    expenseDate: 0,
  });

  const onChangeName = e => {
    setExpense({
      expenseName: e.target.value,
      expenseAmount: expense.expenseAmount,
      expenseDate: expense.expenseDate
    });
  }

  const onChangeAmount = e => {
    setExpense({
      expenseName: expense.expenseName,
      expenseAmount: e.target.value,
      expenseDate: expense.expenseDate
    });
  }

  const onChangeDate = e => {
    setExpense({
      expenseName: expense.expenseName,
      expenseAmount: expense.expenseAmount,
      expenseDate: e.target.value
    });
  }

  const onClickSubmitHandle = e => {
    e.preventDefault();

    if (expense.expenseName && expense.expenseDate && expense.expenseAmount) {
      props.addNewExpense(expense);
  
      setExpense({
        expenseName: '',
        expenseDate: '',
        expenseAmount: ''
      });

      setError('');
    } else {
      setError("Please fill all filed");
    }
  }

  return (
    <Card classes="card">
      <h1>{props.title}</h1> 
      <form>
        <div className='input-container'>
            <label htmlFor="new-expense-name">Expense</label>
            <input type='text' id='new-expense-name' onChange={onChangeName} value={expense.expenseName} />
        </div>
        <div className='input-container'>
            <label htmlFor="new-expense-amount">Amount</label>
            <input type='number' id='new-expense-amount' onChange={onChangeAmount} value={expense.expenseAmount}/>
        </div>
        <div className='input-container'>
            <label htmlFor="new-expense-date">Date</label>
            <input type='date' id='new-expense-date' onChange={onChangeDate} value={expense.expenseDate}/>
        </div>
        <span className='error'>{error}</span>
        <input type='submit' value="Add Expense" onClick={onClickSubmitHandle}/>
      </form>
    </Card>
  )
}

export default NewExpense;
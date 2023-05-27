import React, { useState, useEffect } from 'react'

import SingleExpense from './SingleExpense';
import Card from './UI/Card';

function AllExpenses(props) {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    setExpenses(props.allExpenses);
  }, [props.allExpenses]);

  const onNameChangeHandle = (e, index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index] = {
      ...updatedExpenses[index],
      expenseName: e.target.value
    };

    localStorage.setItem('expense-items', JSON.stringify(updatedExpenses));
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      {expenses?.map((expense, index) => {
        return (
          <Card key={index}>
            <SingleExpense 
              data={expense}
              onEditHandle={e => onNameChangeHandle(e, index)} 
              removeExpense3={props.removeExpense}
            />
          </Card>
        )
      })}
    </div>
  )
}

export default AllExpenses
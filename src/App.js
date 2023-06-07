import React, {useState, useEffect} from "react";

import NewExpense from "./components/NewExpense";
import AllExpenses from "./components/AllExpenses";

import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  
  useEffect(() => {
    const itemsFromLocalStorage = JSON.parse(localStorage.getItem('expense-items'));

    if (itemsFromLocalStorage) {
      setExpenses(itemsFromLocalStorage);
    }
  }, []);
  
  const addExpense = newExpense => {
    setExpenses(prev => {
      const updatedExpenses = [...prev, newExpense];
      localStorage.setItem('expense-items', JSON.stringify(updatedExpenses));

      return updatedExpenses;
    });
  }

  const removeExpenseItem = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);

    localStorage.setItem('expense-items', JSON.stringify(updatedExpenses));
    setExpenses(updatedExpenses);

  }

  return (
    <div className="container">
      <NewExpense addNewExpense={addExpense} title="Expenses List" />
      <AllExpenses allExpenses={expenses} removeExpense={removeExpenseItem} />
    </div>
  );
}

export default App;

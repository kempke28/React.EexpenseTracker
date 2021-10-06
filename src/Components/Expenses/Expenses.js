import React, { useState } from "react";

import ExpensesList from "./ExepensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart'
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //Filter items by Year pulling the "expenseItem" props and using boolean === comparing with the filterd Year/'making' another list depending on the year.
  const filteredExpenseItems = props.expenseItem.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear
  })
  

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenseItems}/>
        <ExpensesList expenseItem={filteredExpenseItems}/>
      </Card>
    </div>
  );
};

export default Expenses;

import React, { useState } from 'react';

import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'
import "./ExpenseItem.css";


function ExpenseItem(props) {
  
  const [title, setTitle] = useState(props.title); //array distructuring: to separate 2 separate variables or constants. Use 'state' function  is the KEY of react. Will call the variable once again.
  
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  }

  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Update info</button>
    </Card>
    </li>
  );
}

export default ExpenseItem;

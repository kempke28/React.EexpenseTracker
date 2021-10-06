import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  /* ATTENTION TO THIS COMMENTED CODE: 
another way to call the useState function altogeather is:

    As an Object, like an array
    const[userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredDate: '',
    enteredAmount: '',
    }   )

    make the call of the setUserInput separate, but need to user the 3 dots ... to pull all the object from above.
    const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput,     <--- here are the 3 dots ...  pulling the whole object to not update only one property
            enteredTitle: event.target.value,
    });
    };

    oooooor doing the correct way which will garantee that the previwes state will be the previews state and not an outdated info is:
    using a function state:

    setUserInput{(prevState = => {
        return {...prevState, enteredTitle: event.target.value};   <-- using the 3 dots ... to pull the prevState
    })
} 

    const titleAmountHandler = (event) => {
        setUserInput({
            ...userInput,    <--- here are the 3 dots ...  pulling the whole object to not update only one property
            enteredAmount: event.target.value,
    });
    };

    const titleDateHandler = (event) => {
        setUserInput({
            ...userInput,    <--- here are the 3 dots ...  pulling the whole object to not update only one property
            enteredDate: event.target.value,
    });
    }; */

  //use useState function to save the value when in changes, each useState will be individually called for each input in the form
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //function to detect changes on events, will be use in 'onChange' function over input tag.
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dataChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };


  //prevent 
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData)
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          ></input>
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dataChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='button' onClick={props.onCancel}>Not Add Expense</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

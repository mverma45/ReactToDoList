import React, { useState } from "react"
import "./ExpenseForm.css"

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("")
  const [enteredAmount, setEnteredAmount] = useState("")
  const [enteredDate, setEnteredDate] = useState("")
  // we can have more than oneState.
  // initially this is an empty string, because when the form is rendered for the first time nothing is entered.
  // we get the event object automatically like we do in vanilla JavaScript
  // we call the setEnteredTitle and pass in the event.target.value, the currently entered value as a parameter to setEnteredTitle.  This will be stored in the state.

  // we don't have to have 3 states as defined above we can have one state we just need to pass an object not a string.  Also now we would have to update all three properties and not just one (if they were seperate properties) we could also do
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   })
  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value)
    //   this will dump the other keys listed above, to avoid react from losing the other keys we use the spread operator (...)  The spread operator takes an object pulls out all the key value pairs and adds them to the new object.  This ensures the other objects are not thrown away.
    //     setUserInput({
    //       ...userInput,
    //       enteredTitle: event.target.value,
    //     })
  }
  //This is not a good approach, it would work but it could fail, here we are depending on the previous state to update the state.  We are copying the previous state's snapshot to copy in the previous values.  Then over write one value with a new one.  Instead of calling it like the example below.  We should pass in a function to that function
  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value)
    //   insted of doing this
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })
    // we should do this, this will automatically recieve the previous state's snapshot, we should do it like the example below rather than the one above it because react will gurantee it will be the latest snapshot, also react schedules state updates, it doesn't perform them instantly.  If your state depends on the previous state use the example below.  If we schedule to many or outdated states we could be depending on out dated
    //     setUserInput((prevState, value) => {
    //       return { ...prevState, enteredTitle: event.target.value }
    //     })
  }

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // })
  }

  const submitHandler = event => {
    //this prevents the default behavior of the browser, this doesn't send the request so the page doesn't re load either.
    event.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      //this will parse the date string and convert it to a date object.
    }
    console.log(expenseData)
    setEnteredTitle("")
    setEnteredAmount("")
    setEnteredDate("")
    // we set this back to an empty string and it clears the form
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          {/* adding the value attribute will reset or change the input, this will set the input internal value property which every internal value has.  Also we can set it to a new value. That is now two way binding, now we just don't listen to changes in the input to update the state we also feed the state into the input so when he change we also */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new_expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm

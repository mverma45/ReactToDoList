//we don't need to put the import React from "react" because React is smart enough to figure this out but in older React projects we need to add this.
import React from "react"
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]

  // *this is the same as the the code below, this is what happens under the hood.  We used to have to do import React from 'react' we don't have to do that anymore, the projects are able to figure out this on it it's own.  We could write everything like this if we wanted.

  const addExpenseHandler = expense => {
    console.log("In app.js")
    console.log(expense)
  }

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started"),
  //   React.createElement(Expenses, { items: expenses })
  // )

  //* This code is more humanreadable, this is JSX code.
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App

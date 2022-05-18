import React, { useState } from "react"
import ExpensesFilter from "./ExpensesFilter"
import Card from "../UI/Card"
import ExpensesList from "./ExpensesList"
import "./Expenses.css"

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020")

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      {/* forward the picked year from ExpenseFilter to the
      Expenses component, then in the Expenses component store it in a state.  Forward the data to a higher level component */}
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses

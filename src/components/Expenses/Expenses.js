import React, { useState } from "react"
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter"
import Card from "../UI/Card"

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020")
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }
  return (
    <div>
      {/* forward the picked year from ExpenseFilter to the
      Expenses component, then in the Expenses component store it in a state.  Forward the data to a higher level component */}
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map(expense => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses

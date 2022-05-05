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
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  )
}

export default Expenses

import "./ExpenseDate.css"

function ExpenseDate(props) {
  // we can create helper functions and then pass in the function name in the JSX
  const month = props.date.toLocaleString("en-US", { month: "long" })
  const day = props.date.toLocaleString("en-US", { day: "2-digit" })
  const year = props.date.getFullYear()
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  )
}
export default ExpenseDate

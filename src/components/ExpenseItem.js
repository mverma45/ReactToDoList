import ExpenseDate from "./ExpenseDate"
import Card from "./Card"
import "./ExpenseItem.css"

function ExpenseItem(props) {
  // props are just properties, props are used to pass data from one component to another.
  //must have only 1 root element in a return statement, 1 work around is to wrap it in a opening and closing div. also we can put parentheses () around to tell javascript it's on statement.  Props we pass a component to a direct child component.

  return (
    <Card className="expense-item">
      {/* self closing element, if the element doesn't render anything we can write it as a self closing */}
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem

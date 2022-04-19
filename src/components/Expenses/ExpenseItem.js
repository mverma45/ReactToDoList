import React from "react"
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"
import "./ExpenseItem.css"

function ExpenseItem(props) {
  // props are just properties, props are used to pass data from one component to another.
  //must have only 1 root element in a return statement, 1 work around is to wrap it in a opening and closing div. also we can put parentheses () around to tell javascript it's on statement.  Props we pass a component to a direct child component.
  // we just split up our code in multiple files and then combine them together
  //our customer components will not show up on the developer tools.  Our personal components we create such as ex. <card></card> are not really HTML elements, we just use them in our code they are custom.  All the custom components use the HTML components if we drill deep enough we will find an underlying HTML components.

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

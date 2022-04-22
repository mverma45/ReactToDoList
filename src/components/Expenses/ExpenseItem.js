import React, { useState } from "react"

import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"
import "./ExpenseItem.css"

const ExpenseItem = props => {
  const [title, setTitle] = useState(props.title)
  //useState needs a default state value you can't use it like useState, useState gives us access to the special variable, it doesn't just return that it also returns a function that we can then call to assign a new value to that variable.  So we won't be assigning values with an equal sign we will be assigning values by calling a function that's how state variable works.  State will return an array. The first value is the variable it self, the second is the updating function.  We can use the modern JS feature called array destructuring, the first element is pointer at that managed value 'useState(props.title)' the second is a function we can call later to set a new title.  We can pick any names, the convention is to use something that describes the value and then set plus the name of the value that updates the value but it can be what ever we want.  The useState 'the hook' always returns an array with two elements that's always the case.  With that we can remove the title variable. Also we can remove the value assignment in clickHandler

  // let title = props.title

  const clickHandler = () => {
    setTitle("Updated!")
    //This works because, calling this
    // title = "Updated"
    console.log(title)
  }

  return (
    <Card className="expense-item">
      {/* self closing element, if the element doesn't render anything we can write it as a self closing */}
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      {/* we just point to the clickHandler, if we added the () JS would execute the code, we don't want to execute the code.  Since it's just being parsed.*/}
    </Card>
  )
}

export default ExpenseItem

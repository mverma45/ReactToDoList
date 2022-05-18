Naming the functions it's conventional we should name our functions like clickHandler if they are trigged upon an event. We don't have to do that way, but it's convenient.
we want to define a function before the return keyword we can do it wit the function or the => (arrow function).
we want to keep our JSX logic lean and not put too much logic in the code.
props are just properties, props are used to pass data from one component to another.
must have only 1 root element in a return statement, 1 work around is to wrap it in a opening and closing div. also we can put parentheses () around to tell javascript it's on statement. Props we pass a component to a direct child component.
we just split up our code in multiple files and then combine them together
our customer components will not show up on the developer tools. Our personal components we create such as ex. <card></card> are not really HTML elements, we just use them in our code they are custom. All the custom components use the HTML components if we drill deep enough we will find an underlying HTML components.

React allows you to create re-usable and reactive components consisting of HTML Javascript and CSS.
With react we follow the declarative approach, we define the target states and react then takes care of reaching that state.
The component is a regular function
State
State is a plain Javascript object used by React to represent an information about the components current situation. It's managed in the component (just like any variable declard in a function)
State is not a react specific concept but it is a react key concept as well
React doesn't care if a variable changes react ignores it.
useState is a function provided by the react library, this function allows us to define values as state. Where changes to the values should reflect in the component function.
To use state we go inside the component function, we call useState, useState is a React hook, useState is an important hook.
All react hooks start with use and they must be called inside the component functions. We can't call them outside the function. Also they can't be called in nested functions they must be called directly inside the function.
useState needs a special value.
State is a key concept in react.

In Expenses.js ExpenseItem is being used 4 times, each item recieves it's own seperate state, which is not attached to any other state. We have one defination but that function is called 4 times every time it's called a new seperate state is created. It is managed independently by react. It's created the same way as the others but they have their own uniqueness.

We can use a const because we are not reassigning a value with the equals (=) sign we call a state updating function to re assign a value if we were using an equal (=) sign it would cause an error. We use state that tells react it should manage the value for us.

When the component function is executed when the state is updated.

React keeps track of when 'useState' for the first time, when it's called for the first time ever it will take the argument as an initial value if the component is re executed react will not re inialize the state. It will protect the state it had and wrap the latest state

User input
we need to add listeners to listen to every keystroke.
we can do that on the element we want to add a listener.
onInput will listen to every keystroke
onChange does the same as onInput but onChange we can listen to all the dropdowns
we can define it inline with a function or an arrow function.
But it's better to define it up front.

Two way binding
Which means we don't just listen for the changes but we also pass a new value back to the input.
so we can reset or change the program.
When we create two way binding we are creating a controlled component.

A stateless component is also called a dumb component because it's there to just output some data. In most react you will have more dumb/stateless or presentational component then state components.

We can pass components down from parent to child using props, props can only be passed from parent to child we can't skip intermediate components.

To push data up from child to parent

Lifting State Up
We can move up the component to the closest ancestor, lets say we have an app component and two sibling components Expense and New Expense, since Expense and New Expense are independent components. But we want them to sync up, we can lift up the state to the app components using props. By passing data to the function, by doing that we lift that state up. We lift that component to the app component so we can use it. When we say lifting the state up we either use it there or we pass it back down another child component.
more info on https://reactjs.org/docs/lifting-state-up.html

Conditional Output
is rendering A or B if depends on the situation.

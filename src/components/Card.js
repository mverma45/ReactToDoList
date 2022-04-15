import "./Card.css"

//card in web development means a look with dropshadows and rounded corners.
//children is a reserved name, we don't set children prop on the card, the value will always be the opening and closing of the custom component.
// when we combine components we are using composition.
function Card(props) {
  const classes = "card " + props.className
  // anything we get from outside is added to the string card
  return <div className={classes}>{props.children}</div>
  // {classes} is dynamically pointed to the classes const
}

export default Card

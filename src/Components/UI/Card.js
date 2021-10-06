import "./Card.css";

function Card(props) {
  const classes = 'card ' + props.className;  //create a class to add properties to the original 'card' tag
  return <div className={classes}>{props.children}</div>; //children prop reserved word: content between opening and closing tag, look at the brackets, are needed to call the const.
}

export default Card;

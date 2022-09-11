import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  return (
    <div ref={props.testRef} className={classes}>
      {props.children}
    </div>
  );
}

export default Card;

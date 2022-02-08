import classes from "./card.module.css";

const Card = (props) => {
  return <div className={classes[componentName]}>{props.children}</div>;
};

const componentName = "Card";

export default Card;

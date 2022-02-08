import Button from "./button";
import classes from "./like-button.module.css";

const LikeButton = (props) => {
  return <Button title={props.title} className={classes[componentName]} />;
};

const componentName = "LikeButton";

export default LikeButton;

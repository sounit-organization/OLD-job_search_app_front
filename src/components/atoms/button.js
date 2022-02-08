import classes from "./button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${classes[componentName]} ${props.className}`}
    >
      {props.title}
    </button>
  );
};

const componentName = "Button";

export default Button;

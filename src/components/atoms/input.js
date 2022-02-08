import classes from "./input.module.css";

const Input = (props) => {
  return (
    <input
      className={classes[componentName]}
      value={props.value}
      onChange={(event) => props.onChange(event.target.value)}
    />
  );
};

const componentName = "Input";

export default Input;

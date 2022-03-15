import classes from "./input.module.css";

const Input = (props) => {
  return (
    <input
      id={props.id}
      placeholder={props.placeholder || "Search"}
      className={`${classes[componentName]} ${props.className}`}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

const componentName = "Input";

export default Input;

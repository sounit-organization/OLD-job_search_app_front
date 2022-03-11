import classes from "./input.module.css";

const Input = (props) => {
  return (
    <div>
      <label>{props.name}</label>
      <input
        id={props.id}
        placeholder={props.placeholder || "Search"}
        className={`${classes[componentName]} ${props.className}`}
        value={props.value}
        onChange={props.onChange}
        type="text"
      />
    </div>
  );
};

const componentName = "Input";

export default Input;

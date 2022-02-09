import Button from "./button";
import classes from "./create-button.module.css";

const CreateButton = (props) => {
  return (
    <Button
      title={props.title}
      onClick={props.onClick}
      className={`${classes[componentName]} ${props.className}`}
    />
  );
};

const componentName = "CreateButton";

export default CreateButton;

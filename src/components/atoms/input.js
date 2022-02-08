import { useState } from "react";
import classes from "./input.module.css";

const Input = () => {
  const [text, setText] = useState("");
  return (
    <input
      className={classes[componentName]}
      value={text}
      onChange={(event) => setText(event.target.value)}
    />
  );
};

const componentName = "Input";

export default Input;

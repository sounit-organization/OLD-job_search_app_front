import { useState } from "react";
import Button from "../../atoms/button";
import Input from "../../atoms/input";
import classes from "./job-form.module.css";

const JobForm = () => {
  const [jobTitle, setJobTitle] = useState("");

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    await fetch(`${process.env.REACT_APP_BACKEND_URL}/jobs`, {
      method: "POST",
      body: JSON.stringify({ title: jobTitle }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <form className={classes[componentName]} onSubmit={formSubmitHandler}>
      <div className={classes[`${componentName}__control`]}>
        <label>Job Title</label>
        <Input value={jobTitle} onChange={setJobTitle} />
      </div>
      <Button title="Submit" />
    </form>
  );
};

const componentName = "JobForm";

export default JobForm;

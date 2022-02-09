import { useState } from "react";
import CreateButton from "../../atoms/create-button";
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
        <label className={classes[`${componentName}__label`]} htmlFor="title">
          Job Title
        </label>
        <Input
          id="title"
          placeholder="title"
          value={jobTitle}
          onChange={setJobTitle}
        />
      </div>

      <CreateButton
        title="Add New Job"
        className={classes[`${componentName}__button`]}
      />
    </form>
  );
};

const componentName = "JobForm";

export default JobForm;

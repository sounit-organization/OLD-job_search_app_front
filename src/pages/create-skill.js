import React, { useState } from "react";
import CreateButton from "../components/atoms/create-button";
import Input from "../components/atoms/input";
import classes from "./create-skill.module.css";

export const CreateSkill = () => {
  const [skillTitle, setSkillTitle] = useState("");

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    await fetch(`${process.env.REACT_APP_BACKEND_URL}/skills`, {
      method: "POST",
      body: JSON.stringify({ title: skillTitle }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className={classes[componentName]}>
      <h1>Create Skill</h1>

      <form onSubmit={formSubmitHandler}>
        <Input
          placeholder="skillname"
          className={classes[`${componentName}__input`]}
          value={skillTitle}
          onChange={setSkillTitle}
        />

        <CreateButton
          title="Add Skill"
          className={classes[`${componentName}__btn`]}
        />
      </form>
    </div>
  );
};

const componentName = "CreateSkill";

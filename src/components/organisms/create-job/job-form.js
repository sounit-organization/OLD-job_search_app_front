import { useEffect, useState } from "react";
import CreateButton from "../../atoms/create-button";
import Input from "../../atoms/input";
import classes from "./job-form.module.css";

const JobForm = () => {
  const [skillList, setSkillList] = useState([]);
  const [jobTitle, setJobTitle] = useState("");
  const [jobCity, setJobCity] = useState("");

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    await fetch(`${process.env.REACT_APP_BACKEND_URL}/jobs`, {
      method: "POST",
      body: JSON.stringify({ title: jobTitle, city: jobCity }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    const fetchSkillList = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/skills`
        );

        const responseData = await response.json();

        setSkillList(responseData.skills);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSkillList();
  }, []);

  const jobCityHandler = (event) => {
    setJobCity(event.target.value);
  };
  const jobTitleHandler = (event) => {
    setJobTitle(event.target.value);
  };

  return (
    <form className={classes[componentName]} onSubmit={formSubmitHandler}>
      <div className={classes[`${componentName}__control`]}>
        <Input
          name="Job Title"
          id="title"
          placeholder="title"
          value={jobTitle}
          onChange={jobTitleHandler}
        />
        <Input
          name="Job City"
          id="city"
          placeholder="city"
          value={jobCity}
          onChange={jobCityHandler}
        />
      </div>

      {skillList.map((skill) => (
        <div key={skill.id}>
          <input type={"checkbox"} value={skill.title} />
          <lable>{skill.title}</lable>
        </div>
      ))}

      <CreateButton
        title="Add New Job"
        className={classes[`${componentName}__button`]}
      />
    </form>
  );
};

const componentName = "JobForm";

export default JobForm;

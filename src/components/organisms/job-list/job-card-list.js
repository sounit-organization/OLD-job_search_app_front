import Input from "../../atoms/input";
import JobCard from "./job-card";
import classes from "./job-card-list.module.css";
<<<<<<< HEAD
import Input from "../../atoms/input";
=======
import { useState } from "react";
>>>>>>> af990a2d988c312afef840cbd7fb91b1c468744b

const componentName = "JobCardList";

const JobCardList = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
<<<<<<< HEAD
    <div>
      <div className={classes[componentName]}>
        <Input
          placeholder="Job title"
          className={classes[`${componentName}__input`]}
        />
        <Input
          placeholder="Vancouver, BC"
          className={classes[`${componentName}__input`]}
        />
      </div>
      <ul className={classes[`${componentName}__list`]}>
        {props.jobList.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            className={classes[`${componentName}__card`]}
          />
        ))}
      </ul>
=======
    <div className={classes[componentName]}>

      <input
        type="text"
        placeholder="Serch..."
        onChange={(event) => {
          setSearchTerm(event.target.value)
        }} />

      {props.jobList.filter((val) => {
        if (searchTerm == "") {
          return val;
        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }).map((job) => (
        <JobCard
          key={job.id}
          job={job}
          className={classes[`${componentName}__card`]}
        />
      ))}

>>>>>>> af990a2d988c312afef840cbd7fb91b1c468744b
    </div>
  );
};

export default JobCardList;

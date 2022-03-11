import Input from "../../atoms/input";
import JobCard from "./job-card";
import classes from "./job-card-list.module.css";
import { useState } from "react";

const componentName = "JobCardList";

const JobCardList = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div className={classes[componentName]}>
        <Input
          placeholder="Job title"
          className={classes[`${componentName}__input`]}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <Input
          placeholder="Vancouver, BC"
          className={classes[`${componentName}__input`]}
        />
      </div>
      <ul className={classes[`${componentName}__list`]}>
        {props.jobList
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((job) => (
            <JobCard
              key={job.id}
              job={job}
              className={classes[`${componentName}__card`]}
            />
          ))}
      </ul>
    </div>
  );
};

export default JobCardList;

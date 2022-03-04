import Input from "../../atoms/input";
import JobCard from "./job-card";
import classes from "./job-card-list.module.css";
import { useState } from "react";

const componentName = "JobCardList";

const JobCardList = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
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

    </div>
  );
};

export default JobCardList;

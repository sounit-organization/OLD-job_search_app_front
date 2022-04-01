import Input from "../../atoms/input";
import JobCard from "./job-card";
import classes from "./job-card-list.module.css";
import { useState } from "react";
import CheckBox from "../../molecules/check-box";

const componentName = "JobCardList";

const JobCardList = (props) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  const isFilteredJobsEmpty = filteredJobs.length === 0;

  const titleChangeHandler = (event) => {
    setSearchTitle(event.target.value);
  };

  const cityChangeHandler = (event) => {
    setSearchCity(event.target.value);
  };

  const filteredJobsHandler = (event) => {
    event.preventDefault();
    const filter = props.jobList.filter((job) => {
      // there is one record from before that we added city to the table so I added the condition of undefined
      if (job.city !== undefined) {
        if (searchCity !== "" && searchTitle !== "") {
          return (
            job.city.toLowerCase().includes(searchCity.trim().toLowerCase()) ||
            job.title.toLowerCase().includes(searchTitle.trim().toLowerCase())
          );
        }
        if (searchCity !== "") {
          return job.city
            .toLowerCase()
            .includes(searchCity.trim().toLowerCase());
        } else if (searchTitle !== "") {
          return job.title
            .toLowerCase()
            .includes(searchTitle.trim().toLowerCase());
        }
      }
    });
    setFilteredJobs(filter);
  };
  return (
    <div>
      <div className={classes[componentName]}>
        <Input
          placeholder="Job title"
          className={classes[`${componentName}__input`]}
          onChange={titleChangeHandler}
          value={searchTitle}
        />
        <Input
          placeholder="Vancouver, BC"
          className={classes[`${componentName}__input`]}
          onChange={cityChangeHandler}
          value={searchCity}
        />
        <button onClick={filteredJobsHandler}>Search</button>
      </div>
      <CheckBox />
      <ul className={classes[`${componentName}__list`]}>
        {!isFilteredJobsEmpty
          ? filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                className={classes[`${componentName}__card`]}
              />
            ))
          : props.jobList.map((job) => (
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

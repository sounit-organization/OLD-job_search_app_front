import JobCard from "./job-card";
import classes from "./job-card-list.module.css";
import Input from "../../atoms/input";

const componentName = "JobCardList";

const JobCardList = (props) => {
  return (
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
    </div>
  );
};

export default JobCardList;

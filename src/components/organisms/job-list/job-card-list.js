import JobCard from "./job-card";
import classes from "./job-card-list.module.css";

const componentName = "JobCardList";

const JobCardList = (props) => {
  return (
    <div className={classes[componentName]}>
      {props.jobList.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobCardList;

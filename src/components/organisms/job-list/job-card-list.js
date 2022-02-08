import Card from "../../atoms/card";
import classes from "./job-card-list.module.css";

const componentName = "JobCardList";

const JobCardList = (props) => {
  return (
    <div className={classes[componentName]}>
      {props.jobList.map((job) => (
        <Card key={job.id}>
          <div>{job.title}</div>
        </Card>
      ))}
    </div>
  );
};

export default JobCardList;

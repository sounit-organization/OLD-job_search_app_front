import JobForm from "../components/organisms/create-job/job-form";
import classes from "./create-job.module.css";

const CreateJob = () => {
  return (
    <div className={classes[componentName]}>
      <JobForm className={classes[`${componentName}__form`]} />
    </div>
  );
};

const componentName = "CreateJob";

export default CreateJob;

import JobForm from "../components/organisms/create-job/job-form";
import Header from "../components/organisms/shared/header";
import classes from "./create-job.module.css";

const CreateJob = () => {
  return (
    <div className={classes[componentName]}>
      <Header />
      <JobForm />
    </div>
  );
};

const componentName = "CreateJob";

export default CreateJob;

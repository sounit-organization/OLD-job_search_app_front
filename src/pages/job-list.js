import JobCardList from "../components/organisms/job-list/job-card-list";
import JobSearch from "../components/organisms/job-list/job-search";
import Header from "../components/organisms/shared/header";
import classes from "./job-list.module.css";

const JobList = () => {
  const dataList = [
    { id: 1, title: "React Frontend Developer", skills: ["React", "Mongodb"] },
    { id: 2, title: "Node Backend Developer", skills: ["Node.js"] },
  ];

  return (
    <div className={classes[componentName]}>
      <Header />
      <JobSearch />
      <JobCardList jobList={dataList} />
    </div>
  );
};

const componentName = "JobList";

export default JobList;

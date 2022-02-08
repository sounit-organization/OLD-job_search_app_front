import JobCardList from "../components/organisms/job-list/job-card-list";
import JobSearch from "../components/organisms/job-list/job-search";
import Header from "../components/organisms/shared/header";
import classes from "./job-list.module.css";

const JobList = () => {
  const dataList = [
    {
      id: "j1",
      title: "React Frontend Developer",
      skills: [
        { id: "s1", title: "React" },
        { id: "s2", title: "MySQL" },
      ],
    },
    {
      id: "j2",
      title: "Node Backend Developer",
      skills: [{ id: "s3", title: "Node" }],
    },
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

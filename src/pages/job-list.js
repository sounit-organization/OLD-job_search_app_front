import { Fragment } from "react";
import JobCardList from "../components/organisms/job-list/job-card-list";
import JobSearch from "../components/organisms/job-list/job-search";

const JobList = () => {
  const dataList = [
    { id: 1, title: "React Frontend Developer" },
    { id: 2, title: "Node Backend Developer" },
  ];

  return (
    <Fragment>
      <JobSearch />
      <JobCardList jobList={dataList} />
    </Fragment>
  );
};

export default JobList;

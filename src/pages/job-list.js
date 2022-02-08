import JobCardList from "../components/organisms/job-list/job-card-list";

const JobList = () => {
  const dataList = [
    { id: 1, title: "React Frontend Developer" },
    { id: 2, title: "Node Backend Developer" },
  ];

  return <JobCardList jobList={dataList} />;
};

export default JobList;

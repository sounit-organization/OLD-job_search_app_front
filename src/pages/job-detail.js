import JobDetailItem from "../components/organisms/job-detail/job-detail-item";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DUMMIDATA = [];

const JobDetail = () => {
  const [jobDetailList, setJobDetailList] = useState([]);
  const params = useParams();
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/jobs/${params.jobId}`
          // `${process.env.REACT_APP_BACKEND_URL}/jobs`
        );
        const data = await response.json();
        console.log(data.job);

        if (!response.ok) {
          throw new Error("something went wrong!!");
        }

        setJobDetailList(data.job);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchJobDetails();
  }, []);

  return <JobDetailItem jobDetailList={jobDetailList} />;
  // return <JobDetailList jobDetailList={DUMMIDATA} />;
};
export default JobDetail;

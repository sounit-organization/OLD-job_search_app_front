import Card from "../../atoms/card";
import classes from "./job-card.module.css";
import { Link } from "react-router-dom";
import Input from "../../atoms/input";

const JobCard = (props) => {
  return (
    <Link
      to={`/jobs/detail/${props.job.id}`}
      className={classes["JobCard__link"]}
    >
      <Card className={`${classes[componentName]} ${props.className}`}>
        <h2 className={classes["JobCard__title"]}>{props.job.title}</h2>
        <div>
          {props.job.skills.map((skill) => (
            <div key={skill.id}>{skill.title}</div>
          ))}
        </div>
      </Card>
    </Link>
  );
};

const componentName = "JobCard";

export default JobCard;

import Card from "../../atoms/card";
import classes from "./job-card.module.css";
import LikeButton from "../../atoms/like-button";

const JobCard = (props) => {
  return (
    <Card className={classes[componentName]}>
      <h2 className={`${classes[componentName]}__title`}>{props.job.title}</h2>
      <div>
        {props.job.skills.map((skill) => (
          <div key={skill.id}>{skill.title}</div>
        ))}
      </div>
      <LikeButton title="Like" />
    </Card>
  );
};

const componentName = "JobCard";

export default JobCard;

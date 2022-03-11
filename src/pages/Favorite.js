import { useSelector } from "react-redux";
import Card from "../components/atoms/card";
import classes from "./favorite.module.css";

const Favorite = () => {
  const favJobs = useSelector((state) => state.user.favoriteJobs);
  const favoriteJobs = Object.values(favJobs);

  return (
    <div className={classes.favorite__container}>
      {favoriteJobs.map((job) => (
        <Card className={classes.favorite__card}>
          <h2>{job.title}</h2>
        </Card>
      ))}
    </div>
  );
};

export default Favorite;

import { useSelector } from "react-redux";

const ShowFavIcon = () => {
  const favoriteJobs = useSelector((state) => state.user.favoriteJobs);

  const getFavJobsCount = () => {
    let count = 0;
    for (let key in favoriteJobs) {
      count++;
    }
    return count;
  };
  return <div>Favorite {getFavJobsCount()}</div>;
};

export default ShowFavIcon;

import { useSelector } from "react-redux";

const ShowFavIcon = () => {
  const favoriteJobs = useSelector((state) => state.user.favoriteJobs);

  const getFavJobsCount = () => {
    return Object.keys(favoriteJobs).length;
  };

  return <div>Favorite {getFavJobsCount()}</div>;
};

export default ShowFavIcon;

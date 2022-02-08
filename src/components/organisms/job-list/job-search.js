import SearchBar from "../../molecules/search-bar";
import classes from "./job-search.module.css";

const componentName = "JobSearch";

const JobSearch = () => {
  return (
    <div className={classes[componentName]}>
      <SearchBar />
    </div>
  );
};

export default JobSearch;

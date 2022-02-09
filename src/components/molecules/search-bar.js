import Input from "../atoms/input";
import classes from "./search-bar.module.css";

const SearchBar = () => {
  return (
    <div className={classes[componentName]}>
      <div className={classes[`${componentName}__input-wrap`]}>
        <Input placeholder="Search Jobs" />
      </div>
    </div>
  );
};

const componentName = "SearchBar";

export default SearchBar;

import Button from "../atoms/button";
import Input from "../atoms/input";
import classes from "./search-bar.module.css";

const SearchBar = () => {
  return (
    <div className={classes[componentName]}>
      <div className={classes[`${componentName}__input-wrap`]}>
        <Input />
      </div>
      <div className={classes[`${componentName}__button-wrap`]}>
        <Button title="Search" />
      </div>
    </div>
  );
};

const componentName = "SearchBar";

export default SearchBar;

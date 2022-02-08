import NavItems from "../../molecules/nav-items";
import classes from "./header.module.css";

const Header = () => {
  const navItems = [
    { id: "n1", title: "Job List", to: "/" },
    { id: "n2", title: "Add new job", to: "/jobs/new" },
  ];

  return (
    <header className={classes[componentName]}>
      <h1>Job Search</h1>
      <div className={classes[`${componentName}__nav-items`]}>
        <NavItems items={navItems} />
      </div>
    </header>
  );
};

const componentName = "Header";

export default Header;

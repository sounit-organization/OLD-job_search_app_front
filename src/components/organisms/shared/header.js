import { Link } from "react-router-dom";
import NavItems from "../../molecules/nav-items";
import classes from "./header.module.css";

const Header = () => {
  const navItems = [
    { id: "n1", title: "Find jobs", to: "/" },
    { id: "n2", title: "Add Job", to: "/jobs/new" },
    { id: "n3", title: "Add Skill", to: "/skills/new" },
  ];

  return (
    <header className={classes[componentName]}>
      <Link to="/" className={classes[`${componentName}__logo-link`]}>
        <h1 className={classes[`${componentName}__logo-text`]}>Job Search</h1>
      </Link>
<<<<<<< HEAD
=======
      {/* <Input className={classes[`${componentName}__input`]} /> */}
>>>>>>> af990a2d988c312afef840cbd7fb91b1c468744b
      <div className={classes[`${componentName}__nav-items`]}>
        <NavItems items={navItems} />
      </div>
    </header>
  );
};

const componentName = "Header";

export default Header;

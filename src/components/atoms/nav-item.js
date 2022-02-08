import { NavLink } from "react-router-dom";
import classes from "./nav-item.module.css";

const NavItem = (props) => {
  return (
    <NavLink
      key={props.item.id}
      to={props.item.to}
      className={classes[componentName]}
    >
      {props.item.title}
    </NavLink>
  );
};

const componentName = "NavItem";

export default NavItem;

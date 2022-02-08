import { Fragment } from "react";
import { useSelector } from "react-redux";
import NavItem from "../atoms/nav-item";

const NavItems = (props) => {
  const favoriteJobs = useSelector((state) => state.user.favoriteJobs);
  console.log(favoriteJobs);

  return (
    <Fragment>
      {props.items.map((item) => (
        <NavItem key={item.id} item={item} />
      ))}
      <div>Favorite {favoriteJobs.length}</div>
    </Fragment>
  );
};

export default NavItems;

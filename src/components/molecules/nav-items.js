import { Fragment } from "react";
import NavItem from "../atoms/nav-item";
import ShowFavIcon from "../atoms/show-fav-icon";

const NavItems = (props) => {
  return (
    <Fragment>
      {props.items.map((item) => (
        <NavItem key={item.id} item={item} />
      ))}
      <ShowFavIcon />
    </Fragment>
  );
};

export default NavItems;

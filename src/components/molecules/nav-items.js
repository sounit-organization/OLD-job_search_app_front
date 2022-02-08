import NavItem from "../atoms/nav-item";

const NavItems = (props) => {
  return props.items.map((item) => <NavItem key={item.id} item={item} />);
};

export default NavItems;

import { menuItems } from "./items";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Menu = () => {
	const currentUser = useSelector((state) => state.user.currentUser);
	const getPrivateMenuItems = (item) => {
		if (currentUser) {
			return item;
		} else {
			return item.privat == false;
		}
	};
	return (
		<div className="menuSection">
			{menuItems
				.filter((item) => getPrivateMenuItems(item))
				.map(({ title, classname, route }, index) => (
					<NavLink
						key={index}
						to={route}
						className={classname}
					>
						{title}
					</NavLink>
				))}
		</div>
	);
};

export default Menu;

import { menuItems } from "./items";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Menu = () => {
	const [onHamburger, setHamburger] = useState(false);
	const toggleHamburger = () => {
		setHamburger(!onHamburger);
	};

	const currentUser = useSelector((state) => state.user.currentUser);
	const getPrivateMenuItems = (item) => {
		if (currentUser) {
			return item;
		} else {
			return item.privat == false;
		}
	};
	return (
		<div>
			<div
				onClick={() => toggleHamburger()}
				className={onHamburger ? "menuWrap" : null}
			>
				<div className={onHamburger ? "menuSection showMenu" : "menuSection"}>
					{menuItems
						.filter((item) => getPrivateMenuItems(item))
						.map(({ title, classname, route }, index) => (
							<NavLink
								key={index}
								to={route}
								className={classname}
								onClick={() => setHamburger(false)}
							>
								{title}
							</NavLink>
						))}
				</div>
				<button
					onClick={() => toggleHamburger()}
					className="hamburger"
				>
					{onHamburger ? (
						<i className=" material-icons md-24">close</i>
					) : (
						<i className=" material-icons md-24">menu</i>
					)}
				</button>
			</div>
		</div>
	);
};

export default Menu;

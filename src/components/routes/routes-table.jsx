import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { menuItems } from "../menu/items";
import { Profile, PageNotFound } from "../pages";
import PropTypes from "prop-types";

const RoutesTable = () => {
	const currentUser = useSelector((state) => state.user.currentUser);

	const PrivateRoute = ({ element, logged }) => {
		return logged ? element : <PageNotFound />;
	};

	return (
		<Routes>
			{menuItems.map(({ route, page, privat }, index) => {
				if (privat) {
					return (
						<Route
							key={index}
							path={route}
							element={
								<PrivateRoute
									element={page()}
									logged={currentUser}
								/>
							}
						/>
					);
				} else {
					return (
						<Route
							key={index}
							path={route}
							element={page()}
						/>
					);
				}
			})}

			<Route
				path="/profile"
				element={
					<PrivateRoute
						element={<Profile />}
						logged={currentUser}
					/>
				}
			/>
		</Routes>
	);
};

RoutesTable.propTypes = {
	element: PropTypes.string,
	logged: PropTypes.object,
};

export default RoutesTable;

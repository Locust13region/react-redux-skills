import ModalLogin from "../modal/modal-login";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUser } from "../store/user-slice";
import { useEffect } from "react";
import { setToken } from "../store/token-slice";

const User = () => {
	const [showModal, setShowModal] = useState(false);
	const dispatch = useDispatch();

	const localToken = localStorage.getItem("_rrs_token");
	const token = useSelector((state) => state.token.token);

	useEffect(() => {
		if (localToken) {
			if (token) {
				dispatch(getUser(token));
			} else {
				dispatch(setToken(localToken));
			}
		}
	}, [dispatch, token, localToken]);

	const currentUser = useSelector((state) => state.user.currentUser);

	const user = currentUser ? (
		<NavLink
			to="/profile"
			className="loggedIn"
		>
			{currentUser.name[0]}
		</NavLink>
	) : (
		<div
			onClick={() => {
				setShowModal(true);
			}}
		>
			Login
		</div>
	);

	return (
		<>
			<div className="menuSection">{user}</div>
			<ModalLogin
				showModal={showModal}
				setShowModal={setShowModal}
			/>
		</>
	);
};

export default User;

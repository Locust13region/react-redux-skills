import { useSelector, useDispatch } from "react-redux";
import { clearCurrentUser } from "../store/user-slice";
import { clearToken } from "../store/token-slice";
import { useNavigate } from "react-router-dom";
import "./pages.css";

const Profile = () => {
	const currentUser = useSelector((state) => state.user.currentUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onLogoff = () => {
		localStorage.removeItem("_rrs_token");
		dispatch(clearCurrentUser());
		dispatch(clearToken());
		navigate("/");
	};

	return (
		<div className="profile">
			<label>User ID: {currentUser._id}</label>
			<label>User name: {currentUser.name}</label>
			<label>User email: {currentUser.email}</label>
			<button onClick={onLogoff}>Logoff</button>
		</div>
	);
};

export default Profile;

import { createPortal } from "react-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../store/token-slice";
import PropTypes from "prop-types";
import "./modal-login.css";
import { useNavigate } from "react-router-dom";
import { tokenRequest } from "../api/request";

const ModalLogin = ({ showModal, setShowModal }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [user, setUser] = useState({
		_id: "",
		__v: 0,
		name: "AndyMas",
		email: "andy.mas@gmail.com",
		password: "passmaster",
	});
	const [isLoginChecked, setLoginChecked] = useState(true);
	const [modalMessage, setModalMessage] = useState("");

	if (!showModal) {
		return null;
	}

	const onSubmit = async () => {
		try {
			const resultToken = await tokenRequest(isLoginChecked, user);

			dispatch(setToken(resultToken));

			setModalMessage("");
			setShowModal(false);
			navigate("/profile");
		} catch (error) {
			console.log("error", error.message);
			setModalMessage(error.message);
		}
	};
	return (
		<>
			{createPortal(
				<div
					className="modalWrap"
					onClick={() => {
						setModalMessage("");
						setShowModal(false);
						setLoginChecked(true);
					}}
				>
					<div
						className="modal"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="modalSwitch">
							<input
								type="radio"
								name="switch"
								id="login"
								defaultChecked
							/>
							<input
								type="radio"
								name="switch"
								id="signup"
							/>
							<label
								htmlFor="login"
								className="switch login"
								onClick={() => {
									setLoginChecked(true);
									setModalMessage("");
								}}
							>
								Login
							</label>
							<label
								htmlFor="signup"
								className="switch signup"
								onClick={() => {
									setLoginChecked(false);
									setModalMessage("");
								}}
							>
								Signup
							</label>
							<div className="switchSelector"></div>
						</div>
						<div className="modalContent">
							<form>
								<div className={isLoginChecked ? "invisible" : null}>
									<input
										value={user.name}
										type="text"
										placeholder="Name"
										autoComplete="username"
										required
										onChange={(e) => setUser({ ...user, name: e.target.value })}
									/>
								</div>
								<div>
									<input
										value={user.email}
										type="text"
										placeholder="Email Address"
										autoComplete="email"
										onChange={(e) =>
											setUser({ ...user, email: e.target.value })
										}
									/>
								</div>
								<div>
									<input
										value={user.password}
										type="password"
										placeholder="Password"
										autoComplete={
											isLoginChecked ? "current-password" : "new-password"
										}
										required
										onChange={(e) =>
											setUser({ ...user, password: e.target.value })
										}
									/>
								</div>
							</form>
						</div>

						<div className="modalMessage">{modalMessage}</div>
						<div>
							<button
								onClick={() => {
									onSubmit();
								}}
							>
								Ok
							</button>
							<button
								onClick={() => {
									setShowModal(false);
									setModalMessage("");
									setLoginChecked(true);
								}}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>,
				document.body
			)}
		</>
	);
};

ModalLogin.propTypes = {
	showModal: PropTypes.bool,
	setShowModal: PropTypes.func,
};

export default ModalLogin;

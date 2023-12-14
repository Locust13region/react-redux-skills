import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token: "",
};

export const tokenSlice = createSlice({
	name: "userToken",
	initialState,
	reducers: {
		setToken: (state, action) => {
			state.token = action.payload;
			localStorage.setItem("_rrs_token", action.payload);
		},
		clearToken: (state) => {
			state.token = "";
		},
	},
});

export const { setToken, clearToken } = tokenSlice.actions;
export default tokenSlice.reducer;

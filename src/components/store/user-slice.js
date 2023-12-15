import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userRequest } from "../api/request";

export const getUser = createAsyncThunk(
	"currentUser/getUser",
	async (_, { rejectWithValue, getState }) => {
		const token = getState().token.token;
		try {
			return await userRequest(token);
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const initialState = {
	currentUser: "",
};

export const userSlice = createSlice({
	name: "currentUser",
	initialState,
	reducers: {
		setCurrentUser: (state, action) => {
			state.currentUser = action.payload;
		},
		clearCurrentUser: (state) => {
			state.currentUser = "";
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getUser.fulfilled, (state, action) => {
				state.currentUser = action.payload;
			})
			.addCase(getUser.rejected, (state, action) => {
				console.log(action.error.message);
			});
	},
});

export const { setCurrentUser, clearCurrentUser } = userSlice.actions;
export default userSlice.reducer;

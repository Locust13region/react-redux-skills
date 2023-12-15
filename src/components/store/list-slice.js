import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { listRequest } from "../api/request";

export const getList = createAsyncThunk(
	"list/getList",
	async (section, { rejectWithValue }) => {
		try {
			return await listRequest(section);
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const initialState = {
	listItems: [],
	loading: true,
	error: null,
};

const listSlice = createSlice({
	name: "list",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getList.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getList.fulfilled, (state, action) => {
				state.listItems = action.payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(getList.rejected, (state, action) => {
				console.log(action.payload);
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export default listSlice.reducer;

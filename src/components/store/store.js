import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";
import tokenReducer from "./token-slice";
import listReducer from "./list-slice";

export const store = configureStore({
	reducer: {
		user: userReducer,
		token: tokenReducer,
		list: listReducer,
	},
});

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";
import tokenReducer from "./token-slice";

export const store = configureStore({
	reducer: {
		user: userReducer,
		token: tokenReducer,
	},
});

import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import loadingReducer from "./slices/loadingSlice";
import postsReducer from "./slices/postSlice";

export const makeStore = () =>
	configureStore({
		reducer: {
			loading: loadingReducer,
			posts: postsReducer,
		},
	});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<ReturnType<typeof makeStore>["getState"]>;

export const wrapper = createWrapper<AppStore>(makeStore);

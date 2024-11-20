// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import loadingReducer from "./slices/loadingSlice";

export const makeStore = () =>
	configureStore({
		reducer: {
			loading: loadingReducer,
		},
	});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore);

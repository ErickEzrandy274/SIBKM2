import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import productsReducer from "../slice/productSlice";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	products: productsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () =>
	configureStore({
		reducer: persistedReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				},
			}),
		devTools: true,
	});

const persistor = persistStore(makeStore());
export { makeStore, persistor };

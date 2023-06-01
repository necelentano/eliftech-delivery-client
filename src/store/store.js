import { configureStore, combineReducers } from "@reduxjs/toolkit";

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
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { shopsApi } from "./shopsApi";
import { customerApi } from "./customerApi";
import { orderApi } from "./orderApi";
import cartReducer from "./cartSlice";
import formSlice from "./formSlice";

const rootReducer = combineReducers({
  [shopsApi.reducerPath]: shopsApi.reducer,
  [customerApi.reducerPath]: customerApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
  cart: cartReducer,
  form: formSlice,
});

export const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(shopsApi.middleware)
      .concat(customerApi.middleware)
      .concat(orderApi.middleware),
});

export const persistor = persistStore(store);

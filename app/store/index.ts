import { configureStore } from '@reduxjs/toolkit';
import { setAutoFreeze } from 'immer';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { api } from '~services/index';
import storage from '~store/storage';

setAutoFreeze(false);

const combinedReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'auth/logout') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
});

export default store;
export type IRootState = ReturnType<typeof rootReducer>;

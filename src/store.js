import { createStore, applyMiddleware, compose } from "redux";

//rootReducer file
import rootReducer from "./reducers/rootReducer";

//persist
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

//redux-thunk
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

//with redux-thunk
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//without redux-thunk
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

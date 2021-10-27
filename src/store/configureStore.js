import {createStore,  applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducer/RootReducer';
// import {composeWithDevTools} from 'redux-devtools-extension';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
  return createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
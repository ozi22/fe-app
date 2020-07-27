import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import UIDuck from './ui/ui.duck';
import PostsDuck from './posts/posts.duck';

const combineDucks = (...ducks: any): any =>
  combineReducers(
    ducks.reduce((root: any, duck: any) => {
      return { ...root, [duck.name]: duck.reducer };
    }, {})
  );

const rootReducer: any = combineDucks(UIDuck, PostsDuck);

export const initializeStore = (initialState: any = {}) =>
  createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(reduxThunk)));

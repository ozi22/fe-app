import { createActionTypes } from '../create-action-types';
import { IAction } from '../redux.interface';
import { GetAllPostResponse, IGetPostResponse } from '../../services/posts/posts.interface';

const POSTS: any = {
  name: 'POSTS'
};

const initialState: any = {
  allPosts: null,
  selectedPost: null
};

const actionTypes = createActionTypes(
  {
    set_all_posts: 'set_all_posts',
    set_selected_post: 'set_selected_post'
  },
  POSTS.name
);

POSTS.reducer = (state: any = initialState, action: IAction): any => {
  switch (action.type) {
    case actionTypes.set_all_posts:
      return {
        ...state,
        allPosts: action.payload
      };
    case actionTypes.set_selected_post:
      return {
        ...state,
        selectedPost: action.payload
      };
    default:
      return state;
  }
};

POSTS.setAllPosts = (posts: GetAllPostResponse): IAction<any> => {
  return {
    type: actionTypes.set_all_posts,
    payload: posts
  };
};

POSTS.setSelectedPost = (post: IGetPostResponse): IAction<any> => {
  return {
    type: actionTypes.set_selected_post,
    payload: post
  };
};

POSTS.getOwnState = (state: any): any => state[POSTS.name] || initialState;
POSTS.getAllPosts = (state: any): GetAllPostResponse => POSTS.getOwnState(state).allPosts;
POSTS.getSelectedPost = (state: any): IGetPostResponse => POSTS.getOwnState(state).selectedPost;

const PostsDuck: any = POSTS;
export default PostsDuck;

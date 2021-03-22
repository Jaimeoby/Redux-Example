// actions are dispatched here where they are handled by reducers
import {
  FETCH_POSTS,
  NEW_POST,
  ADD_POST_TO_LIST,
} from "../actions/actionTypes";

const initialState = {
  posts: [],
  post: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case NEW_POST: {
      return {
        ...state,
        post: action.payload,
      };
    }
    case ADD_POST_TO_LIST: {
      return { ...state, posts: action.payload };
    }
    default:
      return state;
  }
};

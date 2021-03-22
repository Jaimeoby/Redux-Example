// intended action against the store that is sent to reducers using dispatch method
// dispatch is similar to resolve in promises
import { FETCH_POSTS, NEW_POST, ADD_POST_TO_LIST } from "./actionTypes";

// upcoming syntax is short hand for:
// export function () {
//     return function (dispatch){
//
//     }
// }
export const fetchPost = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: FETCH_POSTS,
        payload: data,
      })
    );
};

export const newPost = (postData) => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: { "content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((post) =>
      dispatch({
        type: NEW_POST,
        payload: post,
      })
    );
};

export const addPost = (post, posts) => (dispatch) => {
  posts.unshift(post);
  dispatch({
    type: ADD_POST_TO_LIST,
    payload: posts,
  });
};

import React, { useEffect, useRef } from "react";
import Post from "./Post";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPost, addPost } from "../actions/postAction";
const Posts = (props) => {
  // useEffect is used to access component lifecyle
  //second parameter options:
  // 1. no array (no second paremeter), updates on initial render and whenever ANY state changes and unmounts
  // 2. empty array, updates once on initial render and unmount
  // 3. array with specified state, updates whenever specified state changes and unmounts

  const { newPost, fetchPost, posts, addPost } = props; //destructured props
  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    props.addPost(newPost, posts);
  }, [newPost, addPost]);

  return (
    <div>
      {posts.map((post) => {
        return <Post key={post.id} title={post.title} body={post.body} />;
      })}
    </div>
  );
};

// explicit type check
Posts.propType = {
  posts: PropTypes.array.isRequired,
  fetchPost: PropTypes.func.isRequired,
  addPost: PropTypes.func.isRequired,
  newPost: PropTypes.object,
};

// mapst state from the store (provided by provider component) to THIS component's properties
const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  newPost: state.posts.post,
  // first posts ( posts: ) is adding that property to current component
  // second posts (state.posts) is from root reducer (what we set our postReducer to in index.js inside reducers folder)
  // last posts (state.posts.posts) is the actual property we want out of the store
});

// double parenthesis is due to connect() returning a function
// could also be written as:
// const decorate = connect(null, {fetchPost});
// const decoratedComponent = decorate(Posts);
// export default decoratedComponent;
// connect essentially turns a plain component into a more
// fleshed out component with properties derived from the store
export default connect(mapStateToProps, { addPost, fetchPost })(Posts);

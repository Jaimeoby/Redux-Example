import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { newPost } from "../actions/postAction";
const PostForm = (props) => {
  const initialState = { title: "", body: "" };
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const post = {
      title: state.body,
      body: state.title,
    };
    props.newPost(post);
    setState(initialState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          <h2>Title</h2>
        </label>
        <input
          onChange={handleChange}
          id="title"
          name="title"
          type="text"
          value={state.title}
        ></input>
        <label htmlFor="body">
          <h2>Body</h2>
        </label>
        <textarea
          id="body"
          onChange={handleChange}
          name="body"
          value={state.body}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

PostForm.propType = { newPost: PropTypes.func.isRequired };
export default connect(null, { newPost })(PostForm);

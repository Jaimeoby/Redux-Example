import React from "react";

export default function Post(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  );
}

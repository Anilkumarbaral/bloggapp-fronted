import React from 'react'

import { useParams } from "react-router-dom";

function PostDetail() {
  const { id } = useParams();
  // Dummy post for now
  const post = { id, title: "Sample Post", content: "Full post content goes here." };

  return (
    <div className="container">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function PostDetail() {
  const { id } = useParams();
  // Find the post in Redux store
  const posts = useSelector((state) => state.post.content || []);
  const post = posts.find((p) => String(p.id) === id);

  if (!post) return <div className="container">Post not found.</div>;

  return (
    <div className="container mt-4">
      <h2>{post.title}</h2>
      <p>
        <strong>Excerpt:</strong> {post.excerpt}
      </p>
      <p>
        <strong>Content:</strong>
      </p>
      <div>{post.content}</div>
      {post.featuredImage && (
        <div className="mb-3">
          <img
            src={post.featuredImage}
            alt="Featured"
            style={{ maxWidth: "100%" }}
          />
        </div>
      )}
      <p>
        <strong>Category ID:</strong> {post.categoryId}
      </p>
      <p>
        <strong>Author ID:</strong> {post.authorId}
      </p>
    </div>
  );
}

export default PostDetail;

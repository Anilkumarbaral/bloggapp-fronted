import React, { useState } from "react";
import axios from "axios";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      // Replace with your actual authorId logic
      const authorId = 1;
      const token = localStorage.getItem("token");
      await axios.post(
        `http://51.20.105.48:8080/api/posts?authorId=${authorId}`,
        {
          title,
          excerpt,
          content,
          featuredImage,
          categoryId: Number(categoryId),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setMessage("Post created successfully!");
      setTitle("");
      setExcerpt("");
      setContent("");
      setFeaturedImage("");
      setCategoryId("");
    } catch (err) {
      setError("Failed to create post");
      console.error(err);
    }
  };

  return (
    <div className="container " style={{ maxWidth: 600 }}>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="mb-3">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Excerpt</label>
          <input
            type="text"
            className="form-control"
            required
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Content</label>
          <textarea
            className="form-control"
            rows="6"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label>Featured Image URL</label>
          <input
            type="text"
            className="form-control"
            value={featuredImage}
            onChange={(e) => setFeaturedImage(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Category</label>
          <select
            className="form-control"
            required
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="1">Java</option>
            <option value="2">Python</option>
            <option value="3">Random</option>
            <option value="4">Spring Boot</option>
            <option value="6">Hibernate/JPA</option>
            <option value="7">Security</option>
          </select>
        </div>
        <button className="btn btn-primary">Publish</button>
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={() => {
            window.location.href = "/posts"; // Redirect to the post list page
          }}
        >
          See Posts
        </button>
      </form>
    </div>
  );
}

export default CreatePost;

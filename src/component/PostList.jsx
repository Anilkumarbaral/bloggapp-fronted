import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { postAction } from "./redux/action/postAction";
import { Link } from "react-router-dom";

function PostList() {
  const dispatch = useDispatch();
  // Get posts array from Redux store
  const posts = useSelector((state) => state.post.content || []);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPublishedPosts = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("You must be logged in to view posts.");
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get(
          "http://51.20.105.48:8080/api/posts/published?page=0&size=10",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(postAction({ content: response.data.content })); // Store only the content array
        setLoading(false);
      } catch (err) {
        if (err.response?.status === 401 || err.response?.status === 403) {
          window.location.href = "/login";
        } else {
          setError("Failed to load posts. Please try again later.");
          setLoading(false);
          console.error("API Error:", err);
        }
      }
    };

    if (!posts.length) {
      fetchPublishedPosts();
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Published Posts</h2>
      <div className="row">
        {posts.length === 0 ? (
          <p>No posts published yet.</p>
        ) : (
          posts.map((post) => (
            <div className="col-md-6 mb-3" key={post.id}>
              <div className="card h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text flex-grow-1">
                    {post.summary || post.excerpt || post.description || ""}
                  </p>
                  <Link
                    to={`/post/${post.id}`}
                    className="btn btn-primary mt-auto"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PostList;
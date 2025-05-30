import React, { useEffect, useState } from "react";
import axios from "axios";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPublishedPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/posts/published?page=0&size=10",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
             
            },
          }
        );
        setPosts(response.data.content); // Assuming response is a PagedResponse object
        setLoading(false);
      } catch (err) {
        setError("Failed to load posts");
        setLoading(false);
        console.log(err);
      }
    };

    fetchPublishedPosts();
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h2>Published Posts</h2>
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-6 mb-3" key={post.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">
                  {post.summary || post.excerpt || post.description || ""}
                </p>
                <a href={`/post/${post.id}`} className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostList;

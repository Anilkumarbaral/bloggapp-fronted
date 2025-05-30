import Login from "./component/Login";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import CreatePost from "./component/CreatePost";
import Register from "./component/Register";
import PostList from "./component/PostList";
import PostDetail from "./component/PostDetail";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/posts" element={<PostList />} />
        {/* Add more routes as needed */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;

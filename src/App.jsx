import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AllBlogs from "./blogs/AllBlogs";
import BlogForm from "./blogs/BlogForm";
import LoginForm from "./forms/LoginForm";
import SignUpForm from "./forms/SignUpForm";
import Dashboard from "./admin/Dashboard";

import { logout } from "./actions/authActions";

function App() {
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const blogs = [
    {
      title: "The Future of Web Design: Trends You Can't Afford to Miss in 2024",
      description: "This is a description that needs to be done on the time of cake.",
      id: 1,
    },
    {
      title: "Unlocking Success: Proven Strategies to Boost Your Online Presence",
      description: "This is a description that needs to be done on the time of cake.",
      id: 2,
    },
    {
      title: "Mastering Content Marketing: Tips to Skyrocket Your Traffic",
      description: "This is a description that needs to be done on the time of cake.",
      id: 3,
    },
    {
      title: "10 Essential Tools Every Digital Entrepreneur Should Know About",
      description: "This is a description that needs to be done on the time of cake.",
      id: 4,
    },
  ];

  function handleLogout(e) {
    e.preventDefault();
    dispatch(logout());
  }

  function handleFormVisibility() {
    setIsFormVisible(!isFormVisible);
  }

  return (
    <Router>
      {/* Navigation Bar */}
      <NavBar handleFormVisibility={handleFormVisibility} isFormVisible={isFormVisible} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={ <AllBlogs blogs={blogs} /> } />
        <Route path="/dashboard/*" element={isUserLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/new-blog" element={isUserLoggedIn ? <BlogForm /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;

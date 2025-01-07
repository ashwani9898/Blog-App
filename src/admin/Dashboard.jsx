import { Routes, Route, NavLink } from "react-router-dom";
import MyBlogs from "./components/MyBlogs";
import MyProfile from "./components/MyProfile";

function Dashboard() {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/12 bg-black text-white p-4 md:h-full">
        <ul className="flex-row flex md:flex-col gap-4">
          <li>
            <NavLink
              to="/dashboard/myblogs"
              className={({ isActive }) =>
                `block ${
                  isActive
                    ? "font-small text-blue-600 dark:text-blue-500 hover:underline"
                    : "bg-gray-900"
                }`
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myprofile"
              className={({ isActive }) =>
                `block ${isActive ? "font-small text-blue-600 dark:text-blue-500 hover:underline" : "bg-gray-900"}`
              }
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="w-full md:w-11/12 p-1 h-full">
        <Routes>
          <Route path="myblogs" element={<MyBlogs />} />
          <Route path="myprofile" element={<MyProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;

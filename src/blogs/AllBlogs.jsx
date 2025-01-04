import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logout } from "../actions/authActions";
import { BLOGS_API } from "../../env";
function AllBlogs() {
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState([]); // For storing fetched blogs
  const [error, setError] = useState(null); // For storing error messages
  const [loading, setLoading] = useState(true); // For tracking loading state

  useEffect(() => {
    const fetchBlogs = async function () {
      const token = localStorage.getItem("auth")
      try {
        setLoading(true); // Start loading
        const response = await axios.get(BLOGS_API,{ headers:{
            'Authorization': token,
            'Content-Type': 'application/json', // Optional, depending on your API requirements
          }});
        setBlogs(response.data); // Save blogs data
        console.log(response.data);
      } catch (err) {
        // Handle error
        console.error("Error fetching blogs:", err);
        setError(err.message || "An unexpected error occurred.");
        dispatch(logout())
        
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            {loading ? (
              <div className="text-center p-5">Loading...</div>
            ) : error ? (
              <div className="text-center text-red-500 p-5">
                Error: {error}
              </div>
            ) : (
              <div className="row p-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="col-md-4 shadow-sm bg-slate-100 rounded-sm min-h-60"
                  >
                    <div className="card-body p-3">
                      <h5 className="card-title font-bold text-xl">
                        {blog.title}
                      </h5>
                      <p className="card-text mb-4 ">{blog.body}</p>
                      <p className="card-text mb-4 flex gap-0 align-middle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 p-1">
  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
</svg>

<strong className="mr-1">Author: </strong> { blog.author_name}</p>
                      <a
                        href={`/blog/${blog._id}`}
                        className="group transition-all font-bold hover:bg-opacity-70 btn gap-2 flex align-middle justify-between rounded-md float-start btn-primary p-3 bg-black text-white mt-4"
                      >
                        Read More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllBlogs;

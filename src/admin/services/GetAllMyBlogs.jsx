import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { BLOGS_API } from "../../../env";
import { Admin_BLOGS_API } from "../../../env";
async function GetAllMyBlogs() {
 
  const [blogs, setBlogs] = useState([]); // For storing fetched blogs
  const [error, setError] = useState(null); // For storing error messages
  const [loading, setLoading] = useState(true); // For tracking loading state

  
   
      const token = localStorage.getItem("auth")
      try {
        setLoading(true); // Start loading
        const response = await axios.get(Admin_BLOGS_API,{ headers:{
            'Authorization': token,
            'Content-Type': 'application/json', // Optional, depending on your API requirements
          }}).then((data)=>data);
          return response;
          
      
      } catch (err) {
        // Handle error
        console.error("Error fetching blogs:", err);
        setError(err.message || "An unexpected error occurred.");
       
        
      } finally {
        setLoading(false); // End loading
      }
    };


 


export default GetAllMyBlogs;

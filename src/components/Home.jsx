import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import LoginForm from "../forms/LoginForm";
import AllBlogs from "../blogs/AllBlogs";
import BlogForm from "../blogs/BlogForm";
function Home({handleFormVisibility,isFormVisible}){


    
    const dispatch = useDispatch();
  var blogs = [{
    title:"The Future of Web Design: Trends You Can't Afford to Miss in 2024",
    description:"This is description that needs to be done on the time of cake.",
    id:1
  },
  {
    title:"Unlocking Success: Proven Strategies to Boost Your Online Presence",
    description:"This is description that needs to be done on the time of cake.",
    id:1
  },{
    title:"Mastering Content Marketing: Tips to Skyrocket Your Traffic",
    description:"This is description that needs to be done on the time of cake.",
    id:1
  },{
    title:"10 Essential Tools Every Digital Entrepreneur Should Know About",
    description:"This is description that needs to be done on the time of cake.",
    id:1
  }
   
]

const isUserLoggedIn = useSelector((state)=>state.auth.isAuthenticated)
console.log(isUserLoggedIn)
function handleLogout(e){
  e.preventDefault();
  dispatch(logout());
}

    return(<>
    
    {!isUserLoggedIn && <LoginForm/>}
  {isUserLoggedIn && !isFormVisible && <AllBlogs blogs = {blogs} formvisibility = {handleFormVisibility}/> }
  {isUserLoggedIn && isFormVisible && <BlogForm handleFormVisibility = {handleFormVisibility}/> } </>)
}

export default Home;
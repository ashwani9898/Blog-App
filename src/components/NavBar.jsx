import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import LoginForm from "../forms/LoginForm";
import { logout } from "../actions/authActions";

function NavBar({handleFormVisibility,isFormVisible}){


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
    <div className='flex justify-between text-lg bg-black p-7 bg-black w-full text-center text-white font-bold'>
    <span className='text-3xl'>Blogs</span>
      <div className='flex gap-5'>
      {isUserLoggedIn && !isFormVisible && <a href='#' onClick={handleFormVisibility} className=' bg-white text-black py-1 px-4 rounded-md'>Add Blog</a>}
       {isUserLoggedIn && !isFormVisible && <button onClick={handleLogout} className=' bg-white text-black py-1 px-4 rounded-md'>Logout</button>}</div>
    </div>
    </>)
}

export default NavBar
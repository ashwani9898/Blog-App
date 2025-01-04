import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllBlogs from './blogs/AllBlogs'
import BlogForm from './blogs/BlogForm'
import { Provider } from 'react-redux'
import store from './store/store'
import LoginForm from './forms/LoginForm'
import { useSelector } from 'react-redux'
import { logout } from './actions/authActions'
import { useDispatch } from 'react-redux'
import NavBar from './components/NavBar'
import Home from './components/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SignUpForm  from './forms/SignUpForm'

function App() {
//  const {blogs,setBlogs} = useState({})
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
const [isFormVisible,setIsFormVisible] = useState(false);
function handleLogout(e){
  e.preventDefault();
  dispatch(logout());
}
function handleFormVisibility(){
  setIsFormVisible(!isFormVisible);
}
  return(<>
<Router>
  <NavBar  handleFormVisibility = {handleFormVisibility} isFormVisible = {isFormVisible}/>
  <Routes>
   
    <Route path="/" element={<Home handleFormVisibility = {handleFormVisibility} isFormVisible = {isFormVisible}/>}/>
    <Route path="/signup" element={<SignUpForm/>}/>
  </Routes>
</Router>
 

  
  
  </>)
}

export default App

const API_URl = "http://localhost:3000/api/add"
import { ADD_BLOG_API } from '../../env';
import axios from 'axios'

export async function PostBlog(blogData){
  
  const token = localStorage.getItem('auth')
  try{
    const response = await axios.post(API_URl, blogData,{
        headers:{
            'Authorization':token,
            'Content-Type': 'application/json',
        }
    });
    return response;
  }catch(err){
    return response
  }
 
}


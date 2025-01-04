import axios from "axios";
import { LOGIN_API,SIGN_UP_API } from "../../env";
import { useDispatch } from "react-redux";
import {login} from '../actions/authActions'
export const Login =async (userData)=>{
    
   
    try{

        const res = await axios.post(process.env.LOGIN_API,userData)
        .then((res)=>{
            console.log(res);
           
        })
        .catch((err)=>{
            console.log(err);
        })
    }catch(err){
        console.log("login failed",err);
    }

}


export const SignUp = async (data)=>{
    try{
        const res = await axios.post(SIGN_UP_API,data).then((res)=>{
            console.log(res);
            return "ok"
        }).catch((err)=>{
            console.log("error while signing up",err);
        })
        
    
    }catch(err){
        console.log("there is some error while signing up")
    }
  

}
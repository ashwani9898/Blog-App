import { loginSuccess,logoutSuccess } from "../features/authSlice";
import { LOGIN_API } from "../../env";
import axios from "axios";

export const login = function(creadentials){

   
    return async function(dispatch){

        try{

            const res = await axios.post(LOGIN_API,creadentials)
            .then((res)=>{
                console.log(res);
                localStorage.setItem("auth",res.data.auth)
                dispatch(loginSuccess(res.data))
                localStorage.setItem("isLoggedIn",true);
            })
            .catch((err)=>{
                console.log(err);
                dispatch(logoutSuccess());
                
            })
           
        }catch(err){
            console.log("login failed",err);
            dispatch(logoutSuccess());
        }
    }

}

export const logout = function (e){
    
    return  async function(dispatch){
            localStorage.removeItem("auth");
            localStorage.removeItem('isLoggedIn');
            dispatch(logoutSuccess());
           
      
    }

}
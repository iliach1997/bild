import axios from "axios";
import { API_BASE_URL } from "./config";
axios.defaults.baseURL=API_BASE_URL;
export  const loginAsync=async(data)=>{
    try{
      const response=await axios.get(`/Login`,)
      return response.data
    }
    catch(e){
        console.log('__loginasync__',e)
    }
    return null
};
export const registerAsync=async(data)=>{
    try{
        const response=await axios.post(`/register`,data)
        return response.data

    }catch(e){
     console.log('__redisterAsync__',e)  
     return null; 
    }
}
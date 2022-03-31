import axios from "axios";
import { API_BASE_URL } from "./config";
axios.defaults.baseURL=API_BASE_URL;
export  const loginAsync=async(data)=>{
    try{
      const response=await axios.post(`/Login`,data)
      return response.data
    }
    catch(e){
        console.log('__loginasync__',e)
    }
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
import axios from "axios";
import {REST_BASE_URL} from './config'
axios.defaults.baseURL=REST_BASE_URL;
export const getByCountriesByRegionName=async(region)=>{
    try{
        const response=await axios.post(`/region/${region}`)
        return response.data
      }
      catch(e){
          console.log('__getByCountriesByRegionName__',e)
      }
      return null
} 
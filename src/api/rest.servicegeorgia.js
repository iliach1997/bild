import axios from 'axios'
import {REST_BASE_URL} from './config'
axios.defaults.baseURL=REST_BASE_URL;
export const RegionNameGeorgia=async(Georgia)=>{
    try{
        const response=await axios.get(`/name/${Georgia}`)
        return response.data
      }
      
      catch(e){
          console.log('__getByCountriesByRegionName__',e)
      }
      return null
} 
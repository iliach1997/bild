import axios from 'axios'
import {REST_BASE_URL} from './config'
axios.defaults.baseURL=REST_BASE_URL;
export const RegionName=async(region)=>{
    try{
        const response=await axios.get(`/region/${region}`)
        return response.data
      }
      
      catch(e){
          console.log('__getByCountriesByRegionName__',e)
      }
      return null
} 
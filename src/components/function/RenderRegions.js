
import { Button } from "../../atoms/button"
import { REGIONS} from '../../utils/constans'

 export const RenderRegions=({region,setCurrentRegion})=>{
   
 
    return REGIONS.map((item,region)=>{
     
        return <Button className="btn" key={region}  onClick={()=>{setCurrentRegion(item)}}>{item}</Button>
    })

}
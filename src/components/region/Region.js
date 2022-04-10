import { useState,useEffect } from "react"
import { useAsync } from "../../hooks/useAsync"
import { Button } from "../../atoms"
import {Loader} from '../../atoms/loader'
import {RegionName} from '../../api/rest.service'
import { RenderRegions,Total,Area,RenderCountries,SortPopulation,SortPopulationGrowth} from "../function"


import './regionName.css'

export const Region=({region='Europe'})=>{
  const [o,seto]=useState(false)

const [currentRegion,setCurrentRegion]=useState(region)
const {execute, status, error, data }=useAsync(RegionName,false)
useEffect(()=>{

    execute(currentRegion)
   
},[currentRegion,execute] )




const renderStatus=()=>{
  
      return (
          <div>
        {status === 'idle' && <h3 className="text-warning">Please select a region</h3>}
        {status === 'error' && <h3 className="text-danger">{error}</h3>}
        {status === 'pending' && <Loader />}
        {status === 'success' && (
        
        <div >
          <div className="d-flex justify-content-between wraper">
          POPULATION :<Total data={data}/>
          AREA:<Area data={data}/>m*
          CURENT:{data.length}
          <Button className="btn" onClick={()=>seto(!o)}>{o?'Sort Growth Population':"Sort Decrease Population"}</Button>
          {o? <SortPopulation data={data}/>:<SortPopulationGrowth data={data}/>}
  
          </div>
          <div className="d-flex justify-content-between flex-wrap"> 
          <RenderCountries data={data}/>
          </div>
       
           </div> )}
       </div>
             )
}



return (
 
    <div className=" row col-12 ">
     <h2 className="d-flex col-12 row justify-content-center">
       Selected Region:{currentRegion}
     </h2> 
     <div className="d-flex justify-content-center">
      <RenderRegions region={region} setCurrentRegion={setCurrentRegion}/>
     
    
    </div > 
    <div className="row col-16 blak">
     {renderStatus()}

    
    </div>
    </div>
)


}
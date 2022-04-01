import { useState,useEffect } from "react"
import { Button } from "../../atoms/button"
import { Loader } from "../../atoms/loader/Loader"
import { REGIONS } from "../../utils"
import { useAsync } from "../../hooks"
import { getByCountriesByRegionName } from "../../api/rest.service"
export const CountriesbyRegion=({region='Europe'})=>{ 
const [currentRegion,setCurrentRegion]=useState(region)
const {execute,status,error,data}=useAsync(getByCountriesByRegionName,false)
useEffect(()=>{
execute(currentRegion)
},[currentRegion,execute])
const renderRegion=()=>{
    return REGIONS.map((item)=>{
        return <Button className="btn" key={region}  onClick={()=>{setCurrentRegion(item)}}>{item}</Button>
    })
}



return (
   
    <div className="row">
        
        
        <div className="row col-12">
              
        <h2 className="text-muted col-4">select region:<span className="text-primary">{currentRegion}</span></h2>
        <div className="text-muted col-8 d-flex">
           {renderRegion()}

        </div>
        </div>

        <hr/>
        <div className="row col-12">
           {status==='idle' && <h3 className="text-warning">select:</h3>}
           {status==='error' && <h3 className="text-danger">{error}</h3>}
           {status==='pending' && <Loader/>}
           {status==='success' && data.length}
        </div>
    </div>
) 

}
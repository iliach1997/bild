import { useState,useEffect } from "react"
import { useAsync } from "../../hooks/useAsync"
import {Loader} from '../../atoms/loader'
import {RegionNameGeorgia} from '../../api/rest.servicegeorgia'
import { RenderGorgia } from "../../components/function"

export const Georgia =({name='Georgia'})=>{


    const [currentRegion,setCurrentRegion]=useState(name)
    const {execute, status, error, data }=useAsync(RegionNameGeorgia,false)
    useEffect(()=>{
    
        execute(currentRegion)
       
    },[currentRegion,execute] )
    
const renderStatus=()=>{
  
    return (
        <div>
      {status === 'idle' && <h3 className="text-warning">Please select a region</h3>}
      {status === 'error' && <h3 className="text-danger">{error}</h3>}
      {status === 'pending' && <Loader />}
      {status === 'success'&&<RenderGorgia data={data}/>}
      </div>)
}

    return (
        <div>

<div >
     {renderStatus()}

    
    </div>


        </div>
    )
}

export const SortPopulationGrowth=({data})=>{
    const funk=()=>{
        data.sort((t,te)=>{
            return te.population-t.population
        })
    
    
     
    
    }
    return (<>{funk()}</>)
    
    
    
    
    }
   
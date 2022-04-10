
export const SortPopulation=({data})=>{
const funk=()=>{


    
    data.sort((t,te)=>{
        return t.population-te.population
    })


 

}
return (<>{funk()}</>)




}


export const Total=({data})=>{

return data.reduce((currentTotal,t)=>{
    return t.population+currentTotal
},0)

}
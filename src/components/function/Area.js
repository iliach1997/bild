
export const Area=({data})=>{
    return data.reduce((currentTotal,t)=>{
        return t.area+currentTotal
    },0)
}
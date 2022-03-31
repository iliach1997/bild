import { useState } from "react"

export const useLocalStorage=(key, initialvalue)=>{
 const [storedValue,setstoredValue]=useState(()=>{
     if (typeof window==='undefined'){
         return initialvalue;
     }
     try{
      const value=window.localStorage.getItem(key)
      return value ? JSON.parse(value):initialvalue;
     }
     catch(error){
        console.log("__useLocalStorag_useState__")
   console.log( error);
   return initialvalue;
     }
 })
 const setValue=(newValue)=>{
     try{
        const valueToStore=newValue instanceof Function?newValue(storedValue):newValue
        setstoredValue(valueToStore)
        if(typeof window!=="undefined"){
            window.localStorage.setItem(key,JSON.stringify(valueToStore))
        }
     }
     catch (error){
        console.log("__useLocalStorag_setValue__")
        console.log(error)
     }
 }
 return[storedValue,setValue]
}
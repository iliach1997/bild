import { useState,useCallback,useEffect} from "react"
export    const useAsync=( asyncFn, immediate=false)=>{
 const [status,setStatus]=useState('idle');
 const [data, setData]=useState(null);
 const [error,setError]=useState(null);
  const execute=useCallback((params)=>{
      setStatus('pending')
      setData(null);
      setError(null)
    return asyncFn(params)
    .then((response)=>{
        setData(response)
        setStatus('success')
        
    }).catch(error=>{
        setError(error)
        setStatus(error)
    }) 
  }, [asyncFn])
  useEffect(()=>{
      if(immediate){
          execute();
      }
    return ()=>console.log('clinap')  
  },[execute,immediate]);
  return{
      execute,error,data,status
  }

}
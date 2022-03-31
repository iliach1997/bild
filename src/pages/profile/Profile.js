
import { useState } from "react"



const ProfileChildComponent=()=>{
return(
    <h>ProfileChildComponent</h>
)
}
export const Profile=()=>{
    const [username,setusername]=useState('')
    return (
        <div className="row p-2">
            <h1>👤Profile fage</h1>
              <h1>user name:{username}</h1>
         <div className="row">
             <div className="col-5">
                   <input className="fore-control" onChange={({target})=>setusername(target.value)}></input>
             </div>
             <div className="col-5">
             <ProfileChildComponent/>
             </div>
             <div className="col-5">
             <ProfileChildComponent/>
             </div>
         </div>



         
        </div>
    )
}

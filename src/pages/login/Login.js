import {LoginForm}from '../../auth/LoginForm'

export const Login=()=>{
    
    return (
        <div className="row p-2">
        <h1>sing in</h1> 
           <div className="col-md-12 my2 shadow p3"> 
               <LoginForm/>
           </div>
        </div>
    )
}
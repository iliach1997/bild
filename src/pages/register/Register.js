import { RegisterForm } from "../../components/auth"

export const Register=()=>{
    return (
        <div className="row p-2">
          <h1> Register Form</h1>
           <div className="col-md-12 my2 shadow p3">
               <RegisterForm/>
           </div>
        </div>
    )
}
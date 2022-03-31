

import { useForm } from "react-hook-form"//<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>

import {Button, Form } from '../../atoms'

import { useAuthProvider } from "../../providers/authProvider"



export const RegisterForm=()=>{
    const {register,handleSubmit,formState:{errors}}=useForm()
    const {register:signUp}= useAuthProvider()
    const onSubmit=async(signUpData)=>{
        console.log('__LOGINDATA__',signUpData)
        signUp(signUpData)
     
    }
    return( <Form onSubmit={handleSubmit(onSubmit)}>
<div className="col-md-8 m-auto">
      
  <div class="mb-3">
    
    <label htmlfor="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" {...register('email',{required:true})} />
   {errors.email&&( <div id="emailHelp" class="form-text text-danger">
    email is required</div>)}
  </div>
  <div class="mb-3">
    <label htmlfor="password" class="form-label">Password</label>
   
    <input type="password" class="form-control" id="password"{...register('password',{required:true})}/>
  {errors.password&&(  <div id="passwordHelp" class="form-text text-danger">
  password is required.</div>)}
  </div>
 
  <Button type="submit" class="btn btn-primary">Submit</Button></div>
    </Form>)
}
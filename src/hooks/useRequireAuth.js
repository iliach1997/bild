import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthProvider } from '../providers/authProvider'
import {REGISTER_PATH}from '../utils/routePaths'
export const useRequireAuth =(redirectUerel=REGISTER_PATH)=>{
    const {user}=useAuthProvider()
    const navigate =useNavigate()
    useEffect(()=>{
   if(!user){
       navigate(redirectUerel)
   }
    },[user,navigate,redirectUerel])
    return user
}
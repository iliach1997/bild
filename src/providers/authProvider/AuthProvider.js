import { createContext,useContext } from "react"; 
import { useLocalStorage } from "../../hooks";
import { loginAsync,registerAsync } from "../../api/auth.service";
import {useNavigate}from 'react-router-dom'
import { HOMEE_PATH,LOGIN_PATH } from "../../utils";
export const authContext=createContext({});

authContext.displayName='AuthContext';
export const AuthProvider=({children})=>{
   const [user,setuser]=useLocalStorage("supper-app:auth",true)
   const navigate=useNavigate()
    const login=async(credentials)=>{
        const user=await loginAsync(credentials)
        console.log('user',user)
            if(user&&user.token){
            setuser(true)
          navigate(HOMEE_PATH)
            }
            else{
                setuser(false)
            }
          

    }
    const register =async(cradentials)=>{
        const newUser=await registerAsync(cradentials)
        console.log("newUser", newUser)
        if(user&&user.token  ){
            setuser(true)
            navigate(HOMEE_PATH)

        }else{
            setuser(false)
        }

    }
    const logOut =()=>{

      setuser(false)
      navigate(LOGIN_PATH)
    }




    return (<authContext.Provider value={{login,register,logOut,user}}>{children}</authContext.Provider>)

}
export const  useAuthProvider=()=>{
    const auth=useContext(authContext)
    if(!auth){
        throw SyntaxError('syntaxError')
     }
     return auth;
    }
    
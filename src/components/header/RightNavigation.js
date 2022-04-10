import {NavLink} from 'react-router-dom'
import {LOGIN_PATH,REGISTER_PATH,PROFILE_PATH} from '../../utils'
import {useAuthProvider} from '../../provaiders/authProvider/AuthProvider'
import {Button}from'../../atoms/button'
export const RightNavigation=()=>{
  const {user,logOut}=useAuthProvider();
  console.log(user)
const renderusersignup=()=>{
  return(
  <>
    <li className="nav-item">
    <NavLink className="nav-link" to={LOGIN_PATH}>Login</NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" to={REGISTER_PATH}>Register</NavLink>
    </li>
    </>
  )
}
const renderUser=()=>{
  return(
    <>
     <li className="nav-item">
        <NavLink className="nav-link" to={PROFILE_PATH}>👤Profile</NavLink>
        </li>
           <li className="nav-item">
      <Button className='btn-link btn ' onClick={logOut}>
        Log out
      </Button> 
        </li>
       
    </>
  )
}








    return<ul className="navbar-nav  mb-2 mb-4g-4">{user?renderUser():renderusersignup()}</ul>


   
}
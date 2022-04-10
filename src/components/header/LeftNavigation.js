
import {NavLink} from 'react-router-dom'
import {HOMEE_PATH,GORGIA_PATH}from '../../utils'
export const LeftNavigation=()=>{

    return(
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className="nav-link" to={HOMEE_PATH}>Cauntries</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to={GORGIA_PATH}>Gorgia</NavLink>
        </li>
       
      
      </ul>
    )
}
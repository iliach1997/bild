import { useCart } from '../../providers/cartProvider';
import {NavLink, Link} from 'react-router-dom'
import {HOMEE_PATH,PRODUCTS_PATH,SHOPPING_CART_PATH}from '../../utils'
export const LeftNavigation=()=>{
    const {cart,}=useCart();
    return(
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className="nav-link" to={HOMEE_PATH}>Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to={PRODUCTS_PATH}>Products</NavLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={SHOPPING_CART_PATH}>CART TOTAL🤑:<span>{cart.total}</span></Link>
        </li>
      
      </ul>
    )
}
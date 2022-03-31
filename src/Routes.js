import {lazy,Suspense} from 'react'
import { Routes as Router, Route  } from "react-router-dom";
import { Loader } from './atoms';
import { Layout } from './components/Layout';
import {Login} from './pages/login'
import Profile from './pages/profile'
import {Register}from'./pages/register'
import * as routes from './utils/routePaths'
//import {Home} from './pages/home/'
import {NoMatch} from './pages/NoMatch'
const Home =lazy(()=>import('./pages/home/'))
const ShoppingCart=lazy(()=>import('./pages/shoppingCart'))
const Products=lazy(()=>import('./pages/products'))
 export const Routes=()=>{
   return(
       <>
<Router>

<Route element={<Layout/>}>
<Route path={routes.HOMEE_PATH} element={<Suspense fallback={<Loader/>}><Home/></Suspense>}/>
<Route path={routes.PRODUCTS_PATH} element={<Suspense fallback={<Loader/>}> <Products/></Suspense>}/>
<Route path={routes.SHOPPING_CART_PATH} element={<Suspense fallback={<Loader/>}><ShoppingCart/></Suspense>}/>
<Route path={routes.PROFILE_PATH} element={<Profile/>}/>
<Route path={routes.LOGIN_PATH} element={<Login/>}/>
<Route path={routes.REGISTER_PATH  } element={<Register/>}/>
<Route path={routes.NOMACTH} element= {<NoMatch/>}/>
</Route>
</Router>
       
       </>
   )
   
 }
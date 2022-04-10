import {lazy,Suspense} from 'react'
import { Routes as Router, Route  } from "react-router-dom";
import { Loader } from './atoms';
import {Layout}from './components/layout/Layout'
import * as routes from './utils/routePaths'
import {Login} from './pages/login'
import Profile from './pages/profile'
import {Register}from'./pages/register'
import {NoMatch} from './pages/NoMatch'

import { Home } from './pages/home/Home';
// const Georgia=lazy(()=>import('./pages/georgia/'))
import {Georgia} from './pages/georgia/Georgia'
 export const Routes=()=>{
   return(
       <>
<Router>

<Route element={<Layout/>}>
  {/* <Route path='/Home'index element={<Suspense fallback={<Loader/>}><Home/></Suspense>}/> */}
  <Route path={routes.HOMEE_PATH} index element={<Home />} />

  <Route path={routes.GORGIA_PATH} element={<Georgia/>}/>
<Route path={routes.PROFILE_PATH} element={<Profile/>}/>
<Route path={routes.LOGIN_PATH} element={<Login/>}/>
<Route path={routes.REGISTER_PATH  } element={<Register/>}/>
<Route path='*' element= {<NoMatch/>}/>
</Route>
</Router>
       
       </>
   )
   
 }
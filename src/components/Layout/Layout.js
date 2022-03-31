import { Header } from '../../components/header';
import { Outlet } from 'react-router-dom';
const sizes={
    default:'container',
    fluid: 'container-fluid',
     
};
export const Layout=({className, size='fluid'})=>{

    return (
    
            
    <div className={`${sizes[size]} ${className}`}>

<Header/>
<Outlet/>
    </div>
    )
}
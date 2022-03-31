import { useRequireAuth } from '../hooks'

import { Loader } from '../atoms'


export const withAuthProtection=(WrappedComponent)=>{
const AuthProtection=(props)=>{
    const auth= useRequireAuth();
    console.log(auth)
    if(!auth){
        return<Loader/>
    }
return <WrappedComponent/>
}
AuthProtection.displayName='AuthProtection'
return AuthProtection;
}
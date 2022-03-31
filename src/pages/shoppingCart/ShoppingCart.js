
import {ProductTable} from '../../components/table/ProductTable'

import { useRequireAuth } from '../../hooks'

import { Loader } from '../../atoms'

export const ShoppingCart=()=>{
const auth=useRequireAuth()
if(!auth){
    return <Loader/>
}
    return(
        <div className="row">
     
            <div className="col-12">
                <ProductTable/>
            </div>
      
        </div>
    )
}
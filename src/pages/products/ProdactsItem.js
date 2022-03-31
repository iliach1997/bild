import { useCart} from '../../providers/cartProvider'
import PropTypes from "prop-types"

import { Button } from '../../atoms'

import './ProdactsItem.css'
export const ProdactsItem=({prodact})=>{
    const {addNewItem,removeItem,cart:{items}}=useCart();

if(!prodact){
    return null
}

    const isincart=prodact.id in items;
    return(
        <div className="card mb-4 prodactsItem-card ol">
    
            <h4 className="card-header "> <h4>{prodact.name},  ${prodact.price}</h4></h4>
           <div className="card-body">
                <div className=' d-flex flex-colum'>
                     <h5>
                   მარაგშია : { prodact.stoke ? 'მარაგშია':' არ არის მარაგში!!!'}, კატეგორია : {prodact.categori}
               </h5>
                </div>
              
               <h5> {isincart ?`კალათაში:${items[prodact.id].qty}ც`:'არ არის კალათაში'}</h5>
               <div className='btn-group'>
               <Button className="btn el btn-outline-primary " onClick={()=>addNewItem(prodact)}>add to card</Button>
               <Button className="btn el btn-outline-primary " onClick={()=>removeItem(prodact)} disabled={!isincart}>delete to card</Button>
         </div>   
         </div>
            
        </div>

    )
} 
ProdactsItem.propTypes={
    prodact:PropTypes.object.isRequired,
}
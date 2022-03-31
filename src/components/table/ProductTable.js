import { useCart } from "../../providers/cartProvider";
import { ProductTableRow } from "./ProductTableRow";

 
 
 
 export const ProductTable=(props)=>{
  const {addNewItem,removeItem,cart}=useCart();

   console.log(cart)
     return(
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">დასახელება</th>
      <th scope="col">ღირებულება</th>
      <th scope="col">რაოდენობა-სულ</th>
      <th scope="col">მოქმედება</th>
    </tr>
  </thead>
  <tbody>
  {Object.entries(cart.items).map(([productid,item])=>{
return <ProductTableRow key={`prducts-${productid}`}{...item} productid={productid}  
onadd={()=>addNewItem({...item,id:productid})}
onremov={()=>removeItem({...item,id:productid})}
/>
  })}
 
  </tbody>
</table>
     )
 }
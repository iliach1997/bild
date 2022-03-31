import { Button } from "../../atoms"
export const ProductTableRow=({productid,name,qty,price,onadd,onremov})=>{
    return(
         <tr>
          <th scope="row">{productid}</th>
          <td>{name} </td>
          <td>{price}</td>
          <td>რაოდენობა:{qty} სულ:{price*qty}</td>
          <td>
            <div className="d-flex">
            <Button className="btn" text='➕' onClick={onadd}/>
            <Button className="btn" text="➖" onClick={onremov}/>
    
            </div>
          </td>
        </tr>
    )
     }
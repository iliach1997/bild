import { createContext,useContext } from "react";
//import { useState } from "react";
import { useLocalStorage } from "../../hooks";
export const CartContext=createContext({
    total:0,
});
CartContext.displayName='CartProvider';
export const Cartprovider=({children})=>{
  
    const [cart,setcart]= useLocalStorage('supper-app,',{total:0,items:{}})

   
       const addNewItem=(products)=>{
           setcart((prev)=>{
               let newItem;
               if(prev.items[products.id]){
                   const card=prev.items[products.id]
                   newItem={
                       ...card,
                       name:products.name,
                       qty:card.qty+1
                   }
               }
               else{
                   newItem={
                       price:products.price,
                       qty:1,
                   }
               }
               return{
                   total:prev.total+products.price,
                   items:{
                       ...cart.items,
                       [products.id]:newItem
                   }
               }
           })
          
       }

    const removeItem=(prodact)=>{
     setcart((prev)=>{
         let newItem={...prev.items};
         let total=prev.total;
         if(prev.items[prodact.id]){
             const cartProduct=prev.items[prodact.id];
             if(cartProduct.qty>1){
               newItem={
                   ...prev.items,
                   [prodact.id]:{
                       ...cartProduct,
                 qty:cartProduct.qty-1}
                 
             }

           total-=prodact.price;
    }
    
    else{
        total-=prodact.price
        delete newItem[prodact.id]
    }

}
        
         return{
             ...prev,
             total,
             items:newItem
         }
     })

      }
    return(
        <CartContext.Provider value={{cart,addNewItem,removeItem,}}>{children}</CartContext.Provider>
    )
} 
export const useCart=()=>{
const cart=useContext(CartContext)
if(!cart){
    throw SyntaxError('syntaxError')
 }
 return cart;
}

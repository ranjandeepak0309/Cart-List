import React from "react";
import CartItem from './CartItem';
class Cart extends React.Component{
    constructor(){
        super();
        this.state= {products : [
            {
            price:2999,
            title:'SAMSUNG Phone',
            qty:1,
            img:'',
            id:1
          
         }, {
            price:999,
            title:'Watch',
            qty:1,
            img:'',
            id:2
          
         },
         {
            price:4999,
            title:'SAMSUNG Laptop',
            qty:1,
            img:'',
            id:3
          
         }
        ]
        // this.increaseQuantity = this.increaseQuantity.bind(this)
    }
}
    render(){
        const {products} = this.state;
        console.log(products)
        return(
           
            <div className="cart">
                {products.map((eachProduct) =>{
                   return  <CartItem  eachProduct = {eachProduct} key ={eachProduct.id}/>

                })}
               

            </div>
        );
    }
   
    }

export default Cart;

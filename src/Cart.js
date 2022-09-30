import React from "react";
import CartItem from './CartItem';
class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products : [
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
       
    }
}
handleIncreaseQuantity = (item) => {
    console.log('hey pls increse the qty of', item);
    const {products} = this.state;
    const index = products.indexOf(item);
    products[index].qty += 1;
    this.setState({
    products : products
    })
}
handleDecreaseQuantity = (item) => {
    console.log('hey pls decrese the qty of', item);
    const {products} = this.state;
    const index = products.indexOf(item);
    if(products[index].qty===1){
        return;
    }
    products[index].qty -= 1;
    this.setState({
        products : products
    })
}
handleDeleteProduct = (id)=>{
    const {products} = this.state;
    const deleteItems = products.filter((deleteditems) => deleteditems.id !== id);
    this.setState({
        products:deleteItems
    })

}
    render(){
        const {products} = this.state;
        console.log(products)
        return(
           
            <div className="cart">
                {products.map((item) =>{
                return(
                 <CartItem 
                item ={item} 
                key ={item.id}
                onIncreaseQuantity = {this.handleIncreaseQuantity}
                onDecreaseQuantity = {this.handleDecreaseQuantity}
                onDeleteProduct = {this.handleDeleteProduct}
                /> )

                })}
             
            </div>
        );
    }
   
    }

export default Cart;

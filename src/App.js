import React from 'react';
// import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar'

class App extends React.Component {
  // const name = 'Deepak';
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

getCartCount =() => {
  const {products} = this.state;
  let count = 0;

  products.forEach((item) =>{
    count += item.qty;
  })
  return count;
}
render (props){
  const {products} = this.state;
  return (
   
    <div className="App">
      <Navbar
          count = {this.getCartCount()}

      />

        <Cart
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
    </div>
  );
}
}

export default App;

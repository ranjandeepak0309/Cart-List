import React from 'react';
// import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
import db from './index';
// import * as  firebase from 'firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
class App extends React.Component {
  // const name = 'Deepak';
  constructor() {
    super();
    this.state = {
      products: [
        
      ]

    }
  }
  componentDidMount () {

async function getCities() {
  const citiesCol = collection(db, 'products');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  const k = cityList;
  console.log(k);
}
getCities();
  }
  
  
  handleIncreaseQuantity = (item) => {
    console.log('hey pls increse the qty of', item);
    const { products } = this.state;
    const index = products.indexOf(item);
    products[index].qty += 1;
    products[index].price += products[index].initialPrice;

    this.setState({
      products: products
    })
  }
  handleDecreaseQuantity = (item) => {
    console.log('hey pls decrese the qty of', item);
    const { products } = this.state;
    const index = products.indexOf(item);
    if (products[index].qty === 1) {
      return;
    }
    products[index].qty -= 1;
    products[index].price -= products[index].initialPrice;
    this.setState({
      products: products
    })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const deleteItems = products.filter((deleteditems) => deleteditems.id !== id);
    this.setState({
      products: deleteItems
    })

  }

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((item) => {
      count += item.qty;
    })
    return count;
  }
  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((item) => {
      cartTotal = cartTotal + item.price
    })
    return cartTotal;
  }
  render(props) {
  console.log(db);
    
    const { products } = this.state;
    return (

      <div className="App">
        <Navbar
          count={this.getCartCount()}

        />

        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{ padding: 20, fontSize: 40 }}> Total : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;

import React from 'react';
// import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar'

class App extends React.Component {
  // const name = 'Deepak';
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 2999,
          initialPrice: 2999,
          title: 'SAMSUNG Phone',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
          id: 1

        }, {
          price: 999,
          initialPrice: 999,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1630905997561-4e240c7c5edd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
          id: 2

        },
        {
          price: 4999,
          initialPrice: 4999,
          title: 'SAMSUNG Laptop',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          id: 3

        }
      ]

    }
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

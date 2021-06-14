import React from 'react'
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
        products: [
            {
                price: 999,
                title: 'Mobile',
                qty: 2,
                img: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                id: 1
            },
            {
                price: 9999,
                title: 'Phone',
                qty: 1,
                img: "https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVsZXBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                id: 2
            },
            {
              price: 99999,
              title: 'Laptop',
              qty: 1,
              img: "https://images.unsplash.com/photo-1559163499-413811fb2344?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxhcHRvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              id: 2
          }
        ]
    }
  }
  handleIncreaseQuantity = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);
      products[index].qty += 1;

      this.setState({
          products: products
      })
  }
  handleDecreaseQuantity = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);

      if(products[index].qty === 0){
          return;
      }
      products[index].qty -= 1;

      this.setState({
          products: products
      })
  }
  handleDeleteProduct = (id) => {
      const {products} = this.state;
      const items = products.filter((item) => item.id !== id);

      this.setState({
          products: items
      })
  }
  getCartCount = () => {
    const {products} = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    })
    console.log(count);
    return count;
  }
  getCartTotal = () => {
    const {products} = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal += product.qty*product.price;
    })
    return cartTotal;
  }
  render () {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart 
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          products={products}
        />
        <div style={{padding:10, fontSize:20}}> TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;

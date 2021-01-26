import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: 'Phone',
          qty: 1,
          img: '',
          id: 1
        },
        {
          price: 1000,
          title: 'Watch',
          qty: 23,
          img: '',
          id: 2
        },
        {
          price: 10000,
          title: 'Tv',
          qty: 10,
          img: '',
          id: 3
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 1,
          img: '',
          id: 4
        }
      ]
    }
  }

  // for increasing the qty
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
      products
    })
  }

  // for decreasing the qty
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0)
      return;
    products[index].qty -= 1;
    this.setState({
      products
    });
  }


  // for deleting the product
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items
    });
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;
    let total = 0;
    products.forEach((product) => {
      total = total + product.qty * product.price;
    })
    return total;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar counts={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteItem={this.handleDeleteProduct}
        />
        <div style={{padding: 10, fontSize:20}}>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;

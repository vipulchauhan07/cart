import React, { Component } from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar'
import firebase from 'firebase'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    }
  }



  componentDidMount() {
    firebase
      .firestore()
      .collection('products')
      .get()
      .then((snapshot) => {
        console.log(snapshot)
        snapshot.docs.map((doc) => {
          console.log(doc.data());
        })

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        })
          this.setState({
            products,
            loading:false
          })
      })
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
    const { products } = this.state;
    let total = 0;
    products.forEach((product) => {
      total = total + product.qty * product.price;
    })
    return total;
  }

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar counts={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteItem={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products ...</h1>}
        <div style={{ padding: 10, fontSize: 20 }}>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;

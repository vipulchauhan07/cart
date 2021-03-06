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

    this.db = firebase.firestore();
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
    // products[index].qty += 1;

    // this.setState({
    //   products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);
    console.log(docRef);

    docRef
    .update({
      qty: products[index].qty + 1
    })
    .then(() => {
      console.log("Updated Successfully!")
    })
    .catch((error) => {
      console.log("Update failed!")
    })

  }

  // for decreasing the qty
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    // if (products[index].qty === 0)
    //   return;
    // products[index].qty -= 1;
    // this.setState({
    //   products
    // });

    const docRef = this.db.collection('products').doc(products[index].id);
      docRef
      .update({
        qty: products[index].qty - 1
      })
      .then(() => {
        console.log("Updated Successfully!")
      })
      .catch((error) => {
        console.log("Update failed!")
      })
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

  addProduct = () => {
    this.db
    .collection('products')
    .add({
      img :'',
      price: 455,
      title : 'washing machine',
      qty: 3
    })
    .then((docRef) => {
      console.log("Product has been added. " + docRef);
    })
    .catch((error) => {
      console.log("****Error has occured.****", error);
    })
  }

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar counts={this.getCartCount()} />
        <button onClick={this.addProduct} style={{margin: 5, padding: 20, fontSize: 15}}>Add A Product</button>
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

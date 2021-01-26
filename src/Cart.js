import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    title: 'Phone',
                    qty: 1,
                    img: '',
                    id:1
                },
                {
                    price: 1000,
                    title: 'Watch',
                    qty: 23,
                    img: '',
                    id:2
                },
                {
                    price: 10000,
                    title: 'Tv',
                    qty: 10,
                    img: '',
                    id:3
                },
                {
                    price: 999,
                    title: 'Laptop',
                    qty: 1,
                    img: '',
                    id:4
                }
            ]
        }
    } 
    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {/* <CartItem   /> */}
                {
                    products.map((product) => {
                        {/* console.log(product); */}
                        return <CartItem product = {product}  key={product.id}/>
                    })
                }
            </div>
        );
    }
}
export default Cart;
import React from 'react';
import CartItem from './CartItem';


const Cart = (props) => {
    const { products } = props;
    return (
        <div className="cart">
            {/* <CartItem   /> */}
            {
                products.map((product) => {
                    {/* console.log(product); */ }
                    return (
                        <CartItem
                            product={product}
                            key={product.id}
                            onIncreaseQuantity={props.onIncreaseQuantity}
                            onDecreaseQuantity={props.onDecreaseQuantity}
                            onDeleteItem={props.onDeleteItem}
                        />
                    )
                })
            }
        </div>
    );
}

export default Cart;
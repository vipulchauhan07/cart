import React from 'react';

class CartItem extends React.Component {
 
   
    render() {
        const { price, title, qty } = this.props.product;
        console.log('this.prop', this.props);

        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>

                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs: {price}</div>
                    <div style={{ color: '#777' }}>Qty: {qty}</div>

                    <div className="cart-item-actions">
                        {/* {Buttons}  */}
                        <img alt="increase" 
                        className="action-icons"
                        src="https://www.flaticon.com/svg/static/icons/svg/1828/1828926.svg" 
                        // onClick={this.increaseQuantity.bind(this)} // for binding the state to this because this.increase doesn't know the state of the cart 
                        onClick={() => this.props.onIncreaseQuantity(this.props.product) }
                        />

                        <img alt="decrease"
                        className="action-icons"
                        src="https://www.flaticon.com/svg/static/icons/svg/659/659892.svg"
                        onClick={this.decreaseQuantity} />
                        
                        <img alt="delete"
                        className="action-icons"
                        src="https://www.flaticon.com/svg/static/icons/svg/1345/1345823.svg" />
                    
                    </div>
                </div>

            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}


export default CartItem;
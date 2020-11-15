import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this); For binding the state to this at the function
    }

    increaseQuantity = () => {
        // this.state.qty += 1;
        // console.log('this', this.state);
        // setState 1st form of rendering -- if previous state is not required use this method of rendering 
        // this.setState({  
        //     qty: this.state.qty + 1
        // }); // Shallow Merging


        // setState() 2nd form of rendering -- if previous state is required use this method

        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }

    decreaseQuantity = () => {
        const { qty } = this.state;
        if (qty === 0)
            return;

        this.setState((prevState) => {
                return {
                    qty : prevState.qty - 1
                }
        })
    }
    
    render() {
        const { price, title, qty } = this.state;
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
                        onClick={this.increaseQuantity}
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
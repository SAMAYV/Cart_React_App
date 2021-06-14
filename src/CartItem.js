import React from 'react';

class CartItem extends React.Component {
    constructor () {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ""
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {

    }
    render () {
        const {price, title, qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty {qty}</div>
                    <div className="cart-item-actions">
                        <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/png/512/3303/3303893.png" onClick={this.increaseQuantity}/>
                        <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/png/512/2740/2740679.png" />
                        <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/png/512/3161/3161358.png" />
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
import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor () {
        super();
        this.state = {
            products: [
                {
                    price: 99,
                    title: 'Mobile',
                    qty: 2,
                    img: "",
                    id: 1
                },
                {
                    price: 999,
                    title: 'Phone',
                    qty: 1,
                    img: "",
                    id: 2
                }
            ]
        }
    }
    render () {
        const {products} = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return (
                        <CartItem product={product} key={product.id}/>
                    )
                })}
            </div>
        );
    }
}

export default Cart;
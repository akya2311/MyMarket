import { Component } from 'react'
import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView/EmptyCartView'
import CartListView from '../CartListView/CartListView'

import "./Cart.css";

class Cart extends Component {
    render() {
        return (
            <CartContext.Consumer>
                {value => {
                    const { cartList } = value
                    const isCartEmpty = cartList.length === 0
                    return (
                        <>
                            <div className="cart-container">
                                {isCartEmpty ? <EmptyCartView /> : <CartListView />}
                            </div>
                        </>
                    )
                }}
            </CartContext.Consumer>
        )
    }
}

export default Cart

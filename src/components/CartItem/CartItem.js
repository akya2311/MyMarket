import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {FaRupeeSign} from 'react-icons/fa'
import CartContext from '../../context/CartContext'

import './CartItem.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {incrementCartItemQuantity, decrementCartItemQuantity} = value
      const {cartItem} = props
      const {id, name, quantity, price, img} = cartItem

      const decreaseQuantity = () => {
        decrementCartItemQuantity(id)
      }

      const increaseQuantity = () => {
        incrementCartItemQuantity(id)
      }

      return (
        <li className="cart-item" data-testid="cartItem">
          <div className="cart-item-info" data-testid="cartItem">
            <img src={img} alt={name} className="cart-item-image" />
            <h1 className="cart-item-desktop-name">{name}</h1>
          </div>
          <div className="cart-qty-price-cont" data-testid="cartItem">
            <h1 className="cart-item-mobile-name">{name}</h1>
            <div className="cart-qty-container">
              <button
                className="decrement-quantity"
                type="button"
                onClick={decreaseQuantity}
                data-testid="decrement-quantity"
              >
                <BsDashSquare size={16} />
              </button>
              <p data-testid="item-quantity" className="item-quantity">
                {quantity}
              </p>
              <button
                className="increment-quantity"
                type="button"
                onClick={increaseQuantity}
                data-testid="increment-quantity"
              >
                <BsPlusSquare size={16} />
              </button>
            </div>
            <p className="price" data-testid="total-price">
              <FaRupeeSign size={13} /> {price * quantity}
            </p>
          </div>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem

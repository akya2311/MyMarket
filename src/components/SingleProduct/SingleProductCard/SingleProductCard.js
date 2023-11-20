import { Component } from "react";
import CartContext from '../../../context/CartContext'
import "./SingleProductCard.scss";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";

class SingleProductCard extends Component {
    state = {
        quantity: 0,
    }
    render() {
        return (
            <CartContext.Consumer>
                {value => {
                    const {
                        addCartItem,
                        incrementCartItemQuantity,
                        decrementCartItemQuantity,
                    } = value

                    const { details } = this.props
                    const { id, img, name, price, measurement, description } = details
                    const { quantity } = this.state

                    const onClickAdd = () => {
                        this.setState(
                            prevState => ({
                                quantity: prevState.quantity + 1,
                            }),
                            addCartItem({ ...details, quantity: quantity + 1 }),
                        )
                    }

                    const onDecreaseQuantity = () => {
                        this.setState(prevState => ({ quantity: prevState.quantity - 1 }))
                        decrementCartItemQuantity(id)
                    }

                    const onIncreaseQuantity = () => {
                        this.setState(prevState => ({ quantity: prevState.quantity + 1 }))
                        incrementCartItemQuantity(id)
                    }

                    return (
                        <div className="single-product-page">
                            <div className="left">
                                <div className="img-section">
                                    <img src={img} alt={name} />
                                </div>
                                <div className="info-item">
                                    <span className="text-bold">
                                        Share:
                                        <span className="social-icons">
                                            <FaFacebookF size={16} />
                                            <FaTwitter size={16} />
                                            <FaInstagram size={16} />
                                            <FaLinkedinIn size={16} />
                                            <FaPinterest size={16} />
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="right">
                                <div className="name-section">
                                    <span className="name">{name} -</span>
                                    <span>{description}</span>
                                    <div className="price-section">
                                    <select>
                                        <option>{measurement}</option>
                                    </select>
                                    <h1 className="price">&#8377; {price}</h1>
                                    </div>
                                </div>
                               <div className="cart-buttons">
                                    {quantity === 0 ? (
                                        <button
                                            type="button"
                                            className="add-to-cart-button"

                                            onClick={onClickAdd}
                                        >
                                           <FaCartPlus size={20} />
                                           ADD TO CART
                                        </button>
                                    ) : (
                                        <div className="quantity-buttons">
                                        <span onClick={onDecreaseQuantity}>-</span>
                                        <span>{quantity}</span>
                                        <span onClick={onIncreaseQuantity}>+</span>
                                         </div>
                                    )}
                                </div>

                                <span className="divider" />
                                
                            </div>
                        </div>
                    )
                }}
            </CartContext.Consumer>
        )
    }
}

export default SingleProductCard;

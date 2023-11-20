import { Component } from "react";
import { BsPlusSquare, BsDashSquare } from 'react-icons/bs'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'
import "./HomeProduct.scss";

class HomeProduct extends Component {
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
                        <div className="home-product-card">
                            <div  className="offer-section">
                                <span>50% of</span>
                            </div>
                            <Link to={'/product/' + id} className="image-card">
                                <img src={img} alt="" />
                            </Link>
                            <div className="card-details">
                                <p className="name">{name}</p>
                                <p className="description">{description}</p>
                            </div>
                            <div className="button-section">
                                <div>
                                <select>
                                    <option>{measurement}</option>
                                </select>
                                <span className="price">&#8377;{price}</span>
                                </div>
                                {quantity === 0 ? (
                                    <button
                                        type="button"
                                        className="add-btn"
                                      
                                        onClick={onClickAdd}
                                    >
                                        Add
                                    </button>
                                ) : (
                                    <div className="cart-btn-qty-cont">
                                        <button
                                            data-testid="decrement-count"
                                            type="button"
                                            className="decrement-count"
                                            onClick={onDecreaseQuantity}
                                        >
                                            <BsDashSquare className="icon-btn" />
                                        </button>
                                        <p data-testid="active-count" className="active-count">
                                            {quantity}
                                        </p>
                                        <button
                                            data-testid="increment-count"
                                            type="button"
                                            className="increment-count"
                                            onClick={onIncreaseQuantity}
                                        >
                                            <BsPlusSquare className="icon-btn" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                }}
            </CartContext.Consumer>
        )
    }
}

export default HomeProduct;

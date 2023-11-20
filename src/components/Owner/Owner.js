import CartTotal from '../CartTotal/CartTotal'
const Owner = (props) => {
    const { details } = props
    console.log(details.img)
    return (
        <div>
            <div className="cart-content-container">
                <div className="cart-headers-cont">
                    <p className="cart-header-items">Item</p>
                    <div className="qty-price-cont">
                        <p className="cart-header-qty">Quantity</p>
                        <p className="cart-header-price">Price</p>
                    </div>
                </div>
                <ul className="cart-list">
                    <img src={details.img} alt=""/>
                </ul>
                <CartTotal/>
            </div>
        </div>
    )

}

export default Owner
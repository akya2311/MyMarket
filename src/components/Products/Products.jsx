import "./Products.scss";
import Product from "./Product/Product";
import { Component } from "react";
class Produtcs extends Component {
    render() {
        const {headingText} = this.props
        const {list} = this.props
       

        return (
            <div className="products-container">
                <div className="sec-heading">{headingText}</div>
                <div className="products" >
                    {list.map((each) => (
                        <Product key={each.id} details={each} />
                    ))}
                </div>
            </div>
        )

    }
}


export default Produtcs

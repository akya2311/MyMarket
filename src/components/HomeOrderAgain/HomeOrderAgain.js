import { Component } from "react"
import HomeProduct from "../HomeProduct/HomeProduct"
import "./HomeOrderAgain.scss";
import Slider from 'react-slick'

const orderProductList = [
    {
        "id": 1,
        "p_id": 2,
        "name": "nirama",
        "description": "Rin Refresh Detergent Powder",
        "img": "https://www.bigbasket.com/media/uploads/p/l/299468-2_3-rin-refresh-lemon-rose-detergent-powder.jpg?tr=w-1080,q=80",
        "price": 10,
        "measurement": "65gm",
        "best_offer": "",
        "category_id": 1
    },
    {
        "id": 2,
        "p_id": 2,
        "name": "nirama",
        "description": "Rin Refresh Lemon & Rose Detergent Powder, 1 kg",
        "img": "https://www.bigbasket.com/media/uploads/p/l/267012_9-rin-refresh-lemon-rose-detergent-powder.jpg?tr=w-1080,q=80'",
        "price": 110,
        "measurement": "1 kg",
        "best_offer": "",
        "category_id": 1
    },
    {
        "id": 3,
        "p_id": 2,
        "name": "Rin",
        "description": "Rin Detergent Bar",
        "img": "https://dms.mydukaan.io/700x700/webp/projecteagle/images/6a9afbf1-f23e-4bc4-89db-63a73a94571b.jpg",
        "price": 10,
        "measurement": "",
        "best_offer": "",
        "category_id": 1
    },
    {
        "id": 4,
        "p_id": 2,
        "name": "Rin",
        "description": "Rin Detergent Bar, 4x250 g Multipack",
        "img": "https://dms.mydukaan.io/700x700/webp/projecteagle/images/6a9afbf1-f23e-4bc4-89db-63a73a94571b.jpg",
        "price": 50,
        "measurement": "",
        "best_offer": "",
        "category_id": 1
    },
    {
        "id": 5,
        "p_id": 1,
        "name": "Salt",
        "description": "Tata Salt, 1 kg Pouch",
        "img": "https://www.bigbasket.com/media/uploads/p/l/241600_7-tata-salt-iodized.jpg?tr=w-1080,q=80",
        "price": 110,
        "measurement": "1 L",
        "best_offer": "",
        "category_id": 5
    },
    {
        "id": 6,
        "p_id": 1,
        "name": "sugar, Sakhar",
        "description": "Madhur Sugar , 1 kg",
        "img": "https://www.bigbasket.com/media/uploads/p/l/40253563_1-madhur-sugar-pure-hygienic-fine-grain-natural-sulphur-free.jpg?tr=w-1080,q=80",
        "price": 110,
        "measurement": "1 L",
        "best_offer": "",
        "category_id": 5
    },
    {
        "id": 6,
        "p_id": 1,
        "name": "aggery/gud",
        "description": "aggery/gud",
        "img": "https://dms.mydukaan.io/700x700/webp/projecteagle/images/aefdde09-bf87-4820-aada-e18ddb32a197.jpg",
        "price": 110,
        "measurement": "1 L",
        "best_offer": "",
        "category_id": 5
    },
    {
        "id": 7,
        "p_id": 3,
        "name": "Saffola",
        "description": "Saffola  Sun lite Refined Sunflower Oi",
        "img": "https://dms.mydukaan.io/700x700/webp/projecteagle/images/b74fd4da-d63b-4cf3-91ce-f89a73733705.jpg",
        "price": 110,
        "measurement": "1 L",
        "best_offer": "",
        "category_id": 6
    },
    {
        "id": 8,
        "p_id": 3,
        "name": "Saffola",
        "description": "Saffola  Sun lite Refined Sunflower Oi",
        "img": "https://dms.mydukaan.io/700x700/webp/projecteagle/images/b74fd4da-d63b-4cf3-91ce-f89a73733705.jpg",
        "price": 110,
        "measurement": "1 L",
        "best_offer": "",
        "category_id": 6
    },
    {
        "id": 9,
        "p_id": 3,
        "name": "Saffola",
        "description": "Saffola  Sun lite Refined Sunflower Oi",
        "img": "https://dms.mydukaan.io/700x700/webp/projecteagle/images/b74fd4da-d63b-4cf3-91ce-f89a73733705.jpg",
        "price": 110,
        "measurement": "1 L",
        "best_offer": "",
        "category_id": 6
    },
    {
        "id": 10,
        "p_id": 3,
        "name": "Saffola",
        "description": "Saffola  Sun lite Refined Sunflower Oi",
        "img": "https://dms.mydukaan.io/700x700/webp/projecteagle/images/b74fd4da-d63b-4cf3-91ce-f89a73733705.jpg",
        "price": 110,
        "measurement": "1 L",
        "best_offer": "",
        "category_id": 6
    }
]

class HomeOrderAgain extends Component {


    renderProductCarousel = () => {
        const settings = {
            dots: true,
            infinite: true,
            speed: 400,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 4000,
        }
        return (
           
            <Slider {...settings} className="orderagain-product-carousal" >
                {orderProductList.map(each => (
                       <div className="home-product">
                          <HomeProduct key={each.id} details={each}/>
                        </div>
                ))}
            </Slider>
          
        )

    }

    render() {
        return (
            <div className="order-again-bg-container">
            <div className="orderagain-product-container">
                <h1 className="sec-heading">ORDER AGAIN</h1>
                {this.renderProductCarousel()}
            </div>
            </div>
        )
    }
}

export default HomeOrderAgain
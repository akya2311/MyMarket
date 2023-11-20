import { Component } from "react";
import Products from "../Products/Products"

/*INSERT INTO `products` (`id`, `p_id`, `name`, `description`, `img`, `price`, `measurement`, `best_offer`, `category_id`) VALUES
(1, 1, 'nirama', 'Rin Refresh Detergent Powder ', 'https://www.bigbasket.com/media/uploads/p/l/299468-2_3-rin-refresh-lemon-rose-detergent-powder.jpg?tr=w-1080,q=80', 10, '65 gm', '', 2),
(2, 1, 'nirama', 'Rin Refresh Lemon & Rose Detergent Powder, 1 kg', 'https://www.bigbasket.com/media/uploads/p/l/267012_9-rin-refresh-lemon-rose-detergent-powder.jpg?tr=w-1080,q=80', 103, '1 kg', '', 2),
(3, 1, 'Rin', 'Rin Detergent Bar', 'https://dms.mydukaan.io/700x700/webp/projecteagle/images/6a9afbf1-f23e-4bc4-89db-63a73a94571b.jpg', 10, '', '', 2),
(4, 1, 'Rin', 'Rin Detergent Bar, 4x250 g Multipack', 'https://www.bigbasket.com/media/uploads/p/m/1206447_1-rin-detergent-bar.jpg?tr=w-1200,q=80', 100, '', '', 2),
(5, 1, 'Rin', 'Rin Detergent Bar, 250 g', 'https://www.bigbasket.com/media/uploads/p/l/40002072_7-rin-detergent-bar.jpg?tr=w-1080,q=80', 25, '', '', 2),
(6, 2, 'Salt, Mith', 'Tata Salt Vacuum Evaporated Iodised Salt -Helps Mental Development, 1 kg Pouch', 'https://www.bigbasket.com/media/uploads/p/l/241600_7-tata-salt-iodized.jpg?tr=w-1080,q=80', 24, '1 Kg', '', 7),
(7, 2, 'Salt, Mith', 'Tata Salt Vacuum Evaporated Iodised Salt -Helps Mental Development, 1 kg Pouch', 'https://www.bigbasket.com/media/uploads/p/l/241600_7-tata-salt-iodized.jpg?tr=w-1080,q=80', 55, '2 Kg', '', 7),
(8, 2, 'Salt, Mith', 'Aashirvaad Salt/Uppu - Iodised, 1 kg Pouch', 'https://www.bigbasket.com/media/uploads/p/l/236834_6-aashirvaad-salt-iodised.jpg?tr=w-1080,q=80', 22, '1 Kg', '', 7),
(9, 3, 'sugar, Sakhar', 'Madhur Sugar - Pure & Hygienic, Fine Grain, Natural, Sulphur Free, 1 kg', 'https://www.bigbasket.com/media/uploads/p/l/40253563_1-madhur-sugar-pure-hygienic-fine-grain-natural-sulphur-free.jpg?tr=w-1080,q=80', 52, '1 Kg', '', 7),
(10, 3, 'jaggery/gud', 'gud', 'https://dms.mydukaan.io/700x700/webp/projecteagle/images/aefdde09-bf87-4820-aada-e18ddb32a197.jpg', 40, '1 Kg', '', 7),
(11, 15, 'Sunflower Oil', 'Sunny Sun Lite Refined Sunflower Oil - Contains Vitamin A, D & E, 1 L Pouch', 'https://www.bigbasket.com/media/uploads/p/l/30003349_5-sunny-sunflower-oil-lite.jpg?tr=w-1080,q=80', 108, '1 L', '', 8),
(12, 15, 'Sunflower Oil', 'Fortune Sun lite Refined Sunflower Oil - Fortified with Vitamin A & Vitamin D, 5 L Can', 'https://www.bigbasket.com/media/uploads/p/l/274148_14-fortune-sun-lite-sunflower-refined-oil.jpg', 574, '5 L', '', 8),
(13, 15, 'Sunflower Oil', 'Saffola  Sun lite Refined Sunflower Oil - Fortified with Vitamin A & Vitamin D, 1 L Can', 'https://dms.mydukaan.io/700x700/webp/projecteagle/images/b74fd4da-d63b-4cf3-91ce-f89a73733705.jpg', 110, '1 L', '', 8),
*/

const orderProductList= [
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

class OrderAgain extends Component{
    state = {
        orderProductList: orderProductList
    }
    render(){
        const {orderProductList} = this.state
        const { homeSection } = this.props
        
        return(
            <>
                <Products list= {orderProductList} headingText= "Order Again" homeSection={homeSection}/>
            </>
        )
    }
}

export default OrderAgain

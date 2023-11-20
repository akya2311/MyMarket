import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Component } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import Categories from "./components/Categories/categories";
import OrderAgain from "./components/OrderAgain/OrderAgain";
import AllProducts from "./components/AllProducts/AllProducts";
import SingleProduct from "./components/SingleProduct/SingleProduct";
//import Newsletter from "./components/Footer/Newsletter/Newsletter";
//import Products from "./components/Products/Products";
import CartContext from './context/CartContext'
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Singnup from "./components/Singnup/Singnup";
import ReactSlick from "./components/ReactSlick/ReactSlick";
import Owner from "./components/Owner/Owner";
import DailyUseProduct from "./components/DailyUseProduct/DailyUseProduct";


//import AppContext from "./utils/context";

/*[{'Cleaning & HouseHold', 2, 'https://i.postimg.cc/rsC3P6X5/close-up-shot-woman-has-bugged-eyes-points-aside-with-index-finger-wears-headband.jpg'}
('Beauty & Hygiene', 4, 'https://dms.mydukaan.io/250x250/webp/upload_file_service/97dd73b0-7dde-4330-b9cc-1d1ce6568acc/images(1).jpg'),
('Dry Fruits ', 5, 'https://i.postimg.cc/4yTnLQJr/healthy-assortment-dry-fruits-top-view.jpg'),
('Rice Dal & Pulses', 6, 'https://i.postimg.cc/rwDS5NQq/pexels-polina-tankilevitch-4110255-1.jpg'),
('Salt & Sugar', 7, 'https://dms.mydukaan.io/250x250/webp/upload_file_service/a3e4b99b-db0e-46b7-96a7-681513ffe1c9/000000-c511ebc6-2f94-4b2f-8d44-d6cdaae7ff85.png'),
('Oil & Ghee ', 8, 'https://dms.mydukaan.io/250x250/webp/upload_file_service/5b504726-d725-4bda-84c0-e6af30bd80cc/Oil-ghee-vanspati-600x315.jpg'),
('Personal Care: soap, Tooth Brushs, Hair oil /Hair Color,Shampoo & Conditioner', 9, 'https://dms.mydukaan.io/250x250/webp/upload_file_service/4d784ff5-f4be-4f4d-be77-e40c5a75ca1e/icon_cat_163_v_3_500_1553422430-500x250.jpg'),
('Masala & Spices', 10, 'https://i.postimg.cc/NfKk2CRf/pexels-shantanu-pal-2802527.jpg'),
('Atta / Flours & Suji ', 11, 'https://dms.mydukaan.io/250x250/webp/projecteagle/images/641424b3-71af-44de-9af2-cdedbb6d508e.jpg'),
('Sauces Spread ', 12, 'https://dms.mydukaan.io/250x250/webp/upload_file_service/44ec82b4-5461-45a9-bd53-fe87f2f89755/Sauces-Ketchup-Spreads.jpg'),
('Breakfast & instant breakfast: maggi, pasta', 13, 'https://dms.mydukaan.io/250x250/webp/upload_file_service/075b1b8e-4903-4e7c-8380-e13f9d22f243/OATS-600x315.jpg'),
('Beverages & Health drink', 14, 'https://dms.mydukaan.io/250x250/webp/upload_file_service/61bb58d5-8b69-4a15-8371-5832b4cb4ecf/images(1).jpg');

]*/

const getCartListFromLocalStorage = () => {
  const stringifiedCartList = localStorage.getItem('cartData')
  const parsedCartList = JSON.parse(stringifiedCartList)
  if (parsedCartList === null) {
    return []
  }
  return parsedCartList
}


class App extends Component {
  state = {
    cartList: getCartListFromLocalStorage(),
  }
  
  setToLocalStorage = () => {
    const { cartList } = this.state
    localStorage.setItem('cart_list', JSON.stringify(cartList))
  }

  removeAllCartItems = () => {
    this.setState({ cartList: [] })
  }

  incrementCartItemQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachCartItem => {
        if (id === eachCartItem.id) {
          const updatedQuantity = eachCartItem.quantity + 1
          return { ...eachCartItem, quantity: updatedQuantity }
        }
        return eachCartItem
      }),
    }))
  }

  decrementCartItemQuantity = id => {
    const { cartList } = this.state
    const productObject = cartList.find(eachCartItem => eachCartItem.id === id)
    if (productObject.quantity > 1) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity - 1
            return { ...eachCartItem, quantity: updatedQuantity }
          }
          return eachCartItem
        }),
      }))
    } else {
      this.removeCartItem(id)
    }
  }

  removeCartItem = id => {
    const { cartList } = this.state
    const updatedCartList = cartList.filter(
      eachCartItem => eachCartItem.id !== id,
    )
    this.setState({ cartList: updatedCartList })
  }

  addCartItem = product => {
    const { cartList } = this.state
    const productObject = cartList.find(
      eachCartItem => eachCartItem.id === product.id,
    )
    this.setState({ ownerList: product })
    if (productObject) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (productObject.id === eachCartItem.id) {
            const updatedQuantity = product.quantity

            return { ...eachCartItem, quantity: updatedQuantity }
          }
          return eachCartItem
        }),
      }))
    } else {
      const updatedCartList = [...cartList, product]
      this.setState({ cartList: updatedCartList })
    }
  }
  render() {
    const { cartList } = this.state

    localStorage.setItem('cartData', JSON.stringify(cartList))
    return (
      <div>
        <BrowserRouter>
          <CartContext.Provider
            value={{
              cartList,
              addCartItem: this.addCartItem,
              removeCartItem: this.removeCartItem,
              incrementCartItemQuantity: this.incrementCartItemQuantity,
              decrementCartItemQuantity: this.decrementCartItemQuantity,
              removeAllCartItems: this.removeAllCartItems,
            }}
          >
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ak" element={<DailyUseProduct />} />
             
              <Route path="/owner" element={<Owner />} />
              <Route path="/login/" element={<Login />} />
              <Route path="/singnup/" element={<Singnup />} />
              <Route path="/categories/" element={<Categories />} />
              <Route path="/Cart/" element={<Cart />} />
              <Route path="/category/:id" element={<Category />} />
              <Route path="/orderagain/" element={<OrderAgain />} />
              <Route path="/allproduct/" element={<AllProducts />} />
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="/reactslick/" element={<ReactSlick />} />
            </Routes>
            <Footer />
          </CartContext.Provider>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
import "./categories.scss";
//import cart1 from "../../../assets/category/cat-1.jpg"
import { Component } from "react";
import Loader from 'react-loader-spinner'
import CategoryCard from "../CategoryCard/CategoryCard"
//import CartContext from '../../context/CartContext'
const categoris = [
  {
    "name": "Cleaning & HouseHold",
    "id": 2,
    "img": "https://i.postimg.cc/rsC3P6X5/close-up-shot-woman-has-bugged-eyes-points-aside-with-index-finger-wears-headband.jpg"
  },
  {
    "name": "Beauty & Hygiene",
    "id": 4,
    "img": "https://dms.mydukaan.io/250x250/webp/upload_file_service/97dd73b0-7dde-4330-b9cc-1d1ce6568acc/images(1).jpg"
  },
  {
    "name": "Dry Fruits ",
    "id": 5,
    "img": "https://i.postimg.cc/4yTnLQJr/healthy-assortment-dry-fruits-top-view.jpg"
  },
  {
    "name": "Rice Dal & Pulses",
    "id": 6,
    "img": "https://i.postimg.cc/rwDS5NQq/pexels-polina-tankilevitch-4110255-1.jpg"
  },
  {
    "name": "Salt & Sugar",
    "id": 7,
    "img": "https://dms.mydukaan.io/250x250/webp/upload_file_service/a3e4b99b-db0e-46b7-96a7-681513ffe1c9/000000-c511ebc6-2f94-4b2f-8d44-d6cdaae7ff85.png"
  },
  {
    "name": "Oil & Ghee ",
    "id": 8,
    "img": "https://dms.mydukaan.io/250x250/webp/upload_file_service/5b504726-d725-4bda-84c0-e6af30bd80cc/Oil-ghee-vanspati-600x315.jpg"
  },
  {
    "name": "Personal Care: soap, Tooth Brushs, Hair oil /Hair Color,Shampoo & Conditioner",
    "id": 9,
    "img": "https://dms.mydukaan.io/250x250/webp/upload_file_service/4d784ff5-f4be-4f4d-be77-e40c5a75ca1e/icon_cat_163_v_3_500_1553422430-500x250.jpg"
  },
  {
    "name": "Masala & Spices",
    "id": 10,
    "img": "https://i.postimg.cc/NfKk2CRf/pexels-shantanu-pal-2802527.jpg"
  },
  {
    "name": "Atta / Flours & Suji ",
    "id": 11,
    "img": "https://dms.mydukaan.io/250x250/webp/projecteagle/images/641424b3-71af-44de-9af2-cdedbb6d508e.jpg"
  },
  {
    "name": "Sauces Spread ",
    "id": 12,
    "img": "https://dms.mydukaan.io/250x250/webp/upload_file_service/44ec82b4-5461-45a9-bd53-fe87f2f89755/Sauces-Ketchup-Spreads.jpg"
  },
  {
    "name": "Breakfast & instant breakfast: maggi, pasta",
    "id": 13,
    "img": "https://dms.mydukaan.io/250x250/webp/upload_file_service/075b1b8e-4903-4e7c-8380-e13f9d22f243/OATS-600x315.jpg"
  },
  {
    "name": "Beverages & Health drink",
    "id": 14,
    "img": "https://dms.mydukaan.io/250x250/webp/upload_file_service/61bb58d5-8b69-4a15-8371-5832b4cb4ecf/images(1).jpg"
  },
  {
    "name": "chocolate",
    "id": 30,
    "img": "https://i.postimg.cc/QMYdZY48/Adobe-Stock-264449262-Preview.jpg"
  }
]

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
}
class Categories extends Component {
    state = {
        apiStatus: apiStatusConstants.initial,
        categoris: categoris,
        categoryList: [],
    }

    componentDidMount() {
        this.getSuggestionCategory()
    }

    getSuggestionCategory = async () => {
        
      const {categoris} = this.state
       
        const updateList = categoris.map(each => ({
            key: each.id,
            id: each.id,
            name: each.name,
            img: each.img,
        }))
        this.setState({
            categoryList: updateList,
            apiStatus: apiStatusConstants.success,
        })
    }

    renderCategoey = () => {
        const { categoryList } = this.state

        return (

            <div className="categories">
                {categoryList.map((each) => (
                    <CategoryCard key={each.id} details={each} />
                ))}
            </div>


        )
    }

    renderLoadingView = () => (
        <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    )

    renderFailureView = () => (
        <div>
            <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="failure view"
                className="jobs-failure-img"
            />
            <h1>Oops! Something Went Wrong</h1>
            <p className="jobs-failure-description">
                We are having some trouble to complete your request.Please try again.
            </p>

            <button
                className="button"
                type="button"
                onClick={this.getSuggestionVideos}
            >
                Retry
            </button>

        </div>
    )


    renderAllCategory = () => {
        const { apiStatus } = this.state

        switch (apiStatus) {
            case apiStatusConstants.success:
                return this.renderCategoey()

            case apiStatusConstants.inProgress:
                return this.renderLoadingView()
            case apiStatusConstants.failure:
                return this.renderFailureView()
            default:
                return null
        }
    }

    render() {
        return (

            <div className="shop-by-category">
                <h1 className="main-heading">Shop By Category</h1>
                <hr />
                {this.renderAllCategory()}
            </div>

        );
    }
}

export default Categories;
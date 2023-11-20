import "./Home.scss";
import Categories from "../Categories/categories";
import HomeOrderAgain from "../HomeOrderAgain/HomeOrderAgain";
import AllProducts from "../AllProducts/AllProducts";
import HomeSection from "../HomeSection/HomeSection";
import Slider from "react-slick";
const Home = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    }
    return (
        <div className="main-context">
            <div className="layout">
                <ul className="carousel-section-card">
                    <Slider {...settings} className="carousal-section" >
                        <li>
                            <img src="https://i.postimg.cc/hjZMBWvq/happy-diwali-clay-diya-lamps-lit-during-diwali-celebration.jpg" alt="" />
                        </li>
                        <li>
                            <img src="https://i.postimg.cc/vTWb4dKp/delicious-indian-dessert-flat-lay.jpg" alt="" />
                        </li>
                        <li>
                            <img src="https://i.postimg.cc/cLksYBsh/udayaditya-barua-xis-PXJqw-Qk-A-unsplash.jpg" alt="" />
                        </li>
                        <li>
                            <img src="https://i.postimg.cc/BnJ2V4fb/sl-051121-42790-30.jpg" alt="" />
                        </li>
                        <li>
                            <img src="https://i.postimg.cc/fWr9vmBH/sl-042921-42480-15.jpg" alt="" />
                        </li>
                        <li>
                            <img src="https://i.postimg.cc/43Yv6G90/19187596.jpg" alt="" />
                        </li>
                        <li>
                            <img src="https://i.postimg.cc/BnJ2V4fb/sl-051121-42790-30.jpg" alt="" />
                        </li>
                        <li>
                            <img src="https://i.postimg.cc/FRjTSmt4/sl-051121-42790-97.jpg" alt="" />
                        </li>
                        <li>
                            <img src="https://i.postimg.cc/L5Jh74Hd/15554.jpg" alt="" />
                        </li>
                    </Slider>
                </ul>
                <Categories />
                <HomeOrderAgain />
                <HomeSection />
                <AllProducts />
            </div>
        </div>
    )
};
export default Home;

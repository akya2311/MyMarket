import "./HomeProductCard.scss";
import { useNavigate } from "react-router-dom";
const HomeProductCard = (props) => {
  const { list, sectionname, bagroundColor } = props
  const navigate = useNavigate();
  return (
    <div className='card-bg-container' style={{ backgroundColor: bagroundColor }}>
      <h1>{sectionname}</h1>
      <div className='card'>
        <div className='home-card-section-1' >
          <div className='card-name'>
            <p>{list[0].name}</p>
            <p>{list[0].details}</p>
          </div>
          <img src={list[0].img} alt="" onClick={() => navigate(`/product/${list[0].product_id}`)}/>
        </div>
        <div className='home-card-section'>
          <img src={list[1].img} alt="" onClick={() => navigate(`/product/${list[1].product_id}`)}/>
          <div className='card-name'>
            <p>{list[1].name}</p>
          </div>
        </div>
        <div className='home-card-section'>
          <img src={list[2].img} alt="" onClick={() => navigate(`/product/${list[2].product_id}`)}/>
          <div className='card-name'>
            <p>{list[2].name}</p>
          </div>
        </div>
        <div className='home-card-section'>
          <img src={list[3].img} alt="" onClick={() => navigate(`/product/${list[3].product_id}`)}/>
          <div className='card-name'>
            <p>{list[3].name}</p>
          </div>
        </div>
        <div className='home-card-section'>
          <img src={list[4].img} alt="" onClick={() => navigate(`/product/${list[4].product_id}`)}/>
          <div className='card-name'>
            <p>{list[4].name}</p>
          </div>
        </div>
      </div>
    </div>


  )
}
export default HomeProductCard
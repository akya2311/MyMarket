import "./Banner.scss";

const Banner = (props) => {
    const {img} = props
    return(
        <div className="card-bg-container">
            <img src={img} alt=""/>
        </div>
    )
}

export default Banner
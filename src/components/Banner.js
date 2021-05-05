import banner from "../banner.jpg";
import "../css/Banner.css";
const Banner = () => {
    return (
        <div className="banner">
            <div className="text">
                <p className="text__big">Fashion week coming...</p>
                <p className="text__small">Go find your excellent clothes</p>
                <button className="btn_explore">Explore</button>
            </div>
            <img className="image" src={banner} alt="banner" />
        </div>)
}

export default Banner;

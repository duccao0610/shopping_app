import { Facebook, Instagram, Twitter } from "react-feather";
import "../css/Footer.css";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__logo">360 Boutique</div>
            <div className="footer__media">
                <div><Facebook /></div>
                <div><Instagram /></div>
                <div><Twitter /></div>
            </div>
            <div className="footer__info">
                <p className="footer__quote">Welcome to 360 Boutique store</p>
                <p className="footer__copyright">Copyright ©2021,360 Boutique</p>
            </div>
        </div>
    )
}
export default Footer;

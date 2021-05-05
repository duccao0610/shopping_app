import { useState } from "react";
import ColorPicker from "./ColorPicker";
import "../css/ProductItem.css";
const ProductItem = (props) => {
    const [selectedColor, setSelectedColor] = useState(props.item.colors[0].code);
    const productImage = props.item.colors.find((ele) => ele.code === selectedColor).image;
    const [btnAddVisible, setBtnAddVisible] = useState(false);
    const handlePick = (code) => {
        setSelectedColor(code);
    }
    const handleMouseEnter = () => {
        setBtnAddVisible((prev) => !prev);
    };
    const handleMouseLeave = () => {
        setBtnAddVisible((prev) => !prev);
    };

    const handleOnClick = () => {
        const findIndex = props.onCart.find(
            (ele) => ele.code === props.item.code
                && ele.selectedColor === selectedColor
        );
        if (findIndex === undefined) {
            props.addToCart({
                id: new Date().getTime(),
                selectedColor: selectedColor,
                quantity: 1,
                ...props.item
            })
        }
    }
    return (
        <div
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="product_item">

            <img className="product_item__image" alt="image_product" src={productImage} />
            <ColorPicker colors={props.item.colors} onPick={handlePick} />
            <div className="product_item__name">{props.item.name}</div>
            <div className="product_item__code">{props.item.code}</div>
            <div className="product_item__price">{props.item.price}đ</div>
            {btnAddVisible ? (
                <button onClick={handleOnClick} className="btn_add">
                    + Thêm vào giỏ hàng
                </button>
            ) : null}
        </div>
    )
}
export default ProductItem;
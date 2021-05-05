import { useState } from "react";
import "../css/ProductOnCart.css";
import ColorPicker from "./ColorPicker";
import { Trash2, PlusCircle, MinusCircle } from "react-feather";
const ProductOnCart = (props) => {
    const image = props.item.colors.find((ele) => ele.code === props.item.selectedColor).image;
    const [quantity, setQuantity] = useState(props.item.quantity);

    const handleMinus = () => {
        if (quantity >= 2) {
            setQuantity(quantity - 1)
            props.onCartUpdate({
                ...props.item,
                quantity: quantity,
            }, "minus")
        }
    }
    const handlePlus = () => {
        setQuantity(quantity + 1);
        props.onCartUpdate({
            ...props.item,
            quantity: quantity,
        }, "plus")
    }
    return (
        <div className="product_on_cart">
            <img alt="img" className="product__image" src={image} />
            <div className="right_side">
                <div className="product__name">{props.item.name}</div>
                <div className="product__code">{props.item.code}</div>
                <ColorPicker productId={props.item.id} productCode={props.item.code} colors={props.item.colors} onCartChange={props.onCartColorChange} isOnCart={true} />
                <div className="product_price">
                    <div className="product_price__price">{props.item.price}đ</div>
                    <div className="product_price__quantity">
                        Số lượng:
                        <MinusCircle className="btn" onClick={handleMinus} />
                        {/* <button onClick={handleMinus}>-</button> */}
                        <span>{quantity}</span>
                        <PlusCircle className="btn" onClick={handlePlus} />
                        {/* <button onClick={handlePlus}>+</button> */}
                    </div>
                </div>
                {/* <button onClick={() => {
                    props.onRemove(props.item.id)
                }}>Xóa</button> */}
                <Trash2 className="btn" onClick={() => {
                    props.onRemove(props.item.id)
                }} />
            </div>
        </div>
    )
}
export default ProductOnCart;

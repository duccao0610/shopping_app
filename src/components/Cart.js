import { ShoppingBag, XSquare } from "react-feather";
import { useState } from "react";
import "../css/Cart.css";
import ProductOnCart from "./ProductOnCart";
const Cart = (props) => {
    const [cartVisible, setCartVisible] = useState(false);
    const handleViewCart = () => {
        setCartVisible(prev => !prev);
    }

    let totalQ = 0;
    let totalP = 0;
    props.onCart.forEach((item) => {
        totalQ += item.quantity;
        totalP += item.price;
    });

    return (
        <div className="cart">
            <div className="cart__icon">
                <ShoppingBag className="icon" onClick={handleViewCart} />
                {props.onCart.length}
            </div>

            {cartVisible ?
                (<div className="side">
                    <div className="side__title">Your Cart
                        {/* <button
                            className="btn_close"
                            type="button"
                            onClick={handleViewCart}
                        >X
                        </button> */}
                        <XSquare
                            className="btn_close"
                            onClick={handleViewCart}
                        />
                    </div>
                    <div className="side__item_list">
                        {props.onCart.map((item, index) => {
                            return (
                                <ProductOnCart onRemove={props.handleRemove} onCartColorChange={props.onCartColorChange} onCartUpdate={props.onCartUpdate} item={item} key={index + new Date()} />
                            )
                        })}
                    </div>
                    <div className="side__quantity">
                        <span>Số lượng sản phẩm: </span>
                        <div className="value">{totalQ}</div>
                    </div>
                    <div className="side__price">
                        <span>Tổng giá trị: </span>
                        <div className="value">{totalP}đ</div>
                    </div>
                </div>)
                : null}
        </div>
    )
}

export default Cart;

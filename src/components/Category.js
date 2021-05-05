import ProductItem from "./ProductItem";
import "../css/Category.css";
const Category = (props) => {
    return (
        <div className="category">
            <h1>{props.title}</h1>
            <div className="product_list">
                {props.list.map((item, index) => {
                    return (
                        <ProductItem
                            onCart={props.onCart}
                            addToCart={props.addToCart}
                            key={index + new Date().getTime()}
                            item={item}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default Category;
import products from "../data.json";
import ProductItem from "./ProductItem";
import "../css/Category.css";
const Category = (props) => {
    const productList = products.filter(
        (product) => product.category === props.title
    )
    return (
        <div className="category">
            <h1>{props.title}</h1>
            <div className="product_list">
                {productList.map((item, index) => {
                    return (
                        <ProductItem
                            onCart={props.onCart}
                            addToCart={props.addToCart}
                            key={index}
                            item={item}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default Category;
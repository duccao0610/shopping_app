import './App.css';
import Banner from './components/Banner';
import Category from './components/Category';
import NavBar from './components/NavBar';
import { useState } from "react";
import Footer from './components/Footer';
import products from "./data.json";


const App = () => {
  const categories = ["men", "women", "boy", "girl"];
  const [onCart, setOnCart] = useState([]);
  console.log("CART", onCart);
  const handleAddToCart = (item) => {
    setOnCart((prev) => {
      return [...prev, item];
    });
  };

  const handleCartUpdate = (item, action) => {
    const indexToUpdate = onCart.findIndex((ele) => ele.code === item.code && ele.selectedColor === item.selectedColor);
    const updateOnCart = [...onCart];
    let calQuantity;
    if (action === "minus") {
      updateOnCart[indexToUpdate].quantity = item.quantity - 1;
      calQuantity =
        updateOnCart[indexToUpdate].quantity /
        (updateOnCart[indexToUpdate].quantity + 1);
    }
    if (action === "plus") {
      updateOnCart[indexToUpdate].quantity = item.quantity + 1;
      calQuantity =
        updateOnCart[indexToUpdate].quantity /
        (updateOnCart[indexToUpdate].quantity - 1);
    }
    updateOnCart[indexToUpdate].price *= calQuantity;
    setOnCart(updateOnCart);
  }

  const handleColorChangeOnCart = (code, productCode, productId) => {
    console.log(code);
    console.log(productCode);
    const indexToUpdate = onCart.findIndex((ele) => ele.code === productCode && ele.id === productId);
    const checkExistColor = onCart.find((ele) => ele.selectedColor === code);
    const updateColorOnCart = [...onCart];
    if (checkExistColor === undefined) {
      updateColorOnCart[indexToUpdate].selectedColor = code;
    }
    setOnCart(updateColorOnCart);
  }
  const handleRemove = (productId) => {
    const indexToRemove = onCart.findIndex((ele) => ele.id === productId);
    console.log(indexToRemove);
    const updateRemoveOnCart = [...onCart];
    updateRemoveOnCart.splice(indexToRemove, 1);
    setOnCart(updateRemoveOnCart);
  }

  const [keyword, setKeyword] = useState("");
  const bannerVisible = (keyword === "" ? true : false);
  const handleSearch = (keyword) => {
    setKeyword(keyword);
  };

  return (
    <div className="App">
      <NavBar
        handleSearch={handleSearch}
        handleRemove={handleRemove}
        onCart={onCart}
        onCartUpdate={handleCartUpdate}
        onCartColorChange={handleColorChangeOnCart} />
      {bannerVisible ? <Banner /> : null}
      <div className="category_list">
        {categories.map((category) => {
          return <Category
            keyword={keyword}
            list={products.filter(
              (product) => product.category === category &&
                (product.name.toUpperCase().includes(keyword.toUpperCase()) ||
                  product.code.includes(keyword.toUpperCase())
                )
            )}
            key={category + new Date().getTime()}
            onCart={onCart}
            addToCart={handleAddToCart}
            title={category} />
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;

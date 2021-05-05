import React from 'react'
import SearchForm from './SearchForm'
import "../css/NavBar.css";
import Cart from './Cart';

const NavBar = (props) => {
    return (
        <div className="nav_bar">
            <div className="nav_bar__logo"> 360 Boutique</div>
            <div className="nav_bar__rightside">
                <SearchForm handleSearch={props.handleSearch} />
                <Cart
                    handleRemove={props.handleRemove}
                    onCart={props.onCart}
                    onCartUpdate={props.onCartUpdate}
                    onCartColorChange={props.onCartColorChange} />
            </div>
        </div>
    )
}

export default NavBar

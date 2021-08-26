import "./NavBar.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const NavBar = () => {
    const cartTotalCount = useSelector(state => state.cart.totalCount)

    return (
        <div className={"navbar"}>
            <div className={"logo"}>
                <Link to="/"><div><img className={"logopic"} src={"airplane.svg"}/></div></Link>
                <div className={"logotext"}>E-Shop</div>
            </div>

            <div className={"mainbar"}>
                <Link to={"a"}><span>Sort</span></Link>
                <Link to={"#"}>By</Link>
                <Link to={"#"}>Filter</Link>
                <Link to={"#"}>Click</Link>
                <Link to={"/cart"}>Cart: {cartTotalCount}</Link>
            </div>
        </div>
    )
}

export default NavBar
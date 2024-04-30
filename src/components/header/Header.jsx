import { Link } from "react-router-dom"
import CartBtn from "../cartBtn/CartBtn"

import './Header.css';
import { useEffect } from "react";
import { setup } from "../../ia/ia";

export default function Header() {

    useEffect(() => {
        setup()
    }, [])

    return (
        <header className="container">
            <nav className="navbar">

                {/* Logo */}
                <div className="nav-logo">
                    <Link to='/'>
                        <img className='nav-logo-img' src="logo.png"/>
                    </Link>
                </div>

                <input type="text" placeholder="Search ..." id="filled-basic" />
                <span id="pred_labels"></span>

                {/* login & signup links */}
                <div className="nav-links">
                    <Link to='/login'>Accedé</Link>
                    <Link to='/signup'>Registrate</Link>
                </div>

                {/* cart button */}
                <CartBtn />
                
            </nav>
        </header>
    )
}
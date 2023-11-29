import { Link } from "react-router-dom"
import CartBtn from "../cartBtn/CartBtn"

import './Header.css';

export default function Header() {

    return (
        <header className="container">
            <nav className="navbar">

                {/* Logo */}
                <div className="nav-logo">
                    <Link to='/'>
                        <img className='nav-logo-img' src="logo.png"/>
                    </Link>
                </div>

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
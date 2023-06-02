import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { properties } from "./Context";
import { BsEnvelopePaperFill } from 'react-icons/bs';

export default function Header() {
    const { loader, setLoader, openEnvelope, setOpenEnvelope, cart } = useContext(properties);
    const [lineX, setLineX] = useState(false);

    const burgerwiThLoader = () => {
        setLoader(!loader)
        document.querySelector('.navigation > ul').classList.toggle('openNav')
        setLineX(!lineX);
    }

    
    return (
        <header>
            <Link to="/" onClick={() => setLoader(!loader)}>Enjoy Travel</Link>
            <nav className="navigation">
                <ul>
                    <li onClick={burgerwiThLoader}><NavLink to="/">Home</NavLink></li>
                    <li onClick={burgerwiThLoader}><NavLink to="/about">About us</NavLink></li>
                    <li onClick={burgerwiThLoader}><NavLink to="/service">Service</NavLink></li>
                    <li onClick={burgerwiThLoader}><NavLink to="/packages">Packages</NavLink></li>
                    <li onClick={burgerwiThLoader}><NavLink to="/booking">Booking</NavLink></li>
                    <li onClick={burgerwiThLoader}><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
            <div className="icons">
                <div className="count-cart">
                    <BsEnvelopePaperFill className="envelope" onClick={() => setOpenEnvelope(!openEnvelope)} />
                    {cart.length > 0 ? <span>{cart.length}</span> : ''}
                </div>
                <div className="burger-menu" onClick={() => {
                    document.querySelector('.navigation > ul').classList.toggle('openNav')
                    setLineX(!lineX);
                }}>
                    <div className="line" style={{ transform: lineX ? 'rotate(-45deg)' : 'rotate(0deg)' }}></div>
                    <div className="line" style={{ width: lineX ? '0' : '100%' }}></div>
                    <div className="line" style={{ transform: lineX ? 'rotate(45deg)' : 'rotate(0deg)' }}></div>
                </div>
            </div>
        </header>
    )
}


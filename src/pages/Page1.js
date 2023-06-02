import { useContext } from 'react';
import { properties } from '../components/Context';
export default function Page1() {
    const { addCart, total, setTotal, cart, filterCountries } = useContext(properties);
    return (
        <div className="menu-hotels">
            {
                filterCountries.map((hotel, i) => {
                    return (
                        <div className='hotel-item' id={Math.random()}>
                            <div className="hotel-pic" style={{ background: `url(${hotel.picture})` }}></div>
                            <h2>{hotel.name}</h2>
                            <a href="/">{hotel.distance}</a>
                            <p>{hotel.info}</p>
                            <div className="price">
                                <span>{hotel.days}</span>
                                <h3>{hotel.data}$</h3>
                            </div>
                            <marquee behavior="alternate">Tour in {hotel.country}</marquee>
                          <button style={{ background: cart.includes(hotel) ? 'var(--primary-sky-blue)' : 'var(--primary-dark-blue)'}} onClick={(e) => {
                                addCart(hotel);
                                if (!cart.includes(hotel)) {
                                    setTotal(total + hotel.data);
                                }
                                else {
                                    e.target.parentElement.classList.add('shake');
                                    setTimeout(() => {
                                        e.target.parentElement.classList.remove('shake');
                                    }, 500);
                                }
                            }}>Book Now</button>
                        </div> 
                    )
                })
            }
        </div>
    )
}
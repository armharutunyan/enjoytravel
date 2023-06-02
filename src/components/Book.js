import { useContext } from "react"
import { properties } from "./Context"
import { FaTrash } from 'react-icons/fa'
import Order from "./Order";

export default function Book() {
    const { openEnvelope, setOpenEnvelope, cart, setCount, removeCart, setMoney, total, setTotal,setOpenOrder } = useContext(properties);
    return (
        <div className="book-container" style={{ left: openEnvelope ? '0' : '100%' }}>
            {cart.length === 0 ? <img src="https://www.bangladesh-made.com/assets/images/no-product-found.png" alt="" /> : <div className="book-container-block">
                <h2>Welcome to Enjoy Tour shop cart</h2>
                <h3>Grand Total is {total}$</h3>
                <button className="order" onClick={() => setOpenOrder(true)}>Order Now</button>
                <div className="book-content">
                    {cart.map(bookitem => {
                        return <div className="book-item" key={Math.random()}>
                            <img src={bookitem.picture} alt="" />
                            <span className="book-info">
                                <h2>{bookitem.name}</h2>
                                <a href="/">{bookitem.distance}</a>
                                <p>{bookitem.info}</p>
                            </span>
                            <div className="price">
                                <div className="buttons">
                                    <span>Check Your Hotels{bookitem.quanity}</span>
                                    <button onClick={() => {
                                        if (bookitem.quanity <= 1) {
                                            setCount(bookitem.quanity = 1);
                                        }
                                        else {
                                            setCount(bookitem.quanity -= 1);
                                            setMoney(bookitem.price = bookitem.quanity * bookitem.data)
                                            setTotal(total - bookitem.data);
                                        }
                                    }}>{bookitem.quanity === 1 ? <FaTrash onClick={() => {
                                        removeCart(bookitem.id);
                                        setTotal(total - bookitem.data);
                                        if (cart.length <= 1) {
                                            setOpenEnvelope(false);
                                        }
                                    }} /> : '-'}</button>
                                    <button onClick={() => {
                                        setCount(bookitem.quanity += 1);
                                        setMoney(bookitem.price = bookitem.quanity * bookitem.data);
                                        setTotal(total + bookitem.data);
                                    }}>+</button>
                                </div>
                                <h3>{bookitem.price}$</h3>
                            </div>
                            <span className="tour">{bookitem.country}</span>
                        </div>
                    })}
                </div>
            </div>}
            <Order />
        </div>
    )
}
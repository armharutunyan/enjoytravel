import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Service from './pages/Service';
import Packages from './pages/Packages';
import { properties } from './components/Context';
import { useEffect, useState } from 'react';
import Booking from './pages/Booking';
import Book from './components/Book';
import { hotels } from './components/hotels';
import Contact from './pages/Contact';

function App() {
  const [loader, setLoader] = useState(false);
  const [openEnvelope, setOpenEnvelope] = useState(false);
  const [count, setCount] = useState(0);
  const [money, setMoney] = useState(0);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [filterCountries, setFilterCountries] = useState(hotels);
  const [openOrder, setOpenOrder] = useState(false);
  const [cash, setCash] = useState(Math.round(Math.random() * 15000));
  

  const addCart = item => {
    if (cart.includes(item)) {
      return false
    }
    else {
      setCart([...cart, item]);
    }
  }

  const removeCart = id => {
    setCart([...cart.filter(it => it.id !== id)]);
  }

  const filterElements = current => {
    const result = hotels.filter(data => data.country === current)
    setFilterCountries(result);
  }

  const elements = {
    loader, setLoader,
    openEnvelope, setOpenEnvelope,
    addCart, removeCart,
    cart, setCart,
    setCount, setMoney,
    total, setTotal,
    filterCountries, setFilterCountries,
    filterElements, openOrder, setOpenOrder,
    cash, setCash,
  }

  useEffect(() => {
    let load = document.querySelector('.loader');
    load.style.display = 'grid';
    setTimeout(() => { load.style.display = 'none' }, 3000);
  }, [loader])

  return (
    <properties.Provider value={elements}>
      <div className="App">
        <Header />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/booking' element={<Booking />}></Route>
            <Route path='/about' element={<AboutUs />}></Route>
            <Route path='/service' element={<Service />}></Route>
            <Route path='/packages' element={<Packages />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
        <div className="loader">
          <img src="https://www.bedsandtrips.com/assets/images/loader.gif" alt="" />
        </div>
      </div>
      <Book />
    </properties.Provider>
  );
}

export default App;

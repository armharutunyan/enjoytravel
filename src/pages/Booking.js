import { useContext, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Page1 from './Page1';
import { properties } from '../components/Context';

export default function Booking() {
    const [current, setCurrent] = useState(0);
    const { filterElements } = useContext(properties);
    return (
        <div className="booking-container">
            <div className="search-countries">
                <button className='prev'
                    style={{ display: current === 0 ? 'none' : 'block' }}
                    onClick={(e) => {
                        current === 0 ? e.target.disabled = true : setCurrent(current - 100); e.target.disabled = false;
                    }}
                >
                    <FaAngleLeft />
                </button>
                <button className='next' style={{ display: current > 0 ? 'none' : 'block' }} onClick={(e) => {
                    current > 0 ? e.target.disabled = true : setCurrent(current + 100); e.target.disabled = false;
                }}><FaAngleRight /></button>
                <button className='prevmedia'
                    style={{ display: current === 0 ? 'none' : 'block' }}
                    onClick={(e) => {
                        current === 0 ? e.target.disabled = true : setCurrent(current - 100); e.target.disabled = false;
                    }}
                >
                    <FaAngleLeft />
                </button>
                <button className='nextmedia' style={{ display: current > 800 ? 'none' : 'block' }} onClick={(e) => {
                    current > 800 ? e.target.disabled = true : setCurrent(current + 100); e.target.disabled = false;
                }}><FaAngleRight /></button>
                <div className="overflow-slider" style={{ left: `-${current}%` }}>
                    <div className="search-slider">
                        <div className="search-item" onClick={() => filterElements('Greece')}>
                            <div className="search-picture"><img src='https://www.travelandleisure.com/thmb/CwASoPDthL_sRQW6yA-qh-zJPlg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/santorini-POINTSGREECE0617-8cd08e70fec4471b8827dca8627b8eae.jpg' alt='' /></div>
                            <span>Greece</span>
                        </div>
                        <div className="search-item" onClick={() => filterElements('Spain')}>
                            <div className="search-picture"><img src='https://www.spain.info/export/sites/segtur/.content/imagenes/thumbnail-mapas/alcala-madrid-s378537616.jpg_617812622.jpg' alt='' /></div>
                            <span>Spain</span>
                        </div>
                        <div className="search-item" onClick={() => filterElements('Egypt')} >
                            <div className="search-picture"><img src='https://hayscruise.ams3.digitaloceanspaces.com/media-library/deal-images/2561/Egypt-Pyramids-Sphinx.jpg' alt='' /></div>
                            <span>Egypt</span>
                        </div>
                        <div className="search-item" onClick={() => filterElements('Dubai')}>
                            <div className="search-picture"><img src='https://i.pinimg.com/originals/44/6b/b3/446bb3fdde1a3f24864590ee70ec7e3c.jpg' alt='' /></div>
                            <span>Dubai</span>
                        </div>
                        <div className="search-item" onClick={() => filterElements('Brazil')}>
                            <div className="search-picture"><img src='https://canneconomy.com/wp-content/uploads/2020/02/brazil-4809003_1920.jpg' alt='' /></div>
                            <span>Brazil</span>
                        </div>
                    </div>
                    <div className="search-slider">
                        <div className="search-item" onClick={() => filterElements('Armenia')}>
                            <div className="search-picture"><img src='https://i.imgur.com/SFdVjc8.jpg' alt='' /></div>
                            <span>Armenia</span>
                        </div>
                        <div className="search-item" onClick={() => filterElements('Italy')}>
                            <div className="search-picture"><img src='https://avatars.mds.yandex.net/i?id=3d45b75c98e58633b58b808e7b462e3f0cf29381-4916254-images-thumbs&n=13' alt='' /></div>
                            <span>Italy</span>
                        </div>
                        <div className="search-item" onClick={() => filterElements('France')}>
                            <div className="search-picture"><img src='https://avatars.mds.yandex.net/i?id=ee90ac7dace9de86731623c4f7e664b98b586b53-7757111-images-thumbs&n=13' alt='' /></div>
                            <span>France</span>
                        </div>
                        <div className="search-item" onClick={() => filterElements('Germany')}>
                            <div className="search-picture"><img src='https://avatars.mds.yandex.net/i?id=e0ce75f81a59c6d41b5e12ce118ce3ccd3e37b19-8492945-images-thumbs&n=13' alt='' /></div>
                            <span>Germany</span>
                        </div>
                        <div className="search-item" onClick={() => filterElements('Poland')}>
                            <div className="search-picture"><img src='https://avatars.mds.yandex.net/i?id=5a115d8ee927246a2287e30ebaf57582-4828420-images-thumbs&n=13' alt='' /></div>
                            <span>Poland</span>
                        </div>
                    </div>
                </div>
            </div>
            <Page1 />
        </div>
    )
}


import { useContext, useState, useRef } from "react"
import { properties } from "./Context"
import { AutoTabProvider } from "react-auto-tab";

export default function Order() {
    const { openOrder, setOpenOrder, cash, setCash, total, setTotal, cart, setCart } = useContext(properties);
    const [showwarn,setShowwarn] = useState(false)
    const [valid, setValid] = useState({
        name: '',
        surname: '',
        number: '',
        date: '',
        cvv: '',
        region: '',
        code: '',
        digit1: '',
        digit2: '',
        digit3: ''
    });

    const nmR = useRef();
    const validnmsr = /^[A-Z][a-z]+$/;
    const srnR = useRef();
    const validNumber = /^\d{4}-\d{4}-\d{4}-\d{4}/;
    const numberRef = useRef();
    const validDate = /^(0[1-9]|[1][0-2])\/(0[1-9]|[12][0-9]|3[01])$/;
    const dateRef = useRef();
    const cvvRef = useRef();
    const validCvv = /^\d{3}/;
    const phoneRef = useRef();

    const validChanges = (e, field) => {
        setValid({ ...valid, [field]: e.target.value })
    }

    const numberChanges = (e, field) => {
        setValid({ ...valid, [field]: e.target.value });
        if (valid.number.length === 3 || valid.number.length === 8 || valid.number.length === 13) {
            setValid({ ...valid, [field]: e.target.value.concat('-') })
        }
    }

    const numberKeyChange = (e, field) => {
        if (e.key === 'Backspace') {
            e.preventDefault();
            setValid({ ...valid, [field]: e.target.value.slice(0, -1) })
        }
    }

    const dateChange = (e, field) => {
        setValid({ ...valid, [field]: e.target.value });
        if (valid.date.length === 1) {
            setValid({ ...valid, [field]: e.target.value.concat('/') })
        }
    }

    const payNow = e => {
        e.preventDefault();
        nmR.current.style.opacity = valid.name.match(validnmsr) ? 0 : 1;
        srnR.current.style.opacity = valid.surname.match(validnmsr) ? 0 : 1;
        numberRef.current.style.opacity = valid.number.match(validNumber) ? 0 : 1;
        dateRef.current.style.opacity = valid.date.match(validDate) ? 0 : 1;
        cvvRef.current.style.opacity = valid.cvv.match(validCvv) ? 0 : 1;
        phoneRef.current.style.opacity = valid.region.match(/^\+\d{3}/) && valid.code.match(/^\d{2}/) && valid.digit1.match(/^\d{2}/) && valid.digit2.match(/^\d{2}/) && valid.digit3.match(/^\d{2}/) ? 0 : 1;

        if (valid.name.match(validnmsr) && valid.surname.match(validnmsr) && valid.number.match(validNumber) && valid.date.match(validDate) && valid.cvv.match(validCvv) && valid.region.match(/^\+\d{3}/) && valid.code.match(/^\d{2}/) && valid.digit1.match(/^\d{2}/) && valid.digit2.match(/^\d{2}/) && valid.digit3.match(/^\d{2}/)) {

            if(cash >= total) {
                setValid({
                    name: '',surname: '',number: '',
                    date: '',cvv: '',region: '',code: '',
                    digit1: '',digit2: '',digit3: ''
                });
                setCash(cash - total);
                setTotal(0);
                setCart([]);
            }
            else {
                setValid({
                    name: '',surname: '',number: '',
                    date: '',cvv: '',region: '',code: '',
                    digit1: '',digit2: '',digit3: ''
                });
                setShowwarn(true)
            }

        }
    }

    console.log(cash)

    return (
        <div className="form-container" style={{ display: openOrder ? 'grid' : 'none' }}>
            <form>
                <h2>Pay with Master/Visa card</h2>
                <img src="https://fromtheheartproductions.com/wp-content/uploads/2016/08/credit-card-pay-pal-icons.png" alt="" />
                <span onClick={() => setOpenOrder(false)}>X</span>
                <AutoTabProvider>
                    <div className="for-name">
                        <label>
                            <input type="text" placeholder="Enter your name" tabbable="false" value={valid.name} onChange={(e) => validChanges(e, 'name')} />
                            <div className="invalid" ref={nmR}>!</div>
                        </label>
                        <label>
                            <input type="text" placeholder="Enter your Surname" tabbable="false" value={valid.surname} onChange={(e) => validChanges(e, 'surname')} />
                            <div className="invalid" ref={srnR}>!</div>
                        </label>
                    </div>
                    <label>
                        <input type="text" placeholder="9858-xxxx-xxxx-5566" tabbable="false" maxLength={19} value={valid.number} onChange={(e) => numberChanges(e, 'number')} onKeyDown={(e) => numberKeyChange(e, 'number')} />
                        <div className="invalid" ref={numberRef}>!</div>
                    </label>
                    <label>
                        <input type="text" placeholder="12/02" tabbable="false" maxLength={5} value={valid.date} onChange={(e) => dateChange(e, 'date')} onKeyDown={(e) => numberKeyChange(e, 'date')}/>
                        <div className="invalid" ref={dateRef} >!</div>
                    </label>
                    <label>
                        <input type="text" placeholder="XXX" tabbable="false" maxLength={3} value={valid.cvv} onChange={(e) => validChanges(e, 'cvv')} />
                        <div className="invalid" ref={cvvRef}>!</div>
                    </label>
                    <div className="phone">
                        <label>
                            <input type="text" placeholder="+374" tabbable="false" maxLength={4} value={valid.region} onChange={(e) => validChanges(e, 'region')} />
                            <input type="text" placeholder="99" tabbable="false" maxLength={2} value={valid.code} onChange={(e) => validChanges(e, 'code')} />
                            <input type="text" placeholder="xx" tabbable="false" maxLength={2} value={valid.digit1} onChange={(e) => validChanges(e, 'digit1')} />
                            <input type="text" placeholder="xx" tabbable="false" maxLength={2} value={valid.digit2} onChange={(e) => validChanges(e, 'digit2')} />
                            <input type="text" placeholder="xx" tabbable="false" maxLength={2} value={valid.digit3} onChange={(e) => validChanges(e, 'digit3')} />
                            <div className="invalid" ref={phoneRef}>!</div>
                        </label>
                    </div>
                </AutoTabProvider>
                <p className="problemCart" style={{opacity: showwarn ? 1 : 0}}>Problem with your cart</p>
                <button onClick={payNow}>Pay Now</button>
            </form>
        </div>
    )
}
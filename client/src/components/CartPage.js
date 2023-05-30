import '../styles/cartPage.sass'
import ShopMenu from "./ShopMenu";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import axios from "axios";
import {changeCart} from "../redux/actions/cart";

const CartPage = () => {

    const [name, setName] = useState("")
    const [nameError, setNameError] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [phone, setPhone] = useState("")
    const [phoneError, setPhoneError] = useState("")
    const [address, setAddress] = useState("")


    const {cart: {cartData}, shops: {currentShop}} = useSelector(state => {
        return state
    })

    const dispatch = useDispatch()

    const total = cartData.map( item => item.price).reduce((a,b) => a + b, 0)
    const isSubmit = !nameError && !emailError && !phoneError && address && !!cartData.length

    const submit = async () => {
        if(isSubmit){
            const order = {
                shop: currentShop.name,
                user: { name, email, phone, address },
                items: cartData,
                totalPrice: total,
                date: new Date(),
            }
            try {
                await axios.post("https://flatronsamatron.onrender.com/api/order", order);
                dispatch(changeCart([]))
            } catch (error) {
                console.log(error)
            }
        }
    }

    const checkError = (type) => {
        if (type === 'name') {
            !/^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(name) ? setNameError('Invalid name.') : setNameError('')
        }
        if (type === 'email') {
            !/^\S+@\S+\.\S+$/.test(email) ? setEmailError('Invalid email.') : setEmailError('')
        }
        if (type === 'phone') {
            !!Number(phone) ? setPhoneError('') : setPhoneError('Invalid number.')
        }
    }

    return <div className="cart-page">
        <div className="cart-user-block">
            <div className="user-block">
                <label>
                    Name:
                    <input onBlur={()=>checkError('name')} type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                    {nameError && <div className="error">{nameError}</div>}
                </label>
                <label>
                    Email:
                    <input onBlur={()=>checkError('email')} type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    {emailError && <div className="error">{emailError}</div>}
                </label>
                <label>
                    Phone:
                    <input onBlur={()=>checkError('phone')} type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    {phoneError && <div className="error">{phoneError}</div>}
                </label>
                <label>
                    Address:
                    <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                </label>
            </div>
            <div>
                <div className="total">Total price: {total}$</div>
                <div className={`submit ${!isSubmit ? 'block' : ''}`} onClick={submit}>Submit</div>
            </div>
        </div>
        <ShopMenu />
    </div>
}

export default CartPage
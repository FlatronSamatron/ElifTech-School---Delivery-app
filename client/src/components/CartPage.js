import '../styles/cartPage.sass'
import ShopMenu from "./ShopMenu";
import {useSelector} from "react-redux";
import {useState} from "react";
import axios from "axios";

const CartPage = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    const {cartData} = useSelector(state => {
        return state.cart
    })

    const {currentShop} = useSelector(state => {
        return state.shops
    })

    const total = cartData.map( item => item.price).reduce((a,b) => a + b, 0)
    const isSubmit = name && email && phone && address && !!cartData.length

    const submit = async () => {
        const order = {
            shop: currentShop.name,
            user: { name, email, phone, address },
            items: cartData,
            totalPrice: total,
            date: new Date(),
        }
        try {
            await axios.post("/api/order", order);
        } catch (error) {
            console.log(error)
        }
    }

    return <div className="cart-page">
        <div className="cart-user-block">
            <div className="user-block">
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </label>
                <label>
                    Phone:
                    <input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
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
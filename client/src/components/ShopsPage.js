import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {changeShop, fetchShops} from "../redux/actions/shops";
import '../styles/shopsPage.sass'
import ShopMenu from "./ShopMenu";
import {changeCart} from "../redux/actions/cart";

const ShopsPage = () => {
    const {shops: {data, currentShop}, cart: {cartData}} = useSelector(state => {
        return state
    })

    const isCartData = !!cartData.length

    const dispatch = useDispatch()

    useEffect(() => {
        !data.length && dispatch(fetchShops())
    }, [dispatch, data])

    const onChangeShop = (_id) => {
        const newShop = data.filter( item => item._id === _id)
        dispatch(changeShop(newShop[0]))
    }

    const onClearCart = () => {
        dispatch(changeCart([]))
    }

    const shops = data.map( ({_id, name}) => {
        const isActive = currentShop._id === _id

        return <li className={`shops-navigation-item ${isActive ? 'active' : ''}
            ${!isActive && isCartData ? 'block' : ''}`} key={_id} onClick={() => onChangeShop(_id)}>
            {name}
        </li>
    })


    return <div className="shop-page">
        <ul className="shops-navigation">
            {shops}
            {isCartData && <li className="clear-cart" onClick={onClearCart}>Clear CART</li>}
        </ul>
        <ShopMenu menu={currentShop}/>
    </div>
}

export default ShopsPage
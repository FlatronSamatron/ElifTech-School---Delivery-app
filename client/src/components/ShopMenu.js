import '../styles/shopMenu.sass'
import {useDispatch, useSelector} from "react-redux";
import {changeCart} from "../redux/actions/cart";
import {NavLink} from "react-router-dom";

const ShopMenu = ({menu}) => {

    const {cartData} = useSelector(state => {
        return state.cart
    })

    const dispatch = useDispatch()

    const changeProductCart = (product, isPlus) => {
        const isDataProduct = cartData.some(item => item._id === product._id)

        let newData = [...cartData]

        if (!cartData.length || !isDataProduct) {
            newData.push({...product, cnt: 1})
        } else {
            newData = cartData.map(item => {
                if (item && (item._id === product._id)) {
                    return {...item, cnt: isPlus ? item.cnt + 1 : item.cnt === 0 ? 0 : item.cnt - 1}
                } else {
                    return item
                }
            })
        }

        const filteredNewData =  newData.filter( item => item.cnt > 0)

        dispatch(changeCart(filteredNewData))
    }

    const menuData = menu ? menu.products : cartData

    const menuList = menuData.map((item) => {
        const {name, img, price, _id} = item

        const cnt = item.cnt ? item.cnt : cartData.filter(product => {
            return product._id === _id
        })[0]?.cnt

        return <li className="shop-menu-item" key={_id}>
            <img src={img} alt="pic"/>
            <div className="title">{name}</div>
            <div className="price">Price: {price} $</div>
            {!cnt ? <div className="add" onClick={() => changeProductCart(item, true)}>ADD TO CART</div> :
                <div className="add-remove">
                    <div className="minus" onClick={() => changeProductCart(item, false)}>-</div>
                    <div className="cnt">{cnt}</div>
                    <div className="plus" onClick={() => changeProductCart(item, true)}>+</div>
                </div>}
        </li>
    })

    if(!menuList.length){
        return <div className="empty">
            Cart empty
            <NavLink to="/" >
                Add products
            </NavLink>
        </div>
    }

    return <ul className="shop-menu">
        {menuList}
    </ul>
}

export default ShopMenu
import {NavLink} from "react-router-dom";
import '../styles/nav.sass'
import {useSelector} from "react-redux";

const Nav = () => {
    const {cartData} = useSelector(state => {
        return state.cart
    })

    const cnt = cartData.map( item => item.cnt).reduce((a,b) => a + b, 0)

    return (
        <header className="header">
            <nav>
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? "active" : ""
                } >
                    Shop
                </NavLink>

                <>
                    <NavLink to="/cart" className={({ isActive }) =>
                        isActive ? "cart active" : "cart"
                    }>
                        Shopping Cart
                        {!!cnt && <div className="cnt">{cnt}</div>}
                    </NavLink>
                </>

                <>
                    <NavLink to="/history" className={({ isActive }) =>
                        isActive ? "cart active" : "cart"
                    }>
                        History
                    </NavLink>
                </>
            </nav>
        </header>
    );
}

export default Nav

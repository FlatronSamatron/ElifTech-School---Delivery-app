import '../styles/historyPage.sass'
import ShopMenu from "./ShopMenu";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {changeHistoryData, fetchHistory} from "../redux/actions/histroy";
import {changeShop} from "../redux/actions/shops";

const HistoryPage = () => {

    const {history: {historyData, currentData, loading}} = useSelector(state => {
        return state
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchHistory())
    }, [dispatch])

    const historyDate = historyData?.map( ({_id, date}) => {
        const isActive = currentData._id === _id

        const dateValue = new Date(date)

        return <li className={`history-navigation-item ${isActive ? 'active' : ''}`} key={_id} onClick={()=>onChangeHistoryData(_id)}>
            {dateValue.getDay() + "/" + dateValue.getMonth() + "/" + dateValue.getFullYear()}
        </li>
    })

    const onChangeHistoryData = (_id) => {
        const newShop = historyData?.filter( item => item._id === _id)
        dispatch(changeHistoryData(newShop[0]))
    }

    if(loading){
        return <div className="loading">Loading...</div>
    }


    return <div className="history-page">
        <ul className="history-navigation">
            {historyDate}
        </ul>
        <div>
            <div className="history-info">
                <div className="shop"><span>SHOP:</span> {currentData?.shop}</div>
                <div className="price"><span>PRICE:</span> {currentData?.totalPrice}$</div>
                <div className="user">
                    <div className="address"><span>ADDRESS:</span> {currentData?.user.address}</div>
                    <div className="email"><span>EMAIL:</span> {currentData?.user.email}</div>
                    <div className="name"><span>NAME:</span> {currentData?.user.name}</div>
                    <div className="phone"><span>PHONE:</span> {currentData?.user.phone}</div>
                </div>
            </div>
            {currentData && <ShopMenu menu={currentData?.items} isHistory={true}/>}
        </div>
    </div>
}

export default HistoryPage
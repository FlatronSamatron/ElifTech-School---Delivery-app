import './App.sass';
import Nav from "./components/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ShopsPage from "./components/ShopsPage";
import CartPage from "./components/CartPage";
import HistoryPage from "./components/HistoryPage";

function App() {

    return (
        <BrowserRouter>
            <Nav />
            <>
                <Routes>
                    <Route path="/" element={<ShopsPage/>} />
                    <Route path="/cart" element={<CartPage/>} />
                    <Route path="/history" element={<HistoryPage/>} />
                </Routes>
            </>
        </BrowserRouter>
    );
}

export default App;

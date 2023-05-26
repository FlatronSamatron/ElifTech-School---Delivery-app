import './App.sass';
import Nav from "./components/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ShopsPage from "./components/ShopsPage";
import CartPage from "./components/CartPage";

function App() {

    return (
        <BrowserRouter>
            <Nav />
            <>
                <Routes>
                    <Route path="/" element={<ShopsPage/>} />
                    <Route path="/Cart" element={<CartPage/>} />
                </Routes>
            </>
        </BrowserRouter>
    );
}

export default App;

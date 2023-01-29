import "./App.css"; 
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Shop from "./pages/shop/shop"; 
import Filler from "./components/filler"; 
import { Cart } from "./pages/cart/cart"; 
import { ShopContextProvider } from "./context/shop-context";

function App() {
    return (
        <div className="App">
            <ShopContextProvider>
                <Router>
                    <Navbar/>
                    <Hero />
                    <Filler />
                    <Routes>
                        <Route path="/" element={<Shop />}/>
                        <Route path="/cart" element={<Cart />}/>
                    </Routes>
                </Router>
            </ShopContextProvider>
        </div>
    );
}

export default App;
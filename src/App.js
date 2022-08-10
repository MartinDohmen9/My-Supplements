import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/index.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js"
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CartProvider from './context/CartContext';
import {AuthContextProvider} from './context/AuthContext'
import Login from "./components/Login/Login";

const App = () => {

  return (
    <AuthContextProvider>
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenido a My Supplements'}/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Bienvenido a My Supplements'}/>}></Route>
          <Route path="/product/:productId" element={<ItemDetailContainer/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
    </AuthContextProvider>
  )
};
export default App;

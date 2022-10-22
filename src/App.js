import {useState} from "react"
import CartItems from "./Component/Cart/CartItems";
import Header from './Component/Layout/Header'
import Meals from './Component/Meals/Meals'
import CartProvider from "./Store/CartProvider";

function App() {

  const [cartIsShown,setCartIsShown] = useState(false)

  const showCart = () => {
    setCartIsShown(true)
  }

  const hideCart = () => {
    setCartIsShown(false)
  }
  
  return (
    <CartProvider>
      { cartIsShown && <CartItems toCloseCart={hideCart} />}
      <Header toOpenCart={showCart}/>
      <Meals/>
    </CartProvider>
  );
}

export default App;

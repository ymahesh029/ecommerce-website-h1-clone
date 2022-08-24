import './App.css';
import Home from './pages/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { CartProvider, useCart } from "react-use-cart";

function App() {
  return (
    <div className="App"> 
 <CartProvider>
<Home/>
</CartProvider>
    </div>
  );
}

export default App;

import { Header, Home } from "./components/organisms";
import { CartProvider } from "./context/CartContext";
import "./App.module.css";

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Home />
        {/* <Footer /> */}
      </CartProvider>
    </>
  );
}
export default App;

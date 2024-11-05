import { Header, Home, Footer } from "./components/organisms";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Home />
        <Footer />
      </CartProvider>
    </>
  );
}
export default App;

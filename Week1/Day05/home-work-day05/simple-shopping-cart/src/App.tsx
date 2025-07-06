import { CartProvider } from './context/CartContext';
import ProductGrid from './components/ProductGrid';
import CartIcon from './components/CartIcon';

function App() {
  return (
    <CartProvider>
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <h1>🛒 Big Market</h1>
        <CartIcon />
      </header>
      <main style={{ padding: '20px' }}>
        <ProductGrid />
      </main>
    </CartProvider>
  );
}

export default App;

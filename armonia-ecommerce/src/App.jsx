import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetail from './components/ItemDetail';
import CategoryList from './components/CategoryList';
import Checkout from "./pages/Checkout";
import { CartProvider } from './components/CartContext';
import Cart from './components/Cart'

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <header>
            <div className="App">
              <NavBar />
            </div>
          </header>
          <main className='Main'>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/itemdetail/:itemId" element={<ItemDetail />} />
              <Route path="/categorylist/:categoryId" element={<CategoryList />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;









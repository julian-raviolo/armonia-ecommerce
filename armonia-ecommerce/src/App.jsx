import React from 'react';
import NavBar from './components/NavBar';
import Cart from './components/CartWidget';
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer'; 
import ItemDetailContainer from './components/ItemDetailContainer'; 
import SecondaryNavBar from './components/SecondaryNavBar';

function App() {
  return (
    <Router> {/* Mueve el Router para envolver toda la estructura de la aplicación */}
      <div>
        <header>
          <div className="App">
            <NavBar />
          </div>
        </header>
        <main>
          <div>
            <SecondaryNavBar />
          </div>
          <ProductList />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/category/:id" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;



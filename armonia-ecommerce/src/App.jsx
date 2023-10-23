import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SecondaryNavBar from './components/SecondaryNavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetail from './components/ItemDetail'; 
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';

function App() {
  return (
    <Router>
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
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/itemdetail/:itemId" element={<ItemDetail />} /> 
            <Route path="/categorylist/:categoryId" element={<CategoryList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;




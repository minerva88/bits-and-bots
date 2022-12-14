import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Browse from './components/pages/browse/Browse';
import Cart from './components/pages/cart/Cart';
import Checkout from './components/pages/checkout/Checkout';
import Details from './components/pages/details/Details';
import Navigation from './components/layout/Nav';
import { AuthProvider } from './components/context/AuthContext';
import './sass/style.scss';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
          <Routes>
                <Route path='/' exact element={ <Home />} />
                <Route path='/browse' element={ <Browse />} />
                <Route path='/cart' element={ <Cart /> } />
                <Route path='/checkout' element={ <Checkout /> } />
                <Route path='/browse/details/:id' element={ <Details /> } />
          </Routes>
        
      </Router>
    </AuthProvider>
  );
}

export default App;

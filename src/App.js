import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Browse from './components/browse/Browse';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import Details from './components/details/Details';
import Navigation from './components/layout/Nav';
import { AuthProvider } from './components/context/AuthContext';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Container>
          <Routes>
                <Route path='/' exact element={ <Home />} />
                <Route path='/browse' element={ <Browse />} />
                <Route path='/cart' element={ <Cart /> } />
                <Route path='/checkout' element={ <Checkout /> } />
                <Route path='/details' element={ <Details /> } />
          </Routes>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;

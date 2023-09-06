import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import About from './pages/About';
import Footer from './components/Footer';
import RecipeDetail from './pages/RecipeDetail';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/recipes" element={<Recipe />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Recipe />} /> 
          <Route path="/recipe/:id" element={<RecipeDetail />} /> 
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

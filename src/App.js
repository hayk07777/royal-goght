import React from 'react';
import Header from './components/HeaderPart/Header/Header';
import MainPart from './components/MainPart/MainPart';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="appContainer">
      <Header />
      <MainPart />
      <Footer />
    </div>
  );
}

export default App;
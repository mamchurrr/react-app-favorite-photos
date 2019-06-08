import React from 'react';
import './App.scss';

import Header from './Header';
import Router from './Router';
import Footer from './Footer';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Router />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;

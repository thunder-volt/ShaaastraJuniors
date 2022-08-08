import './App.css';
import { useState } from 'react';
import Search from './components/Search';
import './components/search.css'
import Cards from './components/Cards';
import './components/cards.css'
import './components/modal.css'
import Knowmore from './components/Knowmore';
import Header from './components/Header'
import './components/header.css'
import Heading from './components/Heading';
import "./components/heading.css"

// import { useState } from 'react';
function App() {

  return (
    <div className='App'>
      < Header />
      < Heading />
      < Search />
      < Cards />

      {/* < Knowmore /> */}

    </div>
  );
}

export default App;

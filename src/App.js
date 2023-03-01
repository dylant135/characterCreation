import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Characters from './components/Characters';
import Creation from './components/Creation';
import Navbar from './components/Navbar';
import Clans from './components/Clans';

function App() {
  const [characters, setCharacter] = useState([])
  console.log(characters)
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Characters characters={characters} />} />
        <Route exact path='/creation' element={<Creation setCharacter={setCharacter} />} />
        <Route exact path='/clans' element={<Clans characters={characters} />} />
      </Routes>
    </div>
  );
}

export default App;

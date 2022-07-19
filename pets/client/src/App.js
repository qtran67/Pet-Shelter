import './App.css';
import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Pets from './components/Pets';
import Pet from './components/Pet';
import PetForm from './components/PetForm';
import EditPet from './components/EditPet';


function App() {
  const [petsList, setPetsList] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Pet Shelter</h1>
        <Routes>
          <Route path="/" element={<Pets/>} />
          <Route path="/pets/:id" element={<Pet/>} />
          <Route path="/new" element={<PetForm petsList={petsList} setPetsList={setPetsList}/>} />
          <Route path="/pets/:id/edit" element={<EditPet/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/dados" element={<LivroDados />} />
      </Routes>
    </BrowserRouter>
  );
}

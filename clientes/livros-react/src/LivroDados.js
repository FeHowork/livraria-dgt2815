import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Livro } from './model/Livro';
import { ControleLivros } from './controle/ControleLivros';

const controle = new ControleLivros();

export default function LivroDados() {
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState('');
  const [codEditora, setCodEditora] = useState(1);
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');

  const incluir = (evento) => {
    evento.preventDefault();

    const livro = new Livro(
      '',
      Number(codEditora),
      titulo,
      resumo,
      autores
        .split(',')
        .map((autor) => autor.trim())
        .filter(Boolean)
    );

    controle.incluir(livro).then((ok) => {
      if (ok) {
        navigate('/');
      } else {
        alert('Não foi possível incluir o livro.');
      }
    });
  };

  return (
    <main className="container">
      <h1>Novo livro</h1>

      <form onSubmit={incluir}>
        <label>
          Título
          <input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </label>

        <label>
          Código da editora
          <select
            value={codEditora}
            onChange={(e) => setCodEditora(e.target.value)}
          >
            <option value="1">1 - Companhia das Letras</option>
            <option value="2">2 - Pearson</option>
            <option value="3">3 - Alta Books</option>
          </select>
        </label>

        <label>
          Resumo
          <textarea
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
          />
        </label>

        <label>
          Autores (separados por vírgula)
          <input
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
          />
        </label>

        <button type="submit">Salvar</button>
      </form>
    </main>
  );
}

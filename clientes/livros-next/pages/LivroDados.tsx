import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { Livro } from '../model/Livro';
import { ControleLivros } from '../controle/ControleLivros';

const controleLivros = new ControleLivros();

export default function LivroDados() {
  const router = useRouter();

  const [titulo, setTitulo] = useState('');
  const [codEditora, setCodEditora] = useState(1);
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');

  const incluir = (evento: FormEvent) => {
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

    controleLivros.incluir(livro).then((ok) => {
      if (ok) {
        router.push('/LivroLista');
      } else {
        alert('Não foi possível incluir o livro.');
      }
    });
  };

  return (
    <main className="container">
      <h1>Novo livro — Next.js</h1>

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
            onChange={(e) => setCodEditora(Number(e.target.value))}
          >
            <option value={1}>1 - Companhia das Letras</option>
            <option value={2}>2 - Pearson</option>
            <option value={3}>3 - Alta Books</option>
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
          Autores
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

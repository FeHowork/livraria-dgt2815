import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Livro } from '../model/Livro';
import { ControleLivros } from '../controle/ControleLivros';
import { ControleEditoraService } from '../controle/ControleEditoraService';

const controleLivros = new ControleLivros();
const controleEditora = new ControleEditoraService();

export default function LivroLista() {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    if (!carregado) {
      controleLivros.obterTodos().then((resultado) => {
        setLivros(resultado);
        setCarregado(true);
      });
    }
  }, [carregado]);

  const excluir = (codigo: String) => {
    controleLivros.excluir(codigo).then(() => {
      setCarregado(false);
    });
  };

  return (
    <main className="container">
      <div className="cabecalho">
        <h1>Catálogo de Livros — Next.js</h1>
        <Link className="botao" href="/LivroDados">
          Novo livro
        </Link>
      </div>

      {!carregado ? (
        <p>Carregando...</p>
      ) : livros.length === 0 ? (
        <p>Nenhum livro cadastrado.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Editora</th>
              <th>Autores</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro, index) => (
              <tr key={index}>
                <td>{livro.titulo}</td>
                <td>{controleEditora.getNomeEditora(livro.codEditora)}</td>
                <td>{livro.autores.join(', ')}</td>
                <td>
                  <button onClick={() => excluir(livro.codigo)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}

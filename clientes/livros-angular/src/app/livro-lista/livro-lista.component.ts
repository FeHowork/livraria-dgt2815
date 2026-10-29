import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Livro } from '../livro';
import { ControleLivrosService } from '../controle-livros.service';
import { ControleEditoraService } from '../controle-editora.service';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './livro-lista.component.html'
})
export class LivroListaComponent implements OnInit {
  livros: Livro[] = [];

  constructor(
    private controle: ControleLivrosService,
    public controleEditora: ControleEditoraService
  ) {}

  ngOnInit(): void {
    this.controle.obterTodos().then((resultado) => {
      this.livros = resultado;
    });
  }

  excluir(codigo: String): void {
    this.controle.excluir(codigo).then(() => {
      this.controle.obterTodos().then((resultado) => {
        this.livros = resultado;
      });
    });
  }
}

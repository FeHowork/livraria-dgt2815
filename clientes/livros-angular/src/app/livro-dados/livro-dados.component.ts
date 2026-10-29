import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Livro } from '../livro';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './livro-dados.component.html'
})
export class LivroDadosComponent {
  titulo = '';
  codEditora = 1;
  resumo = '';
  autores = '';

  constructor(
    private controle: ControleLivrosService,
    private router: Router
  ) {}

  incluir(): void {
    const livro = new Livro(
      '',
      Number(this.codEditora),
      this.titulo,
      this.resumo,
      this.autores
        .split(',')
        .map((autor) => autor.trim())
        .filter(Boolean)
    );

    this.controle.incluir(livro).then((ok) => {
      if (ok) {
        this.router.navigateByUrl('/lista');
      } else {
        alert('Não foi possível incluir o livro.');
      }
    });
  }
}

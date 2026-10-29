import { Injectable } from '@angular/core';

export interface Editora {
  codEditora: number;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editoras: Editora[] = [
    { codEditora: 1, nome: 'Companhia das Letras' },
    { codEditora: 2, nome: 'Pearson' },
    { codEditora: 3, nome: 'Alta Books' }
  ];

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const resultado = this.editoras.filter(
      (editora) => editora.codEditora === codEditora
    );

    return resultado.length > 0 ? resultado[0].nome : 'Editora não encontrada';
  }
}

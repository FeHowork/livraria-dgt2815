export interface Editora {
  codEditora: number;
  nome: string;
}

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
    const editora = this.editoras.filter(
      (item) => item.codEditora === codEditora
    );

    return editora.length > 0 ? editora[0].nome : 'Editora não encontrada';
  }
}

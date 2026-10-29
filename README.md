# Trabalho Prático DGT2815 — Integração de Páginas Web com Banco de Dados

Projeto de uma livraria com:

- MongoDB
- Mongoose
- Node.js
- Express
- React
- Next.js
- Angular

A API do servidor trabalha na porta `3030`, com a rota base:

```text
http://localhost:3030/livros
```

## Estrutura

```text
livraria-dgt2815/
├── livro-servidor/
├── clientes/
│   ├── livros-react/
│   ├── livros-next/
│   └── livros-angular/
└── README.md
```

---

# 1. MongoDB

No MongoDB Compass:

1. Crie o banco `livraria`
2. Crie a coleção `livros`

A aplicação está configurada para:

```text
mongodb://127.0.0.1:27017/livraria
```

Exemplo de documento:

```json
{
  "titulo": "Dom Casmurro",
  "codEditora": 1,
  "resumo": "Romance de Machado de Assis.",
  "autores": ["Machado de Assis"]
}
```

---

# 2. Servidor Express

Entre na pasta:

```bash
cd livro-servidor
npm install
npm start
```

Servidor:

```text
http://localhost:3030
```

API:

```text
GET    /livros
POST   /livros
DELETE /livros/:codigo
```

## Testes

### GET

```http
GET http://localhost:3030/livros
```

### POST

```http
POST http://localhost:3030/livros
Content-Type: application/json
```

Body:

```json
{
  "titulo": "Engenharia de Software",
  "codEditora": 2,
  "resumo": "Livro de engenharia de software.",
  "autores": ["Ian Sommerville"]
}
```

### DELETE

```http
DELETE http://localhost:3030/livros/ID_DO_DOCUMENTO
```

---

# 3. React

```bash
cd clientes/livros-react
npm install
npm start
```

Abra:

```text
http://localhost:3000
```

---

# 4. Next.js

Se o React ainda estiver usando a porta 3000, finalize-o antes.

```bash
cd clientes/livros-next
npm install
npm run dev
```

Abra:

```text
http://localhost:3000
```

---

# 5. Angular

```bash
cd clientes/livros-angular
npm install
npm start
```

Abra:

```text
http://localhost:4200
```

---

# Observação

Para testar os clientes, o servidor Express e o MongoDB precisam estar em execução.

O servidor usa CORS para permitir as requisições feitas pelas aplicações cliente.

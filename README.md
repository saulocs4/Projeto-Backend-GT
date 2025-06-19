# 🚀 E-commerce Backend API

Bem-vindo ao backend da API do seu e-commerce! Este projeto foi desenvolvido para gerenciar produtos, categorias e autenticação de usuários, utilizando Node.js, Express, Prisma ORM e PostgreSQL.

---

## ✨ Funcionalidades

Esta API oferece os seguintes recursos:

* **Autenticação de Usuários:** Geração de tokens JWT para acesso seguro às rotas protegidas.
* **Gestão de Produtos:**
    * Criação, leitura (listagem e por ID), atualização e exclusão de produtos.
    * Gestão de imagens e opções de produtos (tamanhos, cores, etc.).
* **Gestão de Categorias:**
    * Criação, leitura (listagem e por ID), atualização e exclusão de categorias.
* **Rotas Protegidas:** Uso de middleware JWT para garantir que apenas usuários autenticados possam realizar operações sensíveis (criação, atualização e exclusão de produtos e categorias; atualização e exclusão de usuários).

---

## 🛠️ Tecnologias Utilizadas

* **Node.js:** Ambiente de execução JavaScript.
* **Express:** Framework web para Node.js, utilizado para construir a API.
* **Prisma ORM:** ORM moderno e de próxima geração para interagir com o banco de dados.
* **PostgreSQL:** Banco de dados relacional robusto.
* **JWT (JSON Web Tokens):** Para autenticação e autorização de usuários.
* **`bcrypt` (sugestão futura):** Para criptografia de senhas. (Não implementado nesta versão, senhas estão em texto plano para simplificação inicial).
* **`cors`:** Para lidar com políticas de segurança de Same-Origin Policy em requisições de front-ends.
* **`dotenv`:** Para carregar variáveis de ambiente.
* **`nodemon`:** Para reiniciar o servidor automaticamente durante o desenvolvimento.

---

## ⚙️ Configuração do Ambiente

Siga os passos abaixo para configurar e rodar o projeto localmente.

### Pré-requisitos

Certifique-se de ter o seguinte instalado em sua máquina:

* [Node.js](https://nodejs.org/en/download/) (versão 18 ou superior recomendada)
* [npm](https://www.npmjs.com/get-npm) (gerenciador de pacotes do Node.js)
* [PostgreSQL](https://www.postgresql.org/download/) (servidor de banco de dados)


▶️ Como Rodar o Projeto
Após a configuração, você pode iniciar o servidor de desenvolvimento:

Bash

npm run dev
O servidor estará rodando em http://localhost:3000 (ou na porta definida em seu .env).

🧪 Endpoints da API
A API expõe os seguintes endpoints:

Autenticação (User Token)
Método	Endpoint	

** Produtos (/v1/product)
*GET	/v1/product/search	Não	Lista produtos com opções de filtro.
*GET	/v1/product/:id	Não	Obtém um produto específico pelo ID.
*POST	/v1/product	Sim	Cria um novo produto.
*PUT	/v1/product/:id	Sim	Atualiza um produto existente pelo ID.
*DELETE	/v1/product/:id	Sim	Deleta um produto existente pelo ID.


** Categorias (/v1/category)
* Método	Endpoint	Protegido	Descrição
* GET	/v1/category/search	Não	Lista categorias com opções de filtro.
* GET	/v1/category/:id	Não	Obtém uma categoria específica pelo ID.
* POST	/v1/category	Sim	Cria uma nova categoria.
* PUT	/v1/category/:id	Sim	Atualiza uma categoria existente pelo ID.
* DELETE	/v1/category/:id	Sim	Deleta uma categoria existente pelo ID.


** Usuários (/v1/user)
* Método	Endpoint	Protegido	Descrição
* GET	/v1/user/:id	Não	Obtém informações de um usuário pelo ID.
* POST	/v1/user	Não	Cadastra um novo usuário (registro).
* PUT	/v1/user/:id	Sim	Atualiza um usuário existente pelo ID.
* DELETE	/v1/user/:id	Sim	Deleta um usuário existente pelo ID.


👥 Equipe de Desenvolvedores

Conheça a equipe responsável por este projeto e suas principais contribuições:

* Janiny Nóbrega: Responsável pela arquitetura de Rotas, configuração do App.js, e implementação dos Controllers e Middleware de autenticação.
* Saulo: Especialista em TI e Prisma ORM, garantindo a integração eficiente com o banco de dados.
* Jonathas: Foco na lógica de negócios e validações dos Services, garantindo o processamento correto das requisições.
* Ana: Desenvolvedora dos Repositories, responsável pela comunicação direta com o banco de dados através do Prisma.
* Jairo: Responsável pela definição das Tabelas e o design do schema.prisma, estruturando o modelo de dados.
🤝 Contribuição

📄 Licença
Projeto de estudo backend Geração Tech 2.0   

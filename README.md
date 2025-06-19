# 🚀 E-commerce Backend API

Bem-vindo ao backend da API do seu e-commerce!  
Este projeto foi desenvolvido para gerenciar produtos, categorias e autenticação de usuários, utilizando **Node.js**, **Express**, **Prisma ORM** e **PostgreSQL**.

---

## ✨ Funcionalidades

Esta API oferece os seguintes recursos:

### Autenticação de Usuários
- Geração de tokens JWT para acesso seguro às rotas protegidas.

### Gestão de Produtos
- Criação, leitura (listagem e por ID), atualização e exclusão de produtos.
- Gestão de imagens e opções de produtos (tamanhos, cores, etc.).

### Gestão de Categorias
- Criação, leitura (listagem e por ID), atualização e exclusão de categorias.

### Rotas Protegidas
- Uso de middleware JWT para garantir que apenas usuários autenticados possam realizar operações sensíveis:
  - Criação, atualização e exclusão de produtos e categorias.
  - Atualização e exclusão de usuários.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web para construção da API.
- **Prisma ORM**: ORM moderno para interação com o banco de dados.
- **PostgreSQL**: Banco de dados relacional robusto.
- **JWT (JSON Web Tokens)**: Para autenticação e autorização.
- **bcrypt** *(sugestão futura)*: Para criptografia de senhas (não implementado ainda; senhas estão em texto plano).
- **cors**: Controle de políticas de origem cruzada.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **nodemon**: Reinício automático do servidor durante o desenvolvimento.

---

## ⚙️ Configuração do Ambiente

### Pré-requisitos

Certifique-se de ter o seguinte instalado:

- Node.js (versão 18 ou superior recomendada)
- npm (gerenciador de pacotes)
- PostgreSQL

### ▶️ Como Rodar o Projeto

Após a configuração, rode o servidor de desenvolvimento:

```bash
npm run dev


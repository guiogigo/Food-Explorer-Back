# Food Explorer - Back-End

## Índice
- [Sobre o Projeto](#sobre-o-projeto)
- [Deploy](#deploy)
- [Requisitos](#requisitos)
- [Deploy Local](#deploy-local)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Contato](#contato)

---

## Sobre o Projeto
O **Food Explorer** é uma aplicação fullstack desenvolvida utilizando as tecnologias aprendidas durante o programa Explorer da Rocketseat para facilitar a gestão e visualização de pratos em um cardápio digital. 

Criado como parte do programa Explorer, o projeto incorpora funcionalidades modernas que permitem ao administrador gerenciar o cardápio de forma intuitiva e eficiente, enquanto proporciona uma experiência amigável para os usuários finais. A plataforma segue o conceito **Mobile First**, garantindo uma navegação fluida tanto em dispositivos móveis quanto em desktops.

---

## Deploy

A API está hospedada no Render.com e pode ser acessada no seguinte link:

- [Deploy da API](https://food-explorer-api-2zqt.onrender.com)
- [Aplicação (Front-End)](https://github.com/guiogigo/Food-Explorer-Front)

Para efetuar login na aplicação, utilize a rota `/sessions`  com as credenciais abaixo:

**Administrador**:
```
login: admin@email.com
senha: 123456
```
**Usuário**:
```
login: user@email.com
senha: 123456
```
---

## Requisitos
- **Node.js** instalado na máquina.
- **NPM** ou **Yarn** para gerenciamento de pacotes.
- **Insomnia** ou **Postman** (opcional, para testar os endpoints).

---

## Deploy Local

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/guiogigo/Food-Explorer-Front.git
   ```
2. **Acesse a pasta do projeto:**
   ```bash
   cd food-explorer-frontend
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn install
   ```

4. **Configure as variáveis de ambiente:** 
Crie um arquivo .env com as seguintes informações:
   ```bash
    PORT="porta-que-deseja-utilizar"
    JWT_SECRET="sua-chave-secreta"
   ```

5. **Execute as migrations e seeders** (para criar o banco de dados)**:**
    ```
    npm run migrate
    npm run seed
    ```
    ou
    ```
    yarn migrate
    yarn seed
    ```

6. **Inicie o servidor:**
   ```bash
   npm run dev
   ```
   ou
   ```bash
   yarn dev
   ```

7. **Acesse a API localmente:** 
    ```
    http://localhost:3333
    ```

---

## Tecnologias Utilizadas
- **Node.js**
- **Express.js**
- **SQLite**
- **Knex.js** 
- **JWT (JSON Web Token)** 
- **Multer** 
- **BCrypt.js** 
- **Cors**
- **Dotenv**

---

## Funcionalidades
1. **Autenticação JWT**:
   - Tela de login e registro para acesso seguro.
   - Validação de senha.

2. **Admin**:
   - Criar pratos com nome, imagem, categoria, descrição, ingredientes e preço.
   - Editar e excluir pratos já cadastrados.
   - Upload de imagens para os pratos.

3. **Usuário**:
   - Visualizar o cardápio completo.
   - Pesquisar pratos pelo nome ou pelos ingredientes.
   - Visualizar detalhes de um prato específico.
   - Favoritar pratos para facilitar busca.

---

## Contato

Para mais informações, entre em contato:

- **Nome:** Guilherme Viana Batista
- **GitHub:** [https://github.com/guiogigo](#)
- **LinkedIn:** [https://www.linkedin.com/in/guilhermebatistadev/](#)
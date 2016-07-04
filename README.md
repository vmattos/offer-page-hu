offer-page-hu
=============

Utilize os seguintes comandos para rodar o projeto:

`npm run start` Roda o servidor de desenvolvimento

`npm run bs` Gera o bundle e roda servidor de produção

`npm run test` Roda os teste

`npm run watch:test` Roda testes em modo watch

`npm run lint` Roda o linter (ESlint)

---

## Arquitetura

As tecnologias adotas foram:

`React`: Pela facilidade em criar interfaces performaticas com alto reuso de componentes

`Redux`: Permite um ótimo controle do estado da aplicação

`cssnext`: Inclui todas as melhores funcionalidades dos atuais preprocessors com uma sintaxe future-proof

`Node.js`: Uso da mesma linguagem no backend e na interface, permitindo uma aplicação isomórfica  :)

`Babel`: Future-proof javascript 

`Webpack`: Bundling da aplicação

---

### TODOS

Problemas na aplicação que ainda podem ser melhorados:

- Melhor cobertura de testes
- Separar a *API* da camada *Web-Tier* 

---

### Caveats

A aplicação é isomórfica, e isso nos traz enormes vantagens. Porem também nos traz um caveat: O servidor irá demorar algum tempo para ligar. 
Esse problema, porém, não atrapalha o desenvolvimento da aplicação, já que o servidor em modo de desenvolvimento inclui middlewares de `hot-reload`.

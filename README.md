offer-page-hu
=============

Utilize os seguintes comandos para rodar o projeto:

`npm run start` Roda o servidor de desenvolvimento

`npm run test` Roda os testes

`npm run watch:test` Roda testes em modo watch

`npm run lint` Roda o linter (ESlint)

#### Atenção!

As dependências foram instaladas usando **npm@3**.
Devido às diferenças no tratamento das `peerDependencies` entre o **npm@2** e o **npm@3**, pode ser
que mensagens de erro sejam apresentadas ao instalá-las com **npm@2**.
Apesar das mensagens, o comportamento da aplicação permanece o mesmo.
De qualquer forma, recomendo que use **npm@3**

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
- Configurar server para modo de produção


---

### Caveats

A aplicação é isomórfica, e isso nos traz enormes vantagens. Porem também nos traz um caveat: O servidor irá demorar algum tempo para ligar.
Esse problema, porém, não atrapalha o desenvolvimento da aplicação, já que o servidor em modo de desenvolvimento inclui middlewares de `hot-reload`.

Alguns componentes externos foram utilizados. O react@15.1.0 exibe warnings avisando que determinadas props não utilizadas devem ser removidas.
O controle desse problema vai além do desenvolvedor da aplicação, e só pode ser resolvido pelo maintainer da biblioteca utillizada (ou que ele aceite os pull requests!).

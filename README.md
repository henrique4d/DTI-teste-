# DTI-teste-
Repositório contendo o teste proposto pela DTI.

	Utilizar React
	
**Status:**
Aceito.

**Contexto:**
Necessidade de escolha de um framework para a execução do projeto de acordo com as especificações dos requisitos.

**Decisão:**
Utilização do framework React.

**Consequências:**
Facilidade para encontrar material, devido a grande comunidade. Possibilidade de reuitilização de componentes. Facil expanção para uma possível aplicação mobile no futuro com a utilização do React Native.

	Utilizar Node

**Status:**
Aceito.

**Contexto:**
Necessidade de escolha de uma tecnologia para ser empregada no backend de acordo com as especificações dos requisitos.

**Decisão:**
Utilização de Node.js.

**Consequências:**
Facilidade para encontrar material, devido a grande comunidade. Grande escalabilidade no backend.

	Utilizar Sqlite

**Status:**
Aceito.

**Contexto:**
Necessidade de escolha de um modelo de banco de dados de acordo com as especificações dos requisitos.

**Decisão:**
Utilização do Sqlite.

**Consequências:**
Utilização de um banco de dados de boa performance, com portabilidade para diferentes sistemas operacionais e com conteudo acessivel atraves de SQL queries.

	Utilizar Knex

**Status:**
Aceito.

**Contexto:**
Busca por uma forma de facilitar a conexão e manutenção do banco de dados.

**Decisão:**
Utilizar o Knex.js.

**Consequências:**
Tratamento de dados por parte do knex, evitando possiveis problemas de segurança, como SQL injection por exemplo. Uma grande escalabilidade proporcionada pelo esquema de migrations, que possibilita uma facil adição de novas relações/atributos no banco se necessário.

	Utilizar @material-ui

**Status:**
Aceito.

**Contexto:**
Busca por componentes prontos do react que pudessem tornar o desenvolvimento mais rapido e fácil.

**Decisão:**
Utilização do @material-ui.

**Consequências**
Grande facilidade na criação, manutenção e estilização de tabelas, abstraindo grande parte do trabalho que seria necessário ao criar tabelas manualmente.

	Abstração de rotas (backend)

**Status:**
Aceito.

**Contexto:**
Busca por uma arquitetura escalável.

**Decisão:**
Abstrair toda a parte de criação de rotas no backend para o arquivo routes.js.

**Consequências:**
Grande escalabilidade e manutenibilidade, visto que a criação/manutenção de qualquer rota pode ser feita através de modificações um unico arquivo.

	Abstração de rotas (frontend)

**Status:**
Aceito.

**Contexto:**
Busca por uma arquitetura escalável.

**Decisão:**
Abstrair toda a parte de criação de rotas no frontend para o arquivo routes.js.

**Consequências:**
Grande escalabilidade e manutenibilidade, visto que a criação/manutenção de qualquer rota pode ser feita através de modificações um unico arquivo.

	Abstração da interface do backend em controllers

**Status:**
Aceito.

**Contexto:**
Busca por uma arquitetura escalável.

**Decisão:**
Criação de controllers responsáveis pelos métodos disponiveis na aplicação, estando todos agrupados na pasta controllers.

**Consequências:**
Grande escalabilidade e manutebilidade, visto que modificações em um determinado método devem ser feitas atraves de modificações em um unico arquivo, e a adição de possíveis novas funcionalidades pode ser feita atraves da criação de novos controllers.

	Abstração da interface web em paginas

**Status:**
Aceito.

**Contexto:**
Busca por uma arquitetura escalavel.

**Decisão:**
Criação de arquivos separados para o controle de cada página do frontend, estando todos agrupados na pasta pages.

**Consequências:**
Grande escalabilidade e manutenibilidade, visto que modificações em uma determinada página devem ser feitas através de modificações em um único arquivo, e a adição de possíveis novas páginas pode ser feita através da criação de novos arquivos.

	Separação da criação e edição em duas paginas

**Status:**
Aceito.

**Contexto:**
Busca por uma arquitetura escalável.

**Decisão:**
Criação de duas páginas separadas para as funcionalidades de criação e edição respectivamente.

**Consequências:**
Grande escalabilidade e manutenibilidade, visto que um erro especifico na criação ou edição é facilmente corrígivel, e nao há problemas em uma possível evolução da aplicação na qual sejam incluídos atributos que devem ser informados na criação e nao podem ser editados posteriormente.

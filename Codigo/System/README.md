# Manual de uso

Uma ferramenta _low code_ para a construção de aplicações BFF.

## Estrutura de diretórios

Este diretório mantém os executáveis e o código minificado da ferramenta. Ele está organizado da seguinte forma:

- `App/`: Código compilado da API GraphQL.
  - `api.jar`: Executável da API GraphQL.
  - `.lein-env`: Arquivo de variáveis de ambiente utilizadas pela aplicação.
- `Manager/`: Código minificado (JavaScript) da interface de usuário (aplicação Web).
  - `UI/`: Contém o código e os artefatos da interface de usuário (Web).
  - `.env`: Arquivo de variáveis de ambiente utilizadas pelo `storage`.
  - `package.json`: Definição das dependências e _scripts_ para execução do gerenciador.
  - `storage.js`: _Script_ minificado que manipula o arquivo o EDN por meio de requisições HTTP.
- `example.edn`: Arquivo EDN com algumas especificações (válidas) de exemplo.

## Requisitos

- Para executar a **API GraphQL** é necessário ter um ambiente Java instalado nas versões 8 ou 11.
- Para executar o **Gerenciador Web** é necessário ter o Node.js instalado nas versões 12 ou 14.
- Para **ambos os módulos** é necessário ter uma variável de ambiente configurada com o nome `DEFINITION_PATH` com um path relativo apontando para um arquivo EDN (vazio ou já preenchido no formato correto).
  - Não é necessário que os dois módulos apontem para o mesmo arquivo, mas é importante garantir que eles estejam devidamente sincronizados para que as alterações sejam aplicadas na API.
  - Os arquivos `.lein-env` e `.env` podem ser utilizados em ambiente de desenvolvimento, mas o ideal é que sejam substituídos por variáveis de ambiente do sistema operacional.
  

## Como executar

Cada módulo (App e Manager) são executados de forma independente.

### Módulo APP

- Executar a aplicação.

```
java -jar api.jar
```

### Módulo Manager

- Baixar dependências.

```
npm install
```

- Executar a aplicação.

```
npm start
```
## Como utilizar o gerenciador (Manager)

Após configurar a variável de ambiente (apontando para um arquivo válido) e baixar as dependências, basta executar a aplicação. Feito isso, será possível acessá-la em um navegador pelo endereço `http://localhost:3000`, onde será carregada a seguinte tela:

[imagem settings]
> Aba de gerenciamento das configurações do servidor.

Os dados contidos no arquivo EDN serão carregados nessa interface de usuário e podem ser manipulados ao navegar pelas abas do sistema, selecionar elementos das listas à esquerda e editá-los pelos formulários à direita. 

[imagem schema types]
> Aba de gerenciamento de _schemas_ (_types_).

É possível criar um novo elemento, clicando no botão `Create New` ou selecionar um elemento da lista (se houver), clicando nele.
- Qualquer informação modificada no formulário será persistida somente ao clicar no botão `Save` e obter sucesso. Ao selecionar outro elemento ou aba, as alterações serão perdidas. Para adicionar um novo atributo dentro de um elemento, basta clicar no botão `Add` no topo da lista e, para excluí-lo, basta clicar no botão `Delete` agrupado nele. Por fim, para excluir um elemento completamente, basta clicar no botão `Delete` no topo do formulário. 
  - O botão de salvar ficará desabilitado enquanto as informações do formulário forem inválidas para serem persistidas. Quando todos os campos obrigatórios forem preenchidos, o botão ficará ativo e poderá ser clicado.
  - Ao salvar ou excluir um elemento, será exibido um pequeno alerta no topo do formulário informando o resultado da operação (sucesso ou erro). Há algumas regras que podem causar erro, como a tentativa de excluir um elemento que ainda é referenciado por outros (é preciso remover as referências primeiro), assim como a tentativa de criar um novo elemento com o mesmo nome de algum já existente (de qualquer tipo).

## Como utilizar a API GraphQL (App)

Após configurar a variável de ambiente (apontando para um arquivo válido), basta executar a aplicação. Feito isso, a aplicação irá carregar o arquivo EDN e validar o formato das especificações (se houver). Qualquer inconsistência com as especificações causará um erro de execução e exibirá uma explicação do problema no terminal, interrompendo a execução da aplicação. Caso contrário, se não houver nenhum erro das especificações, será possível acessar a interface do GraphiQL em um navegador pelo endereço `http://localhost:8080/graphiql`, onde será carregada uma interface semelhante à apresentada a seguir:

[imagem graphiql]
> Interface de documentação e exploração da API GraphQL.

Para realizar requisições para a API em execução, basta utilizar o endereço `http://localhost:8080/api`, enviando uma consulta no formato do GraphQL no corpo de uma requisição com o método `POST`.

As estruturas de dados exibidas da aba `Docs` utiliza as informações do arquivo EDN, por exemplo:

```clojure
{:RandomUser
 {:description "Returns an user with random data"
  :fields
  {:email  {:type :String}
   :phone  {:type :String}
   :gender {:type :RandomUserGender}
   :name   {:type :RandomUserName}}}}}
````

Esse é um exemplo de definição de um tipo **RandomUser**, que possui uma descrição (opcional) e alguns campos com seus respectivos tipos, podendo ser primitivos ou definidos com essa mesma estrutura.
- Esse formato de dados pode ser totalmente manipulado por meio do gerenciador (interface gráfica) ou editando diretamente o arquivo EDN, mas é importante seguir o mesmo padrão.

A definição de uma API externa também é muito semelhante, como: 

```clojure
{:method :get
 :uri    "https://api.adviceslip.com/advice/:adviceId"}
````

Nesse exemplo é possível ver que são definidos apenas o método HTTP e a URI para esse endpoint. Na URI ainda há um parâmetro de rota definido com o sinal de dois-pontos (`:`) antes do nome. Esse nome é livre, mas deve possuir um atributo equivalente (com o mesmo nome) na definição dos argumentos da _Query_ ou _Mutation_ que estiverem referenciando essa API. Entre esses argumentos também é possível definir formatos de dados para serem enviados no corpo e no cabeçalho da requisição. Já em relação aos parâmetros, todos que não estiverem definidos na URI do _endpoint_ serão, automaticamente, passados como _query params_ na requisição.

## Uso em produção

Todas as instruções e artefatos entregues neste diretório permitem a utilização completa da ferramenta em qualquer ambiente com sistema operacional Windows, Linux ou macOs, devidamente configurados com os requisitos citados neste manual. A implantação dessas aplicações em ambientes de produção não são diferentes de outras aplicações Java e Node.js, portanto, é possível integrá-las facilmente em ambientes proprietários já estabelecidos. Dito isso, é esperado que, nessa situação, sejam definidas algumas configurações, como a porta do servidor, `host`, `CORS`, variável de ambiente, entre outras.

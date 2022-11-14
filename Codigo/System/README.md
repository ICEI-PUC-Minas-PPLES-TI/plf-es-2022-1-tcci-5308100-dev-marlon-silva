# Manual de uso

**API Valve** — uma ferramenta _low code_ para a construção de aplicações BFF.

## Estrutura de diretórios

Este diretório mantém os executáveis e o código minificado da ferramenta. Ele está organizado da seguinte forma:

- `App/`: Código compilado da API GraphQL.
  - `api.jar`: Executável da API GraphQL.
  - `.lein-env`: Arquivo de variáveis de ambiente utilizadas pela aplicação.
- `Manager/`: Código minificado (JavaScript) da interface de usuário (aplicação Web).
  - `UI/`: Contém o código e os artefatos da interface de usuário (Web).
  - `.env`: Arquivo de variáveis de ambiente utilizadas pelo componente `storage`.
  - `package.json`: Definição das dependências e _scripts_ de execução do gerenciador.
  - `storage.js`: _Script_ minificado que manipula o arquivo EDN por meio de requisições HTTP.
- `example.edn`: Arquivo EDN com algumas especificações (válidas) de exemplo.

## Requisitos

- Para executar a **API GraphQL** é necessário possuir um ambiente Java configurado nas versões 8 ou 11.
- Para executar o **Gerenciador Web** é necessário possuir o Node.js instalado nas versões 12 ou 14.
- Para **ambos os módulos** é necessário possuir uma variável de ambiente configurada com o nome `DEFINITION_PATH` com um caminho relativo que aponte para um arquivo EDN (vazio ou já preenchido no formato correto).
  - Não é necessário que os dois módulos apontem para o mesmo arquivo, mas é importante garantir que eles estejam devidamente sincronizados para que as alterações sejam aplicadas na API.
  - Os arquivos `.lein-env` e `.env` podem ser utilizados em ambiente de desenvolvimento, mas o ideal é que sejam substituídos por variáveis de ambiente do sistema operacional.
  

## Como executar

Cada módulo (App e Manager) são executados de forma independente.

### Módulo App

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

![image](https://user-images.githubusercontent.com/38755766/201502724-0d333d94-35c0-46d3-819b-26693cb06f8a.png)
> Aba de gerenciamento das configurações do servidor.

Os dados contidos no arquivo EDN são carregados nessa interface de usuário e podem ser manipulados ao navegar pelas abas do sistema, selecionar elementos das listas à esquerda e editá-los pelos formulários à direita. 

![image](https://user-images.githubusercontent.com/38755766/201502697-9bca4da3-ac45-404b-88cf-905d16128d63.png)
> Aba de gerenciamento de _schemas_ (_types_).

É possível criar um novo elemento, clicando no botão `Create New` ou selecionar um elemento da lista (se houver), clicando nele.
- Qualquer informação modificada no formulário será persistida somente ao clicar no botão `Save`. Ao selecionar outro elemento ou aba, as alterações serão perdidas. Para adicionar um novo atributo dentro de um elemento, basta clicar no botão `Add` no meio do formulário e, para excluí-lo, basta clicar no botão `Delete` ao final de cada atributo. Por fim, para excluir um elemento completamente, basta clicar no botão `Delete` no topo do formulário. 
  - O botão de salvar permanece desabilitado enquanto as informações do formulário forem inválidas para serem persistidas. Quando todos os campos obrigatórios forem preenchidos, o botão ficará ativo e poderá ser clicado.
  - Ao salvar ou excluir um elemento, será exibido um pequeno alerta no topo do formulário informando o resultado da operação (sucesso ou erro). Há algumas regras que podem causar erro, como a tentativa de excluir um elemento que ainda é referenciado por outros (é preciso remover as referências primeiro), assim como a tentativa de criar um novo elemento com o mesmo nome de algum já existente (de qualquer tipo).

## Como utilizar a API GraphQL (App)

Após configurar a variável de ambiente (apontando para um arquivo válido), basta executar a aplicação. Feito isso, a aplicação irá carregar o arquivo EDN e validar o formato das especificações (se houver). Qualquer inconsistência nas especificações causará um erro de execução e exibirá uma explicação do problema no terminal, interrompendo a execução da aplicação. Caso contrário, se não houverem erros nas especificações, será possível acessar a interface do GraphiQL em um navegador pelo endereço `http://localhost:8080/graphiql`, onde será carregada uma interface semelhante à apresentada a seguir:

![image](https://user-images.githubusercontent.com/38755766/201502817-4e4a1624-1c2c-46f1-ab60-6874dcbb6cc7.png)
> Interface de documentação e exploração da API GraphQL.

Para realizar requisições para a API em execução, basta utilizar o endereço `http://localhost:8080/api`, enviando uma consulta no formato do GraphQL, no corpo de uma requisição HTTP com o método `POST`.

As informações exibidas na aba `Docs` também são obtidas no arquivo EDN, em estruturas como essa:

```clojure
{:RandomUser
 {:description "Returns an user with random data"
  :fields
  {:email  {:type :String}
   :phone  {:type :String}
   :gender {:type :RandomUserGender}
   :name   {:type :RandomUserName}}}}}
````

Esse é um exemplo de definição de um tipo chamado **RandomUser**, que possui uma descrição (opcional) e alguns campos com seus respectivos tipos, que podem ser primitivos ou pré-definidos com essa mesma estrutura.
- Esse formato de dados pode ser totalmente manipulado por meio do gerenciador (interface gráfica) ou editando diretamente no arquivo EDN, mas é importante seguir o mesmo formato.

A definição de uma API externa também é muito semelhante, como: 

```clojure
{:method :get
 :uri    "https://api.adviceslip.com/advice/:adviceId"}
````

Nesse exemplo, são definidos apenas o método HTTP e a URI de um endpoint. Na URI ainda há um parâmetro de rota definido com o símbolo de dois-pontos (`:`) no início do nome. A escolha desse nome é livre, mas deve haver um atributo equivalente (com o mesmo nome) na definição dos argumentos da _Query_ ou _Mutation_ que estiver referenciando essa API. Entre esses argumentos também é possível definir estruturas de dados para serem enviados no corpo e no cabeçalho da requisição. Já em relação aos parâmetros, todos que não estiverem definidos na URI do _endpoint_ serão, automaticamente, passados como _query params_ na requisição.

## Uso em produção

Todas as instruções e artefatos apresentados neste diretório permitem a utilização completa da ferramenta em qualquer ambiente com sistema operacional Windows, Linux ou macOs, devidamente configurados com os requisitos citados neste manual. A implantação dessas aplicações em ambiente de produção não difere de outras aplicações Java e Node.js, portanto, é possível integrá-las facilmente em ambientes proprietários já estabelecidos. Dessa forma, é esperado que, nessa situação, sejam definidas outras configurações, como a porta do servidor, host, CORS, variáveis de ambiente, entre outras. Algumas dessas configurações podem ser definidas na aba de configurações do servidor (na interface de usuário), enquanto outras são definidas no próprio ambiente de execução, por fora da aplicação. 

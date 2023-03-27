# Car Shop


<br>


Bem-vindo ao Car shop projeto de API de gerenciamento de concessionária de veículos com CRUD utilizando Programação Orientada a Objetos (POO) e banco de dados MongoDB com o framework do Mongoose.

Este projeto foi desenvolvido com o objetivo de aplicar os princípios da POO na construção de uma API para gerenciamento de uma concessionária de veículos. A API permitirá a realização das operações de CRUD (Create, Read, Update, Delete) para manipulação dos dados de veículos cadastrados.

A construção da API será realizada utilizando o banco de dados MongoDB com o framework do Mongoose, o que proporcionará uma fácil manipulação dos dados através de uma interface amigável e intuitiva.

<br>

## Rotas

A API possui as seguintes rotas:

Antes de cada rota utilize: `http://localhost:3001`

exemplo: `http://localhost:3001/cars`

- `/cars` - Rota do tipo `POST`, é o caminho que deve ser acessado para criar um novo carro no banco de dados. Os atributos necessários para criar um carro, como modelo, ano, cor, quantidade de portas e assentos, entre outros, são especificados na tabela fornecida.

- O corpo da requisição poderá seguir o formato abaixo:

  ```json
  {
    "model": "Marea",
    "year": 2002,
    "color": "Black",
    "status": true,
    "buyValue": 15.990,
    "doorsQty": 4,
    "seatsQty": 5
  }
  ```

- `/cars` - Rota do tipo `GET`, é o caminho para retornar e mostrar todos os carros salvos no banco de dados.

   ```json
        [
          {
            "id": "634852326b35b59438fbea2f",
            "model": "Marea",
            "year": 2002,
            "color": "Black",
            "status": true,
            "buyValue": 15.99,
            "doorsQty": 4,
            "seatsQty": 5
          },
          {
            "id": "634852326b35b59438fbea31",
            "model": "Tempra",
            "year": 1995,
            "color": "Black",
            "buyValue": 39,
            "doorsQty": 2,
            "seatsQty": 5
          }
        ]
      

- `/cars/:id` - Rota do tipo `GET`, é o caminho para retornar e mostrar um carro especificado pelo seu id no banco de dados.

     ```json
        {
          "id": "634852326b35b59438fbea2f",
          "model": "Marea",
          "year": 2002,
          "color": "Black",
          "status": true,
          "buyValue": 15.99,
          "doorsQty": 4,
          "seatsQty": 5
        }
      

- `/cars/:id` - Rota do tipo `PUT`, é o caminho para atualizar um carro especificado pelo seu id no banco de dados.

- O corpo da requisição poderá seguir o formato abaixo:
  ```json
  {
    "model": "Marea",
    "year": 1992,
    "color": "Red",
    "status": true,
    "buyValue": 12.000,
    "doorsQty": 2,
    "seatsQty": 5
  }
  ```

- `/motorcycles` - Rota do tipo `POST`, é o caminho que deve ser acessado para criar uma nova moto no banco de dados. Os atributos necessários para criar uma moto, como modelo, ano, cor, entre outros, são especificados na tabela fornecida.

- O corpo da requisição poderá seguir o formato abaixo:
  ```json
  {
    "model": "Honda Cb 600f Hornet",
    "year": 2005,
    "color": "Yellow",
    "status": true,
    "buyValue": 30.000,
    "category": "Street",
    "engineCapacity": 600
  }
  ```

- `/motorcycles` - Rota do tipo `GET`, é o caminho para retornar e mostrar todas as motos salvas no banco de dados.

  ```json
          [
            {
              "id": "634852326b35b59438fbea2f",
              "model": "Honda Cb 600f Hornet",
              "year": 2005,
              "color": "Yellow",
              "status": true,
              "buyValue": 30.000,
              "category": "Street",
              "engineCapacity": 600
            },
            {
              "id": "634852326b35b59438fbea31",
              "model": "Honda Cbr 1000rr",
              "year": 2011,
              "color": "Orange",
              "status": true,
              "buyValue": 59.900,
              "category": "Street",
              "engineCapacity": 1000
            }
          ]
        

- `/motorcycles/:id` - Rota do tipo `GET`, é o caminho para retornar e mostrar uma moto especificada pelo seu id no banco de dados.

  ```json
          {
            "id": "634852326b35b59438fbea31",
            "model": "Honda Cbr 1000rr",
            "year": 2011,
            "color": "Orange",
            "status": true,
            "buyValue": 59.900,
            "category": "Street",
            "engineCapacity": 1000
          }
  ````

- `/motorcycles/:id` - Rota do tipo `PUT`, é o caminho para atualizar uma moto especificada pelo seu id no banco de dados.

- O corpo da requisição poderá seguir o formato abaixo:

  ```json
  {
    "model": "Honda Cb 600f Hornet",
    "year": 2014,
    "color": "Red",
    "status": true,
    "buyValue": 45.000,
    "category": "Street",
    "engineCapacity": 600
  }
  ```

<br>

## Arquitetura de Software MSC

Optamos por utilizar a arquitetura MSC. que é uma estrutura de design de software que divide um aplicativo em três componentes principais: Model, Service e Controller.

- `Model`: A camada Model é a representação de um objeto no banco de dados, com seus atributos e relacionamentos. Ela lida com a leitura e escrita de dados no banco de dados e fornece uma interface para manipular esses dados.

- `Service`: A camada service é responsável por implementar a lógica de negócios do aplicativo. Ela geralmente encapsula uma ou mais operações do modelo e fornece uma camada adicional de abstração para o controller.

- `Controller`: A camada controller é responsável por lidar com as requisições HTTP e coordenar as interações entre os modelos e os serviços. Ela recebe as solicitações do usuário e decide qual serviço ou modelo deve ser usado para lidar com essa solicitação.

Ao usar a arquitetura MSC, a lógica de negócios é separada da camada de apresentação e da camada de armazenamento de dados, o que torna o código mais modular e escalável. Além disso, a separação de responsabilidades torna mais fácil testar cada componente separadamente.

Aqui estão alguns benefícios da arquitetura MSC:

- `Organização`: Com a divisão clara de responsabilidades, é mais fácil para os desenvolvedores entenderem e manterem o código.

- `Escalabilidade`: Como cada componente é independente, é possível escalar o aplicativo de forma granular, sem precisar escalá-lo como um todo.

- `Reutilização de código`: Como os serviços encapsulam a lógica de negócios, é possível reutilizar o mesmo serviço em várias partes do aplicativo.

- `Testabilidade`: Como cada componente é independente, é mais fácil escrever testes automatizados para cada componente.

<br>

## Testes

Foram implementados testes unitários durante o desenvolvimento da API para garantir seu correto funcionamento e evitar possíveis erros no código.

No back-end, foram implementados testes de unidade utilizando a biblioteca [Mocha](https://mochajs.org/), o framework de asserção [Chai](https://www.chaijs.com/) e a biblioteca de simulação [Sinon](https://sinonjs.org/).

<br>
<details>
  <summary><strong>Instalação</strong></summary><br />
 
<hr>
<details>
<summary><strong> ⚠️ Configurações mínimas para execução do projeto</strong></summary><br />

Na sua máquina você deve ter:

 - Sistema Operacional Distribuição Unix (Preferencialmente)
 - Node versão 16
 - Docker
 - Docker-compose versão >=1.29.2

➡️ O `node` deve ter versão igual ou superior à `16.14.0 LTS`:
  - Para instalar o nvm, [acesse esse link](https://github.com/nvm-sh/nvm#installing-and-updating);
  - Rode os comandos abaixo para instalar a versão correta de `node` e usá-la:
    - `nvm install 16.14 --lts`
    - `nvm use 16.14`
    - `nvm alias default 16.14`

➡️ O`docker-compose` deve ter versão igual ou superior à`ˆ1.29.2`:
  * Use esse [link de referência para realizar a instalação corretamente no ubuntu](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/5987fa2d-0d04-45b2-9d91-1c2ffce09862/day/2f1a5c4d-74b1-488a-8d9b-408682c93724/lesson/b883b81d-21f6-4b60-aa62-8508f6017ea0);
  * Acesse o [link da documentação oficial com passos para desinstalar](https://docs.docker.com/compose/install/#uninstallation) caso necessário.

</details>
<hr>
<br>

> - :warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.

> - :warning: Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima

> - :warning: Se você se deparar com o erro abaixo, quer dizer que sua aplicação já esta utilizando a `porta 3001`, seja com outro processo do Node.js (que você pode parar com o comando `killall node`) ou algum container! Neste caso você pode parar o container com o comando `docker stop <nome-do-container>`

<br>

<br>

- Clone o repositório `git@github.com:Lucdainez/car_shop.git`: 

```bash
git clone git@github.com:Lucdainez/car_shop.git
```

<br>

- Entre na pasta do repositório que você acabou de clonar:

```bash
cd car_shop
```

<br>

- Rode o docker-compose com o comando:

```bash
docker-compose up -d
```
<br>

- Entre no terminal interativo do docker com o comando:

```bash
docker exec -it car_shop bash
```
<br>

- Instale as depëndencias, caso necessário, com `npm install`:

```bash
npm install
```
<hr>
<br>

### Executando a API:


- Rode a API  com o comando na raiz do projeto:
> Executará a aplicação em modo de desenvolvimento.
 
```bash
npm run dev
```

<hr>
<br>

### Testando a API:

- Execute os testes com o comando:
> Executará os testes unitários.
 
```bash
npm run test:mocha
```

<hr>
<br>

### Contribuição

Contribuições são sempre bem-vindas! Para contribuir com o projeto, siga as instruções abaixo:

- Fork este repositório

> Crie uma nova branch com sua feature ou correção de bug:

```bash
git checkout -b sua-feature-ou-correcao
```

- Faça as alterações necessárias e commit as mudanças:

```bash
git commit -m "sua mensagem de commit"
```

- Envie suas alterações para seu repositório remoto:

```bash
git push origin sua-feature-ou-correcao
```

- Crie um `Pull Request` para o repositório original.

<hr>

</details>

<br>

## Autor

- [Lucas Dainez](https://github.com/Lucdainez)

## Referências

 - [Trybe](https://www.betrybe.com/)

## Tecnologias e Ferramentas

- Linguagem: [TypeScript](https://www.typescriptlang.org/)
- Paradigma de Programação: [Programação Orientada a Objetos(POO)](https://blog.betrybe.com/tecnologia/poo-programacao-orientada-a-objetos/)
- Plataforma de desenvolvimento: [Node](https://nodejs.org/en/)
- Virtualização: [Docker](https://www.docker.com/)
- Padrão de arquitetura de API: [API RESTful](https://blog.betrybe.com/desenvolvimento-web/api-rest-tudo-sobre/)
- Padrão de arquitetura do Software: [Model-Service-Controller](https://www.devmedia.com.br/introducao-ao-padrao-mvc/29308) 
- Framework de arquitetura de APIwork web: [Express](https://expressjs.com/)
- Banco de dados: [MongoDB](https://www.mongodb.com/)
- ODM: [Mongoose](https://mongoosejs.com/)
- Cliente de teste de API: [Thunder Client](https://www.thunderclient.com/)
- Linter de código: [ESLint](https://eslint.org/)
- Editor de código: [Visual Studio Code](https://code.visualstudio.com/)
- Sistema de controle de versão: [Git](https://git-scm.com/) e [GitHub](https://github.com/)
- Sistema operacional: [Windows](https://www.microsoft.com/pt-br/windows/?r=1)

## Testes

- Framework de teste de unidade: [Jest](https://jestjs.io/pt-BR/)
- Framework de teste de unidade: [Mocha](https://mochajs.org/)
- Biblioteca de assertividade para teste de unidade: [Chai](https://www.chaijs.com/)
- Biblioteca de espiões, stubs e mocks para testes: [Sinon](https://sinonjs.org/)

<br>
<hr>

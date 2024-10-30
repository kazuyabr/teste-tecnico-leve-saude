# API de Agendamento Médico

API desenvolvida em Node.js com TypeScript, utilizando Serverless Framework e AWS Lambda.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Serverless Framework (com suporte nativo TypeScript/ESBuild)
- Jest
- ts-node
- ts-jest
- AWS Lambda
- API Gateway

## Estrutura do Projeto

```bash
src/
├── agenda/
│   ├── interface/
│   ├── mocks/
│   ├── service/
│   ├── controller/
│   └── __tests__/
├── agendamento/
│   ├── interface/
│   ├── mocks/
│   ├── service/
│   ├── controller/
│   └── __tests__/
└── utils/
    ├── interfaces/
    └── mocks/

```

## Dependências de Desenvolvimento

```npm install -D @types/aws-lambda @types/jest eslint jest prettier serverless serverless-offline typescript```

```## Instalação

Instale as dependências do projeto:

```npm install```

**Comandos Disponíveis**

* Desenvolvimento -> `npm run dev`
* Produção -> `npm run start`
* Testes -> `npm run test`
* Build -> `npm run build`
* Deploy -> `npm run deploy`
* Lint -> `npm run lint`
* Formatação -> ```npm run format```

## Endpoints

**GET /agendas**

retorna lista de médicos com horários disponíveis.

**POST /agendamento**

Cria um novo agendamento médico.

Payload:

```json
{
"medico_id": 1,
"paciente_nome": "João Silva",
"data_horario": "2024-10-05 09:00"
}
```
**Testes**

Para executar os testes:

```npm test```

**Deploy**

```serverless deploy```

## Desenvolvimento Local

Para rodar o projeto localmente usando serverless-offline:

```bash
npm run start
```
ou diretamente:

```serverless offline start```

A API estará disponível em: http://localhost:3000

Endpoints locais:

* GET http://localhost:3000/agendas
* POST http://localhost:3000/agendamento

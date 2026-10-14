# Seminário Grafana — Monitoramento e Visualização de Métricas

Projeto acadêmico desenvolvido para um **seminário técnico introdutório sobre Grafana**, com apresentação teórica e demonstração prática.

A proposta é construir um ambiente simples de observabilidade em que uma aplicação Node.js expõe métricas, o Prometheus realiza a coleta e o Grafana apresenta essas informações em dashboards.

## Objetivo

Demonstrar, de forma introdutória e prática, como o Grafana pode ser utilizado para visualizar e acompanhar métricas de uma aplicação.

O projeto busca apresentar:

- o problema que o Grafana ajuda a resolver;
- conceitos fundamentais de monitoramento e observabilidade;
- arquitetura básica com Grafana e Prometheus;
- coleta de métricas de uma aplicação;
- construção de dashboards;
- vantagens, limitações e casos de uso;
- demonstração prática do ambiente funcionando.

## Arquitetura planejada

```text
Aplicação Node.js
       │
       │ /metrics
       ▼
   Prometheus
       │
       │ consultas
       ▼
     Grafana
       │
       ▼
    Dashboard
```

O ambiente completo será integrado posteriormente com Docker Compose.

## Estrutura do repositório

```text
seminario-grafana/
│
├── app/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── docs/
│
├── grafana/
│
├── prometheus/
│
├── slides/
│
├── .gitignore
└── README.md
```

> `node_modules/` é gerado localmente pelo npm e não deve ser versionado.

## Status do projeto

### Fase 1 — Pesquisa e planejamento

Concluída.

Foram realizadas pesquisas sobre:

- problema que o Grafana resolve e casos de uso;
- conceitos fundamentais;
- arquitetura Grafana + Prometheus;
- vantagens, limitações e exemplos práticos.

### Fase 2 — Preparação do ambiente

Em andamento.

| Tarefa | Status |
|---|---|
| Criar API Node.js básica e validar execução local | Concluída |
| Configurar Prometheus | Pendente |
| Configurar Grafana e Data Source Prometheus | Pendente |
| Criar Docker Compose e integrar os serviços | Pendente |

## API de demonstração

A API foi criada com **Node.js + Express** e funciona atualmente na porta `3000`.

### Endpoints

| Método | Endpoint | Finalidade |
|---|---|---|
| GET | `/` | Verifica se a API está online |
| GET | `/api/test` | Gera uma requisição de teste |
| GET | `/api/users` | Retorna dados simulados |
| GET | `/api/error` | Gera propositalmente um erro HTTP 500 |
| GET | `/metrics` | Expõe a métrica inicial no formato Prometheus |

### Métrica atual

Neste estágio, o endpoint `/metrics` disponibiliza apenas uma métrica simples:

```text
# HELP api_up Indica se a API esta online
# TYPE api_up gauge
api_up 1
```

A instrumentação completa será realizada na próxima fase, com métricas como:

```text
http_requests_total
http_errors_total
http_request_duration_seconds
```

## Como executar a API

### Pré-requisitos

- Node.js
- npm

O ambiente de desenvolvimento atual utiliza Node.js 24 e npm 11.

### Instalação

Entre na pasta da aplicação:

```bash
cd app
```

Instale as dependências:

```bash
npm install
```

Inicie a API:

```bash
npm start
```

A aplicação ficará disponível em:

```text
http://localhost:3000
```

## Testes rápidos

### Status da API

```bash
curl http://localhost:3000/
```

### Endpoint de teste

```bash
curl http://localhost:3000/api/test
```

### Usuários simulados

```bash
curl http://localhost:3000/api/users
```

### Erro controlado

```bash
curl -i http://localhost:3000/api/error
```

O retorno esperado inclui:

```text
HTTP/1.1 500 Internal Server Error
```

Esse erro é proposital e será utilizado posteriormente para gerar métricas de falha.

### Métricas

```bash
curl http://localhost:3000/metrics
```

Resposta esperada:

```text
# HELP api_up Indica se a API esta online
# TYPE api_up gauge
api_up 1
```

## Planejamento

O desenvolvimento está organizado em seis fases:

| Versão | Fase |
|---|---|
| v0.1 | Pesquisa e planejamento |
| v0.2 | Preparação do ambiente |
| v0.3 | Instrumentação e coleta |
| v0.4 | Dashboard Grafana |
| v0.5 | Slides e demonstração |
| v1.0 | Validação e entrega final |

## Próximos passos

Na sequência do projeto serão realizados:

1. configuração do Prometheus;
2. conexão do Prometheus ao endpoint `/metrics`;
3. configuração do Grafana;
4. cadastro do Prometheus como Data Source;
5. criação do Docker Compose;
6. implementação das métricas reais da aplicação;
7. construção do dashboard;
8. preparação da demonstração prática e dos slides.

## Demonstração final prevista

A apresentação deverá demonstrar o seguinte fluxo:

```text
Usuário gera requisições
        ↓
API Node.js recebe as chamadas
        ↓
Métricas são atualizadas
        ↓
Prometheus coleta as métricas
        ↓
Grafana consulta o Prometheus
        ↓
Dashboard apresenta os resultados
```

A demonstração deverá permitir visualizar, entre outras informações:

- total de requisições;
- quantidade de erros;
- requisições por segundo;
- tempo de resposta;
- comportamento das métricas ao gerar carga na API.

## Contexto acadêmico

Projeto desenvolvido para a disciplina de **Sistemas de Informação — UniSales**, como seminário técnico sobre Grafana, incluindo fundamentação teórica, arquitetura e aplicação prática.

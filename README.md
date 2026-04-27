# 🚀 BizDash Pro — Dashboard de Inteligência de Negócios

Sistema full stack de **análise de performance empresarial**, com foco em visualização de dados, métricas de negócio e tomada de decisão baseada em dados.

---

## 🧠 Visão do Projeto

O **BizDash Pro** é um dashboard analítico que simula um ambiente real de empresa, permitindo visualizar KPIs como:

- 📊 Leads gerados
- 🎯 Taxa de conversão
- 💰 Receita total
- 📈 ROI de marketing
- 🧠 Crescimento e tendências
- 📅 Atividade semanal

O sistema integra backend, banco de dados e frontend em uma arquitetura simples, porém escalável.

---

## 🏗️ Arquitetura do Sistema

```text
Frontend (React)
        ↓
API (Node.js + Express)
        ↓
Banco de Dados (PostgreSQL)
```
---

## ⚙️ Tecnologias Utilizadas

### 💻 Frontend
- React
- Chart.js
- Axios
- CSS moderno (UI estilo SaaS)

### 🔧 Backend
- Node.js
- Express
- PostgreSQL
- Cálculo de métricas em tempo real

---

## 📊 Funcionalidades

### 📈 Dashboard
- Cards com métricas principais
- Gráficos dinâmicos (Bar, Line, Doughnut)
- Insights automáticos de performance

### 🧠 Inteligência de Dados
- Cálculo de ROI
- Taxa de conversão
- Crescimento percentual
- Agregação de dados via SQL

### 🗄️ Banco de Dados
- Armazenamento de leads
- Controle de conversões
- Registro de receita

---

## 🧱 Estrutura do Projeto

```
bizdash-pro/
│
├── backend/
│ ├── server.js
│ ├── db.js
│ └── routes/
│ └── metrics.js
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ └── Dashboard.js
│ │ ├── api.js
│ │ └── dashboard.css
```

---

## 🗄️ Banco de Dados

### 📌 Tabela principal: `leads`

```sql
CREATE TABLE leads (
  id SERIAL PRIMARY KEY,
  converted BOOLEAN,
  revenue NUMERIC
);
```
### 📌 Dados de exemplo:

```sql
INSERT INTO leads (converted, revenue) VALUES
(true, 100),
(false, 0),
(true, 250),
(true, 300),
(false, 0);
```
---

## 🚀 Como Executar o Projeto

### 🔧 Backend

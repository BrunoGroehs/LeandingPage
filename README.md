# Leadr Landing Page

Este é o projeto completo da Landing Page da Leadr, construído com **Next.js**, **React**, **Tailwind CSS** e **Framer Motion**.

## Como executar o projeto

Como o Node.js não estava instalado no seu ambiente no momento da criação, eu gerei toda a estrutura de código para você. Para rodar o projeto, siga os passos abaixo:

### 1. Instale o Node.js
Baixe e instale a versão LTS do Node.js no site oficial: [https://nodejs.org/](https://nodejs.org/)

### 2. Instale as dependências
Abra o terminal na pasta do projeto (`Site Leadr`) e rode o comando:
```bash
npm install
```

### 3. Rode o servidor de desenvolvimento
Após a instalação, inicie o servidor com:
```bash
npm run dev
```

### 4. Acesse no navegador
Abra o seu navegador e acesse: [http://localhost:3000](http://localhost:3000)

---

## Estrutura do Projeto

- `src/app/page.tsx`: A página principal que une todas as seções.
- `src/app/globals.css`: Estilos globais, incluindo o Dark Mode e efeitos de Glow/Glassmorphism.
- `src/components/`: Contém todas as seções da página (Hero, Problem, Solution, TestDrive, SocialProof, FAQ, Footer, StickyCTA).
- `tailwind.config.ts`: Configuração das cores (Verde WhatsApp, Dourado, Dark Mode) e fontes.

## Tecnologias Utilizadas
- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS** (Estilização)
- **Framer Motion** (Animações fluidas e interações)
- **Lucide React** (Ícones)

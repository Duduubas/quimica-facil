# 🧪 Química Fácil | Redesign Não Oficial

![Redesign](https://img.shields.io/badge/Redesign-N%C3%A3o%20Oficial-orange)
![Química Fácil](https://img.shields.io/badge/Qu%C3%ADmica%20F%C3%A1cil-Educa%C3%A7%C3%A3o%20Digital-blue)
![Next.js](https://img.shields.io/badge/Next.js-Framework-black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styling-38bdf8)
![Status](https://img.shields.io/badge/Status-Projeto%20Pessoal-brightgreen)

> **AVISO: Este é um projeto pessoal de redesign, não afiliado ou contratado pelo Química Fácil original.**
> 
> Este projeto é uma releitura/atualização de design do site existente, criado como exercício de desenvolvimento e modernização de interface.

## 📋 Conteúdo

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Funcionalidades](#-funcionalidades)
- [Instalação e Configuração](#-instalação-e-configuração)
- [Motivação do Redesign](#-motivação-do-redesign)

## 🧠 Sobre o Projeto

Este é um **redesign não oficial** da plataforma Química Fácil, um site educacional para cursos de química voltados a vestibulares. O conteúdo e conceito original foram mantidos, porém com uma interface completamente renovada para melhorar a experiência do usuário e a estética visual.

A proposta central mostrada na plataforma original é proporcionar materiais didáticos personalizados de acordo com o vestibular escolhido pelo estudante, maximizando o tempo de estudo com conteúdos direcionados às necessidades específicas de cada exame.

### 💭 Motivação do Redesign

Este projeto nasceu após identificar oportunidades de melhoria no site original. A versão existente apresentava problemas de usabilidade e design antiquado, o que motivou a criação desta versão atualizada como exercício de aplicação de tecnologias modernas e princípios de UX/UI.

## 🚀 Tecnologias Utilizadas

O redesign foi construído com tecnologias modernas para garantir performance e experiência do usuário:

- **Next.js**: Framework React para renderização e roteamento eficientes
- **TypeScript**: Adiciona tipagem estática para maior robustez ao código
- **TailwindCSS**: Framework CSS utilitário para estilização rápida e responsiva
- **Lucide React**: Biblioteca de ícones moderna e elegante

## 📁 Estrutura do Projeto

```
química-fácil-redesign/
├── public/
│   └── img/
│       └── logo.webp
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── footer.tsx
│       ├── header.tsx
│       └── main.tsx
├── package.json
└── README.md
```

## 🧩 Componentes Principais

### Header (`header.tsx`)
Barra de navegação responsiva com links para as principais seções do site:
- Início
- Conteúdos
- Acesso aos Cursos
- Acesso aos Grupos
- Comprar Plano
- Contato
- Login

### Main (`main.tsx`)
Contém as seções principais da página inicial:
- **Hero Section**: Apresentação principal do site
- **Intro Section**: Apresentação do conceito do Química Fácil
- **Courses Section**: Exibição dos cursos específicos disponíveis
- **Teacher Section**: Informações sobre o Prof. Richard Sintra

### Footer (`footer.tsx`)
Rodapé com informações de contato, políticas e:
- **CTA Section**: Call-to-action para matrícula
- **Informações**: Dados de contato e localização
- **Política**: Informações sobre entrega de materiais e reembolso
- **Satisfação**: Garantia de satisfação
- **Copyright**: Direitos reservados

## ✨ Funcionalidades Representadas

Baseado no conteúdo do site original:

- **Cursos Específicos**: Materiais personalizados para diferentes vestibulares
- **Material Digital**: Acesso imediato a PDFs e conteúdos na plataforma
- **Conteúdo Gratuito**: Amostras de videoaulas para cada curso
- **Planos de Acesso**: Diferentes opções para necessidades variadas

### 🎓 Cursos Mencionados (Conteúdo Original)

- **Curso URCA**: 25 videoaulas + 3 e-books
- **Curso UECE**: 20 videoaulas (10 para cada fase) + 4 e-books
- **SSA 1**: 15 videoaulas cobrindo todo o conteúdo da prova

## 🔧 Instalação e Configuração

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/quimica-facil-redesign.git

# Entre no diretório do projeto
cd quimica-facil-redesign

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

O servidor de desenvolvimento estará disponível em `http://localhost:3000`.

## 🎨 Melhorias Implementadas no Redesign

- Interface mais moderna e responsiva
- Melhor organização visual do conteúdo
- Sistema de navegação mais intuitivo
- Uso de componentes reutilizáveis
- Design consistente e alinhado com tendências atuais
- Melhoria na acessibilidade e experiência do usuário

---

**Nota:** Este é um projeto de estudo e portfólio, não representando qualquer afiliação com a marca ou serviço original. Todo o conteúdo referenciado pertence aos seus respectivos proprietários.
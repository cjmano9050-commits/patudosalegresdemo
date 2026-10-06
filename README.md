# Patudos Alegres — Next.js

Conversão do projeto HTML original do Patudos Alegres para Next.js com App Router, React e TypeScript, preservando conteúdo, estilos, responsividade, links e a interação do menu mobile.

## Requisitos

- Node.js 20.9 ou superior
- npm

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Build de produção

```bash
npm run build
npm start
```

## Lint

```bash
npm run lint
```

## Deploy na Vercel

Não há configuração especial obrigatória. Importe o repositório no projeto da Vercel e mantenha o preset **Next.js** e os comandos padrão. O build usa `npm run build` e a Vercel hospeda o resultado automaticamente.

## Variáveis de ambiente

Nenhuma variável de ambiente é necessária para esta versão. Os links externos do WhatsApp, Instagram, Google Maps, Google Fonts, Font Awesome e Unsplash permanecem públicos, como no projeto original.

## Assets

O HTML original não continha arquivos locais de imagens, fontes ou ícones: as imagens são URLs do Unsplash, as fontes são carregadas do Google Fonts e os ícones do Font Awesome CDN. Por isso, não há uma pasta de imagens local a copiar. O favicon `app/icon.svg` foi adicionado como recurso nativo do Next.js.

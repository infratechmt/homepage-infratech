# Infratech Site (Vite + React + Tailwind + Three.js)

## Como rodar
1) Instale Node.js (LTS).
2) Instale as dependências:
```bash
npm install
```
3) Rode o projeto:
```bash
npm run dev
```
4) Abra: http://localhost:5173

## Personalizar
- Troque o número do WhatsApp em `src/components/InfratechLanding.tsx`:
```ts
const WHATSAPP_PHONE = "5565999999999"; // sem + e sem traços
```
- Mensagem padrão:
```ts
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Vim pelo site da Infratech...");
```
- Coloque seu `logo.svg` em `src/assets/logo.svg` (um provisório já está incluso).
- Edite `public/og.jpg` para sua imagem de compartilhamento.

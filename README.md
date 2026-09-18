# Projeto: Buscador de Países

**Descrição:** Uma aplicação React SPA inspirada no Buscador de Filmes, que consome a **REST Countries API** para listar países, filtrar por continentes e exibir detalhes completos (bandeira, brasão, moedas, idiomas, etc). 

## Objetivos e Conceitos Trabalhados
- **Requisições HTTP (Axios):** Consumir a REST Countries API sem necessidade de chave de autenticação.
- **Roteamento (React Router DOM):** Navegação entre diferentes páginas.
- **Rotas Dinâmicas:** Passagem do código do país na URL (ex: `/pais/BRA`) para buscar detalhes específicos na API.
- **Abas de Filtro:** Filtro por continentes (Africa, Americas, Asia, Europe, Oceania).
- **LocalStorage:** Favoritar países e persisti-los localmente através do Custom Hook `useFavorites`.

## Como Executar
1. Instale as dependências com `npm install`.
2. Rode a aplicação com `npm run dev`.
3. Navegue livremente pela aplicação (A API REST Countries é 100% gratuita e não precisa de API Key).

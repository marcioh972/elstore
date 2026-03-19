# Elstore — Loja de Tecnologia

> Meu segundo projeto: uma loja virtual de produtos Apple, com carrossel animado, grade de produtos, sistema de navegação e rodapé completo. Desenvolvido com HTML, CSS e JavaScript puro.

---

##  Preview

<!-- Adicione um screenshot ou gif do projeto aqui -->
<!-- Exemplo: ![Preview do projeto](./screenshot.png) -->

>  Dica: use a extensão **GoFullPage** no Chrome para capturar a tela inteira e adicionar aqui.

---

##  Funcionalidades

-  **Carrossel de produtos** com transição suave entre slides
-  **Setas de navegação** para passar os slides manualmente
-  **Autoplay** — troca de slide automática a cada 5 segundos
-  **Dots indicadores** clicáveis com contador numérico animado
-  **Contador de slides** (01, 02, 03...) em tempo real
-  **Grade de 4 produtos** em destaque com cards interativos
-  **Tags diferenciadas** por tipo (Novo, Mais Vendido, Premium)
-  **Header fixo** com navegação e logo neon
-  **Rodapé completo** com links, categorias, suporte e redes sociais
-  **Estética cyberpunk/tech** com efeitos neon, glassmorphism e animações CSS

---

## 🚀 Como rodar o projeto

Não precisa instalar nada! É só HTML, CSS e JS puro.

**1. Clone o repositório:**
```bash
git clone https://github.com/marcioh972/elstore.git
```

**2. Acesse a pasta:**
```bash
cd elstore
```

**3. Abra no navegador:**
```bash
# Opção 1 — abra direto pelo explorador de arquivos:
Clique duas vezes no arquivo index.html

# Opção 2 — use o Live Server no VS Code:
Clique com botão direito em index.html → "Open with Live Server"
```

>  **Importante:** as imagens (`apple-watch.png`, `air-pods.png`, `vision-pro.png`, `ihpne 16 pro`) precisam estar na mesma pasta do `index.html` para aparecerem corretamente.

---

##  Estrutura de arquivos

```
elstore/
│
├── index.html       ← estrutura da página
├── style.css        ← todo o visual e animações
├── script.js        ← lógica do carrossel
│
├── apple-watch.png
├── air-pods.png
└── vision-pro.png
```

---

##  Tecnologias usadas

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica da página |
| **CSS3** | Estilização, animações e layout responsivo |
| **JavaScript (ES6+)** | Lógica do carrossel e interatividade |
| **Google Fonts** | Fontes Orbitron e Montserrat |
| **CSS Variables** | Sistema de cores e temas consistentes |
| **Flexbox & Grid** | Layout do header, cards e rodapé |
| **CSS Animations** | Efeitos de entrada, flutuação e rotação |

---

##  O que aprendi nesse projeto

- Como estruturar um **carrossel do zero** sem bibliotecas externas
- O conceito de **loop circular com módulo (`%`)** para navegação infinita
- Diferença entre `position: fixed`, `absolute` e `relative` e como eles interagem
- Como usar **CSS Variables** (`--cyan`, `--bg`) para manter um design consistente
- O poder do **`pointer-events`** para controlar quais elementos recebem cliques
- Como criar **efeitos neon** com `text-shadow` e `box-shadow`
- A técnica de **gradiente no texto** com `background-clip: text`
- Como o **`z-index`** funciona em camadas e por que a ordem importa
- Uso do **`localStorage`** para persistir dados no navegador (próxima versão)
- Como o **`setInterval`** e **`clearInterval`** funcionam para o autoplay

---

## Próximos passos

- [ ] Criar a página `produtos.html` com catálogo completo
- [ ] Adicionar **filtro de preços** com slider interativo
- [ ] Implementar **carrinho de compras** com `localStorage`
- [ ] Criar página de **checkout** com resumo do pedido
- [ ] Tornar o layout **responsivo** para mobile
- [ ] Adicionar **animações de scroll** com Intersection Observer
- [ ] Integrar com uma **API de pagamentos** (ex: Stripe, Mercado Pago)

---

## Autor

Feito por Márcio Henrique

[![GitHub](https://img.shields.io/badge/GitHub-marcioh972-181717?style=flat&logo=github)](https://github.com/marcioh972)

---

## Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.

---

⭐ Se gostou do projeto, deixa uma estrela no repositório!

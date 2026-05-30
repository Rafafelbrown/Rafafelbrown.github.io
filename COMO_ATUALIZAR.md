# 🚀 Guia de Manutenção e Atualização do Portfólio

Este guia prático foi criado para ajudar você, **Rafael**, a atualizar o seu portfólio de forma simples e rápida conforme a sua carreira em Ciência de Dados e Machine Learning avança.

---

## 🛠️ Como o Portfólio foi Estruturado

No código do arquivo `index.html`, foram adicionados comentários especiais com a tag `✏️ EDITAR` logo acima de cada seção importante. Isso permite que você aperte `Ctrl + F` (ou `Cmd + F`) no seu editor de código (como o VS Code) e pesquise por `EDITAR` para pular direto para a linha que deseja alterar!

---

## ✏️ Situações Comuns de Atualização

### 1. Conquistou um Estágio! 🎉
Quando você começar um estágio, deve atualizar os seguintes pontos em `index.html`:

*   **Status do Topo (Hero Badge - Linha ~45):**
    ```html
    <!-- ✏️ EDITAR: Status atual -->
    <div class="hero-badge" id="hero-badge">
      <span></span> Estagiário de Ciência de Dados na [Nome da Empresa] · Brasília, DF
    </div>
    ```
*   **Parágrafo de Objetivo (Linha ~100):**
    Mude o texto sobre "Em busca da primeira oportunidade" para algo como:
    ```html
    <!-- ✏️ EDITAR: Objetivo atual -->
    <p>
      Atualmente atuando como <strong>Estagiário de Ciência de Dados na [Empresa]</strong>, aplicando Python, SQL e machine learning para gerar valor real ao negócio...
    </p>
    ```
*   **Linha do Tempo (Timeline - Linha ~350):**
    Adicione o seu estágio no topo da lista (antes do UniCEUB):
    ```html
    <!-- ✏️ ESTÁGIO: Adicione ANTES do UniCEUB -->
    <div class="timeline-item">
      <div class="timeline-date">mês/2026 – atual</div>
      <div class="timeline-title">Estagiário de Ciência de Dados</div>
      <div class="timeline-sub">[Nome da Empresa] · Brasília, DF</div>
    </div>
    ```

---

### 2. Se Formou! 🎓
Quando você se formar no UniCEUB:

*   **Sobre Mim (Linhas ~85 e ~121):**
    *   Mude "Graduando em" para **"Graduado em"**.
    *   Mude "com conclusão prevista para 2026" para **"Formado em 2026"**.
    *   No card de estatísticas (linha ~121), mude o label para "UniCEUB · 2026".
*   **Linha do Tempo (Timeline - Linha ~350):**
    *   Mude a data de "2022 – 2026 (em curso)" para **"2022 – 2026"** (remova o "em curso").

---

### 3. Concluiu um Novo Curso ou Certificado 🏅
Sempre que concluir um curso de peso (Alura, ENAP, Coursera, etc.):

*   **Contador de Cursos (Estatísticas - Linha ~109):**
    Aumente o número no card correspondente (ex: de `11+` para `12+`).
*   **Grade de Certificados (Certs Grid - Linha ~390):**
    Adicione o novo card no topo da lista e mova o indicador `⭐ Mais recente` para ele:
    ```html
    <!-- ✏️ EDITAR CERTIFICAÇÕES: Adicione no topo -->
    <div class="cert-card">
      <span class="cert-icon">🤖</span>
      <div class="cert-info">
        <div class="cert-title">[Nome do Novo Curso]</div>
        <div class="cert-org">[Plataforma] · [mês/ano] ⭐ Mais recente</div>
      </div>
    </div>
    ```

---

### 4. Adicionou um Novo Projeto no GitHub 💻
*   Vá até a seção de Projetos (linha ~240).
*   Duplique um dos blocos `<div class="project-card">` e edite o título, descrição, tags de tecnologia e o link do botão para direcionar para o novo repositório.
*   Altere a classe do status de acordo com o estado do projeto:
    *   `status-done` para Concluído (verde)
    *   `status-wip` para Em Desenvolvimento (amarelo)
    *   `status-academic` para Acadêmico (roxo)

---

### 5. Atualizou o Currículo (CV) 📄
O botão "Baixar CV" no Hero aponta para o arquivo `cv-rafael-brown.pdf` na raiz do repositório.

*   Para atualizar o CV, basta **substituir o arquivo** `cv-rafael-brown.pdf` por uma versão nova com o **mesmo nome**.
*   Não mude o nome do arquivo — assim o botão continua funcionando sem nenhuma alteração no HTML.

```bash
# Após substituir o arquivo:
git add cv-rafael-brown.pdf
git commit -m "docs: atualiza curriculo"
git push origin main
```

---

### 6. Preview rico no LinkedIn (og:image) 🖼️
O portfólio já está configurado com Open Graph completo (`og:title`, `og:description`, `og:image`, `og:url`). Quando alguém compartilhar o link **https://rafafelbrown.github.io** no LinkedIn ou WhatsApp, o preview vai aparecer com sua foto automaticamente.

*   Se trocar a foto de perfil, mantenha o nome `foto.jpg` — o meta tag já aponta para ela.
*   Se quiser usar uma imagem diferente para o preview, edite a linha no `index.html`:
    ```html
    <meta property="og:image" content="https://rafafelbrown.github.io/foto.jpg" />
    ```

---

### 7. Internacionalização (EN 🇺🇸 / ES 🇪🇸) — Em Planejamento 🌐
Suporte a inglês e espanhol está planejado para uma versão futura. Quando for implementado, este guia será atualizado com as instruções de como traduzir e manter as versões.

---

## 🚀 Como Enviar as Alterações para o GitHub Pages

Após salvar as modificações no seu editor de código (como o VS Code), abra o terminal na pasta do projeto e execute:

```bash
# 1. Adicione todas as alterações ao Git
git add .

# 2. Faça o commit descrevendo o que você mudou
git commit -m "feat: descrição da mudança"

# 3. Envie para o GitHub
git push origin main
```

Aguarde cerca de 1 a 2 minutos e visite **https://rafafelbrown.github.io** para ver o seu portfólio atualizado! 🚀

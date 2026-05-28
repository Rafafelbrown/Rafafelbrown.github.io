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
      <span class="cert-icon">🤖</span> <!-- Escolha um emoji apropriado -->
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
    *   `status-done` para Concluído (Fundo Verde/Ciano)
    *   `status-wip` para Em Desenvolvimento (Fundo Amarelo)
    *   `status-academic` para Acadêmico (Fundo Roxo)

---

## 🚀 Como Enviar as Alterações para o GitHub Pages

Após salvar as modificações no seu editor de código (como o VS Code), abra o terminal na pasta `P:\portfolio` e execute os seguintes comandos para atualizar o seu site online em menos de 1 minuto:

```bash
# 1. Adicione todas as alterações ao Git
git add .

# 2. Faça o commit descrevendo o que você mudou
git commit -m "feat: atualiza status de estagio e novo certificado"

# 3. Envie para o GitHub
git push origin main
```

Aguarde cerca de 1 a 2 minutos e visite **https://rafafelbrown.github.io** para ver o seu portfólio atualizado! 🚀

/* ===== TYPEWRITER ===== */
let phrases = [
  "Estudante de Ciência de Dados",
  "CEUB — Brasília/DF",
  "Analista de Dados em formação",
  "Engenheiro de Dados em construção",
  "Entusiasta de Machine Learning",
];
let pi = 0, ci = 0, deleting = false;
const el = document.getElementById("typewriter");

function type() {
  const word = phrases[pi];
  if (!deleting) {
    el.textContent = word.slice(0, ci + 1);
    ci++;
    if (ci === word.length) { deleting = true; setTimeout(type, 2000); return; }
  } else {
    el.textContent = word.slice(0, ci - 1);
    ci--;
    if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
  }
  setTimeout(type, deleting ? 60 : 100);
}
document.addEventListener("DOMContentLoaded", () => { setTimeout(type, 600); });

/* ===== SCROLL ANIMATIONS ===== */
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
);
document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

/* ===== BACK TO TOP ===== */
const btt = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  btt.classList.toggle("visible", window.scrollY > 400);
});
btt.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ===== MOBILE NAV ===== */
const toggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
toggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

/* ===== ACTIVE NAV LINK ===== */
const sections = document.querySelectorAll("section[id]");
const navAs = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + 120;
  sections.forEach(s => {
    if (scrollY >= s.offsetTop && scrollY < s.offsetTop + s.offsetHeight) {
      navAs.forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === "#" + s.id);
      });
    }
  });
}, { passive: true });

/* ===== NAV SCROLL SHADOW ===== */
window.addEventListener("scroll", () => {
  document.querySelector("nav").style.boxShadow = window.scrollY > 20
    ? "0 4px 30px rgba(0,0,0,0.5)" : "none";
}, { passive: true });

/* ===== INTERNATIONALIZATION ===== */
const languageContent = {
  "pt-BR": {
    nav: ["Sobre", "Skills", "Projetos", "Formação", "Contato"],
    badge: "Estagiário na Câmara dos Deputados · Brasília, DF",
    heroDesc: "Estagiário na Câmara dos Deputados e estudante de Ciência de Dados e Machine Learning no CEUB, aplicando Python, SQL, Power BI e análise de dados em projetos acadêmicos e profissionais.",
    buttons: ["Ver meus projetos ↓", "Baixar CV ↓", "Entrar em contato"],
    typewriter: ["Estudante de Ciência de Dados", "CEUB — Brasília/DF", "Analista de Dados em formação", "Engenheiro de Dados em construção", "Entusiasta de Machine Learning"],
    sectionTags: ["Quem sou eu", "Stack técnica", "O que estou construindo", "Trajetória acadêmica", "Vamos conversar?"],
    sectionTitles: ["Sobre <span class=\"gradient-text\">Mim</span>", "Skills & <span class=\"gradient-text\">Ferramentas</span>", "Projetos & <span class=\"gradient-text\">Trabalhos</span>", "Formação & <span class=\"gradient-text\">Certificações</span>", "Entre em <span class=\"gradient-text\">Contato</span>"],
    about: ["Olá! Sou Rafael Mascarenhas Brown de Andrade, de Brasília – DF. Graduando em Ciência de Dados e Machine Learning no CEUB, com conclusão prevista para 2026.", "Atualmente sou Estagiário na Câmara dos Deputados, onde amplio minha experiência profissional e conheço os processos, sistemas e soluções corporativas do Poder Legislativo. Meu objetivo é evoluir em análise e engenharia de dados, contribuindo com soluções baseadas em evidências.", "Tenho experiência prática em Python, SQL, R e Power BI, aplicando esses conhecimentos em projetos reais: desde dashboards com +50.000 registros até modelos de Machine Learning com 87% de acurácia. Estou aprofundando meus estudos em Deep Learning e aplicações de dados com FastAPI e Streamlit.", "Sou movido pela curiosidade e pelo impacto real que dados podem gerar em decisões estratégicas. Quero construir soluções que transformem dados em resultados claros."],
    stats: ["Cursos certificados", "Acurácia em ML", "Registros analisados", "Conclusão prevista"],
    visionTitle: "🚀 Minha visão de carreira",
    vision: ["Curto prazo: Aplicar meus conhecimentos na Câmara dos Deputados, gerando valor real enquanto aprendo e me desenvolvo profissionalmente.", "Médio prazo: Especializar em Engenharia de Dados e Machine Learning, construindo pipelines robustos e modelos que gerem impacto mensurável.", "Longo prazo: Liderar projetos de IA e Data Science em grandes organizações — ou empreender com soluções tecnológicas baseadas em dados.", "Idiomas: Inglês intermediário em desenvolvimento, com contato frequente com documentação e conteúdo técnico."],
    skillTitles: ["🐍 Linguagens de Programação", "🔬 Análise & Manipulação de Dados", "📊 Visualização de Dados", "🤖 Machine Learning", "⚙️ DevOps & Deploy", "🗄️ Banco de Dados"],
    badgeTranslations: {},
    timelineDates: ["Jul/2026", "Jun/2026 – atual", "Dez/2025", "2022 – 2026 (em curso)", "2024", "2024", "2024", "2019 – 2022", "2018"],
    timelineSubs: ["CEUB · 900 horas", "Câmara dos Deputados · Brasília, DF", "CEUB · 300 horas", "Centro Universitário de Brasília — UniCEUB · Brasília, DF", "CEUB · Certificação intermediária de 750 horas", "Alura — 6 cursos concluídos · Python, Pandas, NumPy", "ENAP — Escola Nacional de Administração Pública", "CEUB · Brasília, DF", "Centro Educacional Leonardo da Vinci · Brasília, DF"],
    certTitles: ["Data Science Analysis — 900h", "Estágio Universitário — Ambientação", "Data Science Development — 300h", "Classificação com Machine Learning", "Power BI Desktop: Primeiro Dashboard", "Excel Intermediário", "Data Science Basics — 750h", "Data Science: Análise e Visualização", "Pandas: Conhecendo a Biblioteca", "NumPy: Análise Numérica Eficiente", "Python para Data Science: Primeiros Passos"],
    certOrgs: ["CEUB · jul/2026 ⭐ Mais recente", "Câmara dos Deputados · jul/2026 · 11h", "CEUB · dez/2025", "Alura · out/2025", "Alura · jul/2025", "ENAP · mar/2025", "UniCEUB · abr/2024", "Alura · jun/2024", "Alura · mai/2024", "Alura · mar/2024", "Alura · fev/2024 · +4 cursos na série"],
    projectStatuses: ["Concluído", "Em Desenvolvimento", "Acadêmico", "Concluído", "Concluído", "Acadêmico", "A Concluir"],
    projectLinks: ["Ver no perfil →", "Acompanhar no perfil →", "Ver no perfil →", "Ver no GitHub →", "Ver no GitHub →", "Ver no GitHub →", "Ver no GitHub →"],
    projectTitles: ["Análise do Setor Energético — Dashboard com +50k Registros", "App Interativo de Exploração de Dados com Streamlit", "Classificação & Regressão com ML — 87% de Acurácia", "TCG Proxy Card Printer (Magic: The Gathering)", "D&D 5e Character Sheet API", "Ciência de Dados & Machine Learning", "Motoar"],
    projectDescriptions: ["Dashboards e relatórios com Python e Power BI sobre datasets com +50.000 registros do setor energético. Apliquei automação de coleta e limpeza de dados com Pandas, criando visualizações que transformam dados brutos em insights estratégicos.", "Aplicações web interativas para exploração de dados com visualizações em tempo real. Usando Streamlit, construo interfaces onde o usuário filtra, explora e interpreta dados sem precisar de código — democratizando o acesso à análise de dados.", "Modelos de classificação e regressão com Scikit-learn e TensorFlow, alcançando 87% de acurácia no conjunto de teste. O pipeline inclui pré-processamento, feature engineering, treinamento, validação cruzada e interpretação de métricas.", "Ferramenta automatizada em Python que gera folhas PDF prontas para impressão com proxies de Magic: The Gathering. Um projeto open-source feito pela comunidade e para a comunidade.", "API REST construída com FastAPI para geração automatizada de fichas de personagem de D&D 5e. A API recebe dados em JSON e preenche o PDF oficial automaticamente.", "Repositório central de estudos com algoritmos de machine learning, notebooks de análise exploratória e scripts estatísticos que demonstram minha evolução acadêmica prática no CEUB.", "Sistema de monitoramento da qualidade do ar com arquitetura medalhão e sugestões para motociclistas considerando condições ambientais e meteorológicas."],
    education: ["Certificação intermediária em Data Science Analysis", "Estagiário", "Certificação intermediária em Data Science Development", "Bacharelado em Ciência de Dados e Machine Learning", "Data Science Basics", "Imersão em Python para Data Science", "Introdução ao Excel", "Bacharelado em Direito (incompleto)", "Ensino Médio Concluído"],
    contactTag: "Vamos conversar?",
    contactDesc: "Aberto a projetos colaborativos, networking e trocas de conhecimento. Se você chegou até aqui, já temos algo em comum: o interesse por dados!",
    contactLabels: ["LinkedIn", "GitHub", "E-mail", "WhatsApp"],
    footer: "Desenvolvido com 💻 e ☕ por Rafael Brown · Ciência de Dados · CEUB · Brasília, DF"
  },
  en: {
    nav: ["About", "Skills", "Projects", "Education", "Contact"],
    badge: "Intern at the Brazilian Chamber of Deputies · Brasília, Brazil",
    heroDesc: "An intern at the Brazilian Chamber of Deputies and a Data Science and Machine Learning student at CEUB, applying Python, SQL, Power BI and data analysis to academic and professional projects.",
    buttons: ["View my projects ↓", "Download CV ↓", "Get in touch"],
    typewriter: ["Data Science student", "CEUB — Brasília, Brazil", "Data Analyst in training", "Data Engineer in progress", "Machine Learning enthusiast"],
    sectionTags: ["About me", "Technical stack", "What I am building", "Academic path", "Let's talk"],
    sectionTitles: ["About <span class=\"gradient-text\">Me</span>", "Skills & <span class=\"gradient-text\">Tools</span>", "Projects & <span class=\"gradient-text\">Work</span>", "Education & <span class=\"gradient-text\">Certificates</span>", "Get in <span class=\"gradient-text\">Touch</span>"],
    about: ["Hello! I am Rafael Mascarenhas Brown de Andrade, from Brasília, Brazil. I am studying Data Science and Machine Learning at CEUB, expected to graduate in 2026.", "I am currently an intern at the Brazilian Chamber of Deputies, expanding my professional experience while learning about the processes, systems and corporate solutions of the legislative branch. My goal is to grow in data analysis and engineering, contributing evidence-based solutions.", "I have hands-on experience with Python, SQL, R and Power BI, applying them to real projects: from dashboards with more than 50,000 records to Machine Learning models reaching 87% accuracy. I am deepening my studies in Deep Learning and data applications with FastAPI and Streamlit.", "I am driven by curiosity and by the real impact data can have on strategic decisions. I want to build solutions that turn data into clear results."],
    stats: ["Certified courses", "ML accuracy", "Records analyzed", "Expected graduation"],
    visionTitle: "🚀 Career vision",
    vision: ["Short term: Apply my knowledge at the Brazilian Chamber of Deputies while learning, growing and creating real value.", "Medium term: Specialize in Data Engineering and Machine Learning, building robust pipelines and models with measurable impact.", "Long term: Lead AI and Data Science projects in large organizations, or build data-driven technology solutions as an entrepreneur.", "Languages: Intermediate English in development, with regular contact with technical documentation and content."],
    skillTitles: ["🐍 Programming Languages", "🔬 Data Analysis & Manipulation", "📊 Data Visualization", "🤖 Machine Learning", "⚙️ DevOps & Deployment", "🗄️ Databases"],
    badgeTranslations: {"Excel Avançado": "Advanced Excel", "Mineração de Dados": "Data Mining", "Modelagem Preditiva": "Predictive Modeling", "Redes Neurais": "Neural Networks", "Regressão & Classificação": "Regression & Classification", "Automação": "Automation", "Pyteste": "Pytest"},
    timelineDates: ["Jul/2026", "Jun/2026 – current", "Dec/2025", "2022 – 2026 (in progress)", "2024", "2024", "2024", "2019 – 2022", "2018"],
    timelineSubs: ["CEUB · 900 hours", "Brazilian Chamber of Deputies · Brasília, Brazil", "CEUB · 300 hours", "University Center of Brasília — UniCEUB · Brasília, Brazil", "CEUB · 750-hour intermediate certification", "Alura — 6 completed courses · Python, Pandas, NumPy", "ENAP — National School of Public Administration", "CEUB · Brasília, Brazil", "Leonardo da Vinci Educational Center · Brasília, Brazil"],
    certTitles: ["Data Science Analysis — 900h", "University Internship — Orientation", "Data Science Development — 300h", "Machine Learning Classification", "Power BI Desktop: My First Dashboard", "Intermediate Excel", "Data Science Basics — 750h", "Data Science: Analysis and Visualization", "Pandas: Getting to Know the Library", "NumPy: Efficient Numerical Analysis", "Python for Data Science: First Steps"],
    certOrgs: ["CEUB · Jul/2026 ⭐ Newest", "Brazilian Chamber of Deputies · Jul/2026 · 11h", "CEUB · Dec/2025", "Alura · Oct/2025", "Alura · Jul/2025", "ENAP · Mar/2025", "UniCEUB · Apr/2024", "Alura · Jun/2024", "Alura · May/2024", "Alura · Mar/2024", "Alura · Feb/2024 · +4 courses in the series"],
    projectStatuses: ["Completed", "In progress", "Academic", "Completed", "Completed", "Academic", "To complete"],
    projectLinks: ["View profile →", "Follow on profile →", "View profile →", "View on GitHub →", "View on GitHub →", "View on GitHub →", "View on GitHub →"],
    projectTitles: ["Energy Sector Analysis — Dashboard with 50k+ Records", "Interactive Data Exploration App with Streamlit", "ML Classification & Regression — 87% Accuracy", "TCG Proxy Card Printer (Magic: The Gathering)", "D&D 5e Character Sheet API", "Data Science & Machine Learning", "Motoar"],
    projectDescriptions: ["Dashboards and reports built with Python and Power BI using energy-sector datasets with more than 50,000 records. I automated data collection and cleaning with Pandas, turning raw data into strategic insights.", "Interactive web applications for data exploration with real-time visualizations. Using Streamlit, I build interfaces where users can filter, explore and interpret data without coding, making analysis more accessible.", "Classification and regression models with Scikit-learn and TensorFlow, reaching 87% accuracy on the test set. The pipeline includes preprocessing, feature engineering, training, cross-validation and metric interpretation.", "An automated Python tool that generates print-ready PDF sheets with Magic: The Gathering proxies. An open-source project made by the community for the community.", "A FastAPI REST API for automated D&D 5e character sheet generation. It receives JSON data and fills the official PDF automatically.", "A central study repository with machine learning algorithms, exploratory analysis notebooks and statistical scripts showing my practical academic growth at CEUB.", "An air-quality monitoring system with a medallion architecture and recommendations for motorcyclists based on environmental and weather conditions."],
    education: ["Intermediate certification in Data Science Analysis", "Intern", "Intermediate certification in Data Science Development", "BSc in Data Science and Machine Learning", "Data Science Basics", "Python for Data Science track", "Introduction to Excel", "Incomplete Law degree", "High school completed"],
    contactTag: "Let's talk",
    contactDesc: "Open to collaborative projects, networking and knowledge exchange. If you made it this far, we already have something in common: an interest in data.",
    contactLabels: ["LinkedIn", "GitHub", "Email", "WhatsApp"],
    footer: "Built with 💻 and ☕ by Rafael Brown · Data Science · CEUB · Brasília, Brazil"
  },
  es: {
    nav: ["Sobre mí", "Habilidades", "Proyectos", "Formación", "Contacto"],
    badge: "Pasante en la Cámara de Diputados · Brasilia, Brasil",
    heroDesc: "Pasante en la Cámara de Diputados y estudiante de Ciencia de Datos y Machine Learning en CEUB, aplicando Python, SQL, Power BI y análisis de datos en proyectos académicos y profesionales.",
    buttons: ["Ver mis proyectos ↓", "Descargar CV ↓", "Contactarme"],
    typewriter: ["Estudiante de Ciencia de Datos", "CEUB — Brasilia, Brasil", "Analista de Datos en formación", "Ingeniero de Datos en construcción", "Entusiasta de Machine Learning"],
    sectionTags: ["Sobre mí", "Stack técnico", "Lo que estoy construyendo", "Trayectoria académica", "Hablemos"],
    sectionTitles: ["Sobre <span class=\"gradient-text\">Mí</span>", "Habilidades & <span class=\"gradient-text\">Herramientas</span>", "Proyectos & <span class=\"gradient-text\">Trabajos</span>", "Formación & <span class=\"gradient-text\">Certificaciones</span>", "Ponte en <span class=\"gradient-text\">Contacto</span>"],
    about: ["¡Hola! Soy Rafael Mascarenhas Brown de Andrade, de Brasilia, Brasil. Estudio Ciencia de Datos y Machine Learning en CEUB y espero graduarme en 2026.", "Actualmente soy pasante en la Cámara de Diputados, donde amplío mi experiencia profesional y conozco los procesos, sistemas y soluciones corporativas del Poder Legislativo. Mi objetivo es crecer en análisis e ingeniería de datos, aportando soluciones basadas en evidencia.", "Tengo experiencia práctica con Python, SQL, R y Power BI, aplicándolos en proyectos reales: desde dashboards con más de 50.000 registros hasta modelos de Machine Learning con 87% de precisión. Estoy profundizando mis estudios en Deep Learning y aplicaciones de datos con FastAPI y Streamlit.", "Me mueve la curiosidad y el impacto real que los datos pueden generar en decisiones estratégicas. Quiero crear soluciones que conviertan datos en resultados claros."],
    stats: ["Cursos certificados", "Precisión en ML", "Registros analizados", "Graduación prevista"],
    visionTitle: "🚀 Visión profesional",
    vision: ["Corto plazo: Aplicar mis conocimientos en la Cámara de Diputados mientras aprendo, crezco y genero valor real.", "Mediano plazo: Especializarme en Ingeniería de Datos y Machine Learning, construyendo pipelines robustos y modelos con impacto medible.", "Largo plazo: Liderar proyectos de IA y Data Science en grandes organizaciones o crear soluciones tecnológicas basadas en datos.", "Idiomas: Inglés intermedio en desarrollo, con contacto frecuente con documentación y contenido técnico."],
    skillTitles: ["🐍 Lenguajes de Programación", "🔬 Análisis y Manipulación de Datos", "📊 Visualización de Datos", "🤖 Machine Learning", "⚙️ DevOps y Deploy", "🗄️ Bases de Datos"],
    badgeTranslations: {"Excel Avançado": "Excel Avanzado", "Mineração de Dados": "Minería de Datos", "Modelagem Preditiva": "Modelado Predictivo", "Redes Neurais": "Redes Neuronales", "Regressão & Classificação": "Regresión y Clasificación", "Automação": "Automatización", "Pyteste": "Pytest"},
    timelineDates: ["Jul/2026", "Jun/2026 – actual", "Dic/2025", "2022 – 2026 (en curso)", "2024", "2024", "2024", "2019 – 2022", "2018"],
    timelineSubs: ["CEUB · 900 horas", "Cámara de Diputados · Brasilia, Brasil", "CEUB · 300 horas", "Centro Universitario de Brasilia — UniCEUB · Brasilia, Brasil", "CEUB · Certificación intermedia de 750 horas", "Alura — 6 cursos completados · Python, Pandas, NumPy", "ENAP — Escuela Nacional de Administración Pública", "CEUB · Brasilia, Brasil", "Centro Educativo Leonardo da Vinci · Brasilia, Brasil"],
    certTitles: ["Data Science Analysis — 900h", "Pasantía Universitaria — Ambientación", "Data Science Development — 300h", "Clasificación con Machine Learning", "Power BI Desktop: Mi Primer Dashboard", "Excel Intermedio", "Data Science Basics — 750h", "Data Science: Análisis y Visualización", "Pandas: Conociendo la Biblioteca", "NumPy: Análisis Numérico Eficiente", "Python para Data Science: Primeros Pasos"],
    certOrgs: ["CEUB · Jul/2026 ⭐ Más reciente", "Cámara de Diputados · Jul/2026 · 11h", "CEUB · Dic/2025", "Alura · Oct/2025", "Alura · Jul/2025", "ENAP · Mar/2025", "UniCEUB · Abr/2024", "Alura · Jun/2024", "Alura · May/2024", "Alura · Mar/2024", "Alura · Feb/2024 · +4 cursos en la serie"],
    projectStatuses: ["Concluido", "En desarrollo", "Académico", "Concluido", "Concluido", "Académico", "Por concluir"],
    projectLinks: ["Ver perfil →", "Seguir en el perfil →", "Ver perfil →", "Ver en GitHub →", "Ver en GitHub →", "Ver en GitHub →", "Ver en GitHub →"],
    projectTitles: ["Análisis del Sector Energético — Dashboard con +50k Registros", "App Interactiva de Exploración de Datos con Streamlit", "Clasificación y Regresión con ML — 87% de Precisión", "TCG Proxy Card Printer (Magic: The Gathering)", "D&D 5e Character Sheet API", "Ciencia de Datos y Machine Learning", "Motoar"],
    projectDescriptions: ["Dashboards e informes con Python y Power BI sobre datasets del sector energético con más de 50.000 registros. Automaticé la recolección y limpieza con Pandas, convirtiendo datos brutos en insights estratégicos.", "Aplicaciones web interactivas para explorar datos con visualizaciones en tiempo real. Con Streamlit, creo interfaces donde el usuario filtra, explora e interpreta datos sin programar, haciendo el análisis más accesible.", "Modelos de clasificación y regresión con Scikit-learn y TensorFlow, alcanzando 87% de precisión en el conjunto de prueba. El pipeline incluye preprocesamiento, feature engineering, entrenamiento, validación cruzada e interpretación de métricas.", "Herramienta automatizada en Python que genera hojas PDF listas para imprimir con proxies de Magic: The Gathering. Un proyecto open-source hecho por la comunidad y para la comunidad.", "API REST construida con FastAPI para generar automáticamente fichas de personaje de D&D 5e. Recibe datos JSON y completa el PDF oficial automáticamente.", "Repositorio central de estudios con algoritmos de machine learning, notebooks de análisis exploratorio y scripts estadísticos que muestran mi evolución académica práctica en CEUB.", "Sistema de monitoreo de la calidad del aire con arquitectura medallón y sugerencias para motociclistas según condiciones ambientales y meteorológicas."],
    education: ["Certificación intermedia en Data Science Analysis", "Pasante", "Certificación intermedia en Data Science Development", "Licenciatura en Ciencia de Datos y Machine Learning", "Data Science Basics", "Trayectoria de Python para Data Science", "Introducción a Excel", "Licenciatura en Derecho incompleta", "Educación secundaria concluida"],
    contactTag: "Hablemos",
    contactDesc: "Estoy abierto a proyectos colaborativos, networking e intercambio de conocimientos. Si llegaste hasta aquí, ya tenemos algo en común: el interés por los datos.",
    contactLabels: ["LinkedIn", "GitHub", "Correo", "WhatsApp"],
    footer: "Desarrollado con 💻 y ☕ por Rafael Brown · Ciencia de Datos · CEUB · Brasilia, Brasil"
  }
};

function setLanguageList(selector, values, property = "textContent") {
  document.querySelectorAll(selector).forEach((element, index) => {
    if (values[index] !== undefined) element[property] = values[index];
  });
}

function applyLanguage(language) {
  const content = languageContent[language] || languageContent["pt-BR"];
  document.documentElement.lang = language;
  phrases = content.typewriter;
  pi = 0;
  ci = 0;
  deleting = false;
  setLanguageList(".nav-links a", content.nav);
  document.querySelector(".hero-badge").innerHTML = `<span></span> ${content.badge}`;
  document.querySelector(".hero-desc").textContent = content.heroDesc;
  setLanguageList(".hero-btns a", content.buttons);
  setLanguageList("#about .section-tag, #skills .section-tag, #projects .section-tag, #education .section-tag, #contact .section-tag", content.sectionTags);
  setLanguageList("#about .section-title, #skills .section-title, #projects .section-title, #education .section-title, #contact .section-title", content.sectionTitles, "innerHTML");
  setLanguageList(".about-text > p", content.about);
  setLanguageList(".stat-card .label", content.stats);
  document.querySelector("#projects-label").textContent = content.sectionTags[2];
  document.querySelector("#projects-title").innerHTML = content.sectionTitles[2];
  document.querySelector(".about-vision h3").textContent = content.visionTitle;
  setLanguageList(".vision-item p", content.vision);
  setLanguageList(".skill-cat-title", content.skillTitles);
  setLanguageList(".timeline-date", content.timelineDates);
  setLanguageList(".timeline-sub", content.timelineSubs);
  setLanguageList(".cert-title", content.certTitles);
  setLanguageList(".cert-org", content.certOrgs);
  document.querySelectorAll(".badge, .project-tag").forEach(element => {
    const sourceText = element.dataset.translationKey;
    element.textContent = content.badgeTranslations[sourceText] || sourceText;
  });
  setLanguageList(".project-status", content.projectStatuses);
  setLanguageList(".project-card h3", content.projectTitles);
  setLanguageList(".project-card p", content.projectDescriptions);
  setLanguageList(".project-link", content.projectLinks);
  setLanguageList(".timeline-title", content.education);
  document.querySelector(".contact-desc").textContent = content.contactDesc;
  setLanguageList(".contact-card .c-label", content.contactLabels);
  document.querySelector("footer p").textContent = content.footer;
  document.querySelectorAll(".language-btn").forEach(button => {
    button.classList.toggle("active", button.dataset.language === language);
  });
  localStorage.setItem("portfolio-language", language);
}

document.querySelectorAll(".language-btn").forEach(button => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language));
});

document.querySelectorAll(".badge, .project-tag").forEach(element => {
  element.dataset.translationKey = element.textContent;
});

applyLanguage(localStorage.getItem("portfolio-language") || "pt-BR");

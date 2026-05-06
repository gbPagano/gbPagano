// Portfolio data for @gbpagano - bilingual content
window.portfolioData = {
  name: "Guilherme B. Pagano",
  handle: "@gbpagano",
  location: { pt: "Uberlândia, Brasil", en: "Uberlândia, Brazil" },
  email: "guilhermebpagano@gmail.com",
  phone: "+55 31 99400-1739",

  tagline: {
    pt: "Engenheiro de Dados & Software",
    en: "Data & Software Engineer",
  },
  blurb: {
    pt: "Construo sistemas de dados de alta performance - de Rust + WebAssembly no navegador a pipelines industriais em Kubernetes. Gosto de baixar ao metal e de coisas bem feitas.",
    en: "I build high-performance data systems - from Rust + WebAssembly in the browser to industrial pipelines on Kubernetes. I like going close to the metal and crafting things properly.",
  },

  socials: [
    { id: "github",   label: "GitHub",    handle: "gbPagano",        url: "https://github.com/gbPagano",           icon: "github" },
    { id: "linkedin", label: "LinkedIn",  handle: "gbpagano",        url: "https://linkedin.com/in/gbpagano",      icon: "linkedin" },
    { id: "linktree", label: "Linktree",  handle: "gbpagano",        url: "https://linktr.ee/gbpagano",            icon: "link" },
    { id: "instagram",label: "Instagram", handle: "@gbpagano",       url: "https://instagram.com/gbpagano",        icon: "instagram" },
    { id: "email",    label: "Email",     handle: "guilhermebpagano@gmail.com", url: "mailto:guilhermebpagano@gmail.com", icon: "mail" },
  ],

  skills: {
    languages: ["Python", "Rust", "C", "SQL", "Bash"],
    tech: ["Kubernetes", "ArgoCD", "Docker", "Kafka", "AWS", "Airflow", "TimescaleDB", "FastAPI", "WebAssembly", "Pytest", "Linux", "Git"],
    focus: {
      pt: ["Engenharia de Dados", "Sistemas de Controle Industrial", "Machine Learning", "Performance"],
      en: ["Data Engineering", "Industrial Control Systems", "Machine Learning", "Performance"],
    },
  },

  experience: [
    {
      role: { pt: "Engenheiro de Dados | Software", en: "Data Engineer | Software" },
      company: "IHM Stefanini",
      location: { pt: "Uberlândia (Remoto)", en: "Uberlândia (Remote)" },
      period: { pt: "Set 2024 - Presente", en: "Sep 2024 - Present" },
      current: true,
      bullets: {
        pt: [
          "Responsável por solução client-side de alta performance para a Gerdau - desenvolvi a funcionalidade de Modelagem e Sintonia PID no produto Loop, usando Rust + WebAssembly para otimizar malhas de controle industriais direto no navegador.",
          "Refatorei a arquitetura de retreino de modelos de predição para a Vale com autoscaling event-driven em Kubernetes, desacoplando carga e garantindo integridade das execuções.",
          "Atuei na sustentação e automação de produção com Kubernetes + ArgoCD, aplicando GitOps para alta disponibilidade.",
          "Desenvolvi POC de Visão Computacional para identificação de EPIs em tempo real.",
        ],
        en: [
          "Led a high-performance client-side solution for Gerdau - designed and developed the PID Modeling and Tuning functionality in the \"Loop\" product, using Rust + WebAssembly to optimize industrial control loops directly in the browser.",
          "Refactored the prediction-model retraining architecture for Vale with event-driven autoscaling in Kubernetes, decoupling load and guaranteeing execution integrity.",
          "Operated and automated production environments on Kubernetes + ArgoCD, applying GitOps for high availability.",
          "Built a Computer Vision POC for real-time PPE detection.",
        ],
      },
      stack: ["Rust", "WebAssembly", "Kubernetes", "ArgoCD", "Python", "Computer Vision"],
    },
    {
      role: { pt: "Estagiário em Engenharia de Dados", en: "Data Engineering Intern" },
      company: "IHM Stefanini",
      location: { pt: "Uberlândia (Remoto)", en: "Uberlândia (Remote)" },
      period: { pt: "Jun 2022 - Set 2024", en: "Jun 2022 - Sep 2024" },
      bullets: {
        pt: [
          "Refatorei, otimizei e implementei testes unitários em APIs e ETLs do datalake com Python, Docker, AWS e Kafka.",
          "Atuei na manutenção de pipelines industriais na Vale com protocolos OPC UA, PIMS, Kafka e bancos SQL/NoSQL.",
          "Automatizei cálculo de balanço de massa para a Ternium em Python.",
          "Desenvolvi sincronia em tempo real entre sistemas PIMS e LIMS para o Boticário com Python, Kafka e AWS SQS.",
          "Criei e padronizei documentação e processos de teste para a equipe.",
        ],
        en: [
          "Refactored, optimized and added unit tests to APIs and datalake ETLs with Python, Docker, AWS and Kafka.",
          "Maintained industrial data pipelines for Vale using OPC UA, PIMS, Kafka and SQL/NoSQL databases.",
          "Automated mass-balance calculation for Ternium in Python.",
          "Developed real-time sync between PIMS and LIMS systems for Boticário with Python, Kafka and AWS SQS.",
          "Standardized documentation and testing processes for the dev team.",
        ],
      },
      stack: ["Python", "Kafka", "AWS", "Docker", "OPC UA", "PIMS", "SQL"],
    },
  ],

  education: [
    {
      school: { pt: "Universidade Federal de Uberlândia", en: "Federal University of Uberlândia" },
      degree: { pt: "Bacharelado em Engenharia Elétrica", en: "B.Sc. Electrical Engineering" },
      period: { pt: "Nov 2021 - Nov 2026", en: "Nov 2021 - Nov 2026" },
      topics: {
        pt: "Matemática Aplicada · Algoritmos · Machine Learning · Controle Realimentado · Programação Competitiva · Engenharia de Software",
        en: "Applied Math · Algorithms · Machine Learning · Feedback Control · Competitive Programming · Software Engineering",
      },
    },
  ],

  projects: [
    {
      id: "lunakb",
      path: "lunakbd",
      name: { pt: "Ergonomic Split Mechanical Keyboard", en: "Ergonomic Split Mechanical Keyboard" },
      kind: "hardware",
      year: "2025",
      link: "https://github.com/gbPagano/lunakbd",
      blurb: {
        pt: "Teclado split projetado do zero - PCB em KiCad, case modelado em FreeCAD e impresso, firmware open-source RMK em Rust.",
        en: "Split keyboard designed from scratch - KiCad PCB, FreeCAD-modeled 3D-printed case, open-source RMK firmware in Rust.",
      },
      tags: ["KiCad", "FreeCAD", "RMK", "Rust"],
      featured: true,
      lang: "Rust",
      color: "pink",
    },
    {
      id: "courier",
      name: { pt: "Courier", en: "Courier" },
      kind: "oss",
      year: "2026",
      link: "https://gbpagano.github.io/courier/",
      blurb: {
        pt: "Framework assíncrono em Rust para pipelines de dados componíveis. Declara fontes, transforms e sinks em TOML/JSON, conectados em runtime por canais com backpressure.",
        en: "Async Rust framework for composable data pipelines. Defines sources, transforms and sinks in TOML/JSON, wired at runtime through bounded channels with backpressure.",
      },
      tags: ["Rust", "Data Pipelines", "TOML", "Kafka"],
      featured: true,
      lang: "Rust",
      color: "peach",
    },
    {
      id: "nn-scratch",
      name: { pt: "Neural Networks from Scratch", en: "Neural Networks from Scratch" },
      kind: "oss",
      year: "2024",
      link: "https://github.com/gbPagano/nn_from_scratch",
      blurb: {
        pt: "Biblioteca de redes neurais em Python e Rust - backpropagation, batch training, camadas Lineares/Convolucionais e funções de ativação do zero. Validada com MNIST.",
        en: "Neural network library in Python and Rust - backpropagation, batch training, Linear/Conv layers and activation functions from scratch. Validated on MNIST.",
      },
      tags: ["Rust", "Python", "ML", "MNIST"],
      featured: true,
      lang: "Rust",
      color: "mauve",
    },
    {
      id: "chess-bitboard",
      path: "chess-bitboard",
      name: { pt: "Chess Move Generator", en: "Chess Move Generator" },
      kind: "research",
      year: "2025-2026",
      articleLabel: { pt: "artigo", en: "article" },
      articleHref: "assets/article-chess-bitboard.pdf",
      blurb: {
        pt: "Iniciação científica em xadrez computacional. Gerador de movimentos baseado em bitboards, otimizado para máxima eficiência.",
        en: "Undergraduate research in computer chess. Bitboard-based move generator, optimized for maximum efficiency.",
      },
      tags: ["Rust", "Bitboards", "Chess"],
      lang: "Rust",
      color: "yellow",
    },
    {
      id: "loop-pid",
      name: { pt: "Loop - Modelagem PID (Gerdau)", en: "Loop - PID Tuning (Gerdau)" },
      kind: "work",
      year: "2025",
      blurb: {
        pt: "Modelagem e sintonia de controladores PID executando client-side via Rust + WASM. Otimiza malhas industriais sem round-trip ao servidor.",
        en: "PID controller modeling & tuning executing client-side via Rust + WASM. Optimizes industrial loops with zero server round-trips.",
      },
      tags: ["Rust", "WebAssembly", "Control Systems"],
      featured: true,
      lang: "Rust",
      color: "peach",
    },
    {
      id: "cellular-automata",
      path: "cell-automata",
      name: { pt: "3D Cellular Automata", en: "3D Cellular Automata" },
      kind: "oss",
      year: "2024",
      link: "https://gbpagano.github.io/cellular-automata/",
      blurb: {
        pt: "Simulador 3D de autômatos celulares em Rust com Bevy. Suporta regras multiestado, vizinhanças Moore/Von Neumann e métodos de cor para visualizar evolução no espaço.",
        en: "3D cellular automata simulator in Rust with Bevy. Supports multi-state rules, Moore/Von Neumann neighborhoods and color methods for visualizing spatial evolution.",
      },
      tags: ["Rust", "Bevy", "Simulation", "Cellular Automata"],
      lang: "Rust",
      color: "blue",
    },
    {
      id: "mabi",
      name: { pt: "MABI - Braço Robótico (1º lugar)", en: "MABI - Robotic Arm (1st place)" },
      kind: "competition",
      year: "2024",
      link: "https://github.com/gbPagano/mabi",
      blurb: {
        pt: "1º lugar na Maratona de Biorrobótica. Sistema de controle para braço robótico com acelerômetro e giroscópio para movimentação da garra.",
        en: "1st place at the Biorobotics Marathon. Control system for a robotic arm using accelerometer + gyroscope for claw movement.",
      },
      tags: ["Rust", "Embedded", "Robotics"],
      medal: "🥇",
      lang: "Rust",
      color: "green",
    },
    {
      id: "biofy",
      name: { pt: "Hackathon Biofy (3º lugar)", en: "Biofy Hackathon (3rd place)" },
      kind: "competition",
      year: "2024",
      link: "https://github.com/gbPagano/hackathon-biofy",
      blurb: {
        pt: "3º lugar. Solução de IA que classifica e identifica patógenos a partir de imagens de amostras.",
        en: "3rd place. AI solution that classifies and identifies pathogens from sample images.",
      },
      tags: ["Python", "Computer Vision", "ML"],
      medal: "🥉",
      lang: "Python",
      color: "teal",
    },
  ],

  activities: [
    {
      title: { pt: "Monitor de Programação Procedimental (C)", en: "Teaching Assistant - Procedural Programming (C)" },
      period: { pt: "Jun 2024 - Nov 2024", en: "Jun 2024 - Nov 2024" },
      note: { pt: "Bolsista. Orientei estudantes em ponteiros, alocação de memória e projetos em C.", en: "Scholarship TA. Guided students through pointers, memory allocation and C projects." },
    },
    {
      title: { pt: "Monitor de Programação Script (Python)", en: "Teaching Assistant - Script Programming (Python)" },
      period: { pt: "Mai 2022 - Jun 2022", en: "May 2022 - Jun 2022" },
      note: { pt: "Voluntário. Suporte a ingressantes em Python e lógica computacional.", en: "Volunteer. Helped new students with Python fundamentals and computational logic." },
    },
  ],

  // Synthetic-but-plausible contribution grid (52 weeks x 7 days) - intensity 0–4
  // Stored as flat day list ({date,count,level}) so it matches the live API shape.
  contributions: (() => {
    const days = [];
    let seed = 42;
    const rnd = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    // start ~52 weeks ago, snapped back to a Sunday
    const start = new Date(today);
    start.setDate(start.getDate() - 52 * 7);
    start.setDate(start.getDate() - start.getDay()); // back to Sunday
    const totalDays = Math.floor((today - start) / 86400000) + 1;
    for (let i = 0; i < totalDays; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const w = Math.floor(i / 7);
      const dow = d.getDay();
      const base = 0.25 + (w / 52) * 0.4;
      const r = rnd();
      const isWeekend = (dow === 0 || dow === 6);
      const penalty = isWeekend ? 0.45 : 1;
      const v = r * penalty + base * 0.3;
      let level = 0;
      if (v > 0.20) level = 1;
      if (v > 0.38) level = 2;
      if (v > 0.55) level = 3;
      if (v > 0.72) level = 4;
      const count = level === 0 ? 0 : level * 2 + Math.floor(r * 4);
      days.push({ date: d.toISOString().slice(0, 10), count, level });
    }
    return days;
  })(),

  stats: {
    repos: 42,
    stars: 87,
    commits_year: 1284,
    years_exp: 4,
  },
};

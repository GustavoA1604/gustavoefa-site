/* Resume data + rendering, shared by /resume (EN default) and /curriculo (PT default).
   The page each set window.RESUME_DEFAULT_LANG before loading this script. */

const RESUME = {
  name: "Gustavo Emanuel Faria Araujo",
  linkedin: "https://www.linkedin.com/in/gustavoefa/",
  email: "gefa.software@gmail.com",
  phone: "+55 (31) 99349-4917",

  pt: {
    htmlLang: "pt-BR",
    docTitle: "Gustavo Araujo - Currículo",
    role: "Inferência de IA · Sistemas em C++ · Liderança Técnica",
    location: "Belo Horizonte, Brasil",
    back: "← Voltar ao início",
    summaryTitle: "Resumo",
    summary:
      "Oi! Sou o Gustavo, engenheiro de software com mais de 9 anos de experiência em deploy de IA, sistemas em C/C++ e liderança técnica. Hoje trabalho com a produtização de modelos de IA quantizados (ASR, TTS, OCR e tradução) rodando localmente em cinco plataformas diferentes (Windows, Linux, macOS, Android, iOS) com aceleração por GPU. Anteriormente, trabalhei por cerca de 5 anos construindo e re-arquitetando o software de verificação (C/C++) do protocolo PCIe na Cadence Design Systems. Já liderei equipes de até 20 pessoas, introduzindo a metodologia de gerenciamento SCRUM (NPS +70%, projetos atrasados -42%), e possuo três patentes concedidas nos EUA em aprendizado de máquina para verificação de hardware. Sou especialista em IA/ML e graduado em Engenharia Elétrica com foco em Ciências da Computação.",
    experienceTitle: "Experiência profissional",
    educationTitle: "Formação acadêmica",
    highlightsTitle: "Destaques selecionados",
    skillsTitle: "Competências",
    languagesTitle: "Idiomas",
    awardsTitle: "Prêmios",

    experience: [
      {
        org: "Tether.io",
        orgHref: "https://tether.to/",
        place: "Remoto",
        date: "Fev/2025 – atual",
        sub: "QVAC: ecossistema open-source de inferência de IA local (C++, JS).",
        links: [{ text: "qvac.tether.io", href: "https://qvac.tether.io/" }],
        positions: [
          {
            title: "Lead Software Engineer",
            date: "Set/2025 – atual",
            mode: "Remoto",
            bullets: [
              "Lidero uma equipe de até 6 engenheiros de inferência e desenvolvedores JS, com responsabilidade ponta a ponta sobre o stack de fala (ASR + TTS) no QVAC.",
              "Coloquei ASR em produção nas cinco plataformas (Windows, Linux, macOS, Android, iOS) com aceleração por GPU (Vulkan, Metal, OpenCL em Adreno): Whisper e uma variante de interface cérebro-computador no backend GGML, e Parakeet em ONNX Runtime e GGML, rodando muito abaixo do tempo real (RTF tão baixo quanto ~0,002 em Vulkan).",
              "Coloquei TTS em tempo real nas mesmas plataformas: Piper (ONNX), Supertonic e Chatterbox (ONNX e GGML), com Chatterbox atingindo RTF ≈ 0,16 em Metal e 0,09 em Vulkan, totalmente no dispositivo.",
              "Entreguei builds GGUF quantizados que praticamente reduzem o tamanho do modelo pela metade com perda de qualidade desprezível (Parakeet CTC 0.6B: 1,3 GiB fp16 → 697 MiB q8_0, saída idêntica bit a bit), viabilizando deploy em dispositivos com pouca memória.",
            ],
          },
          {
            title: "C++ Developer",
            date: "Fev/2025 – Set/2025",
            mode: "Remoto",
            bullets: [
              "Como contribuidor individual, portei o EasyOCR (OCR) e o modelo de tradução Marian (NMT) para as cinco plataformas, em ONNX Runtime e GGML.",
              "Subi LLMs (Llama, Qwen) nos backends ONNX, mlc-llm e Apache TVM.",
              "Implantei modelos em Windows, Linux, macOS, Android e iOS.",
            ],
          },
        ],
      },
      {
        org: "Cadence Design Systems",
        orgHref: "https://www.cadence.com/en_US/home.html",
        place: "Belo Horizonte, Brasil",
        date: "Abr/2020 – Fev/2025",
        sub: "Desenvolvimento (C/C++) para verificação de hardware (SystemVerilog) do protocolo PCIe, no Verification IP (VIP).",
        positions: [
          {
            title: "Lead Software Engineer",
            date: "Jul/2023 – Fev/2025",
            mode: "Híbrido",
            bullets: [
              "Liderei o projeto de Verification IP (VIP) do PCIe, conduzindo a inovação arquitetural do software.",
              "Atuei em projetos de IA, incluindo LLMs (ChatVIP) e algoritmos de clusterização para testes automáticos e agrupamento de falhas.",
              "Coordenei o desenvolvimento C++ em todas as novas frentes do produto PCIe, incluindo o emergente PCIe 7.0.",
            ],
          },
          {
            title: "Software Engineer II",
            date: "Jul/2022 – Jun/2023",
            mode: "Híbrido",
            bullets: [
              "Liderei o VIP PCIe, especificamente a nova geração PCIe 6.0.",
              "Desenvolvi diversas features (C++) e conduzi o roadmap de vários desenvolvedores, dominando detalhes técnicos e priorização de tarefas.",
              "Depositei três patentes no contexto de verificação do PCIe.",
            ],
          },
          {
            title: "Software Engineer I",
            date: "Set/2021 – Jun/2022",
            mode: "Remoto",
            bullets: [
              "Desenvolvi código (C++) para o VIP PCIe, incluindo protocolos de segurança (Integrity and Data Encryption) e o estado de baixa potência L0p.",
              "Realizei melhorias e correções de bugs (C/C++) em múltiplas interfaces e aspectos do protocolo PCIe.",
              "Desenvolvi e mantive a suíte de testes de regressão (SystemVerilog).",
            ],
          },
          {
            title: "Software Engineering Intern",
            date: "Abr/2020 – Set/2021",
            mode: "Remoto",
            bullets: [
              "Migrei toda a base de código de C para C++.",
              "Desenvolvi testes de integração (SV, UVM) com foco em desempenho.",
              "Treinei e mentorei novos contratados na formação como engenheiros de software.",
            ],
          },
        ],
      },
      {
        org: "CPE - Consultoria e Projetos Elétricos Júnior",
        orgHref: "https://cpejr.com/",
        place: "Belo Horizonte, Brasil",
        date: "Jul/2017 – Dez/2019",
        sub: "Empresa júnior de engenharia e desenvolvimento de software da universidade.",
        positions: [
          {
            title: "Conselheiro Administrativo",
            date: "Jul/2019 – Dez/2019",
            bullets: [
              "Atuei como agente de governança corporativa, assessorando a Diretoria Executiva em decisões estratégicas e apresentando aos acionistas.",
            ],
          },
          {
            title: "Diretor de Projetos",
            date: "Jul/2018 – Jun/2019",
            bullets: [
              "Liderei um total de 20 pessoas e reestruturei o Departamento de Projetos em torno do SCRUM.",
              "Aumentei o Net Promoter Score (NPS) em 70% e reduzi a taxa de projetos atrasados em 42%.",
              "Coordenei 55 projetos em 10 equipes, tomando decisões estratégicas e resolvendo problemas complexos.",
              "Ministrei treinamentos em gestão de tempo, formação de equipes, gestão de projetos, SCRUM e liderança.",
            ],
          },
          {
            title: "Gerente de Projetos · Consultor de Tecnologia",
            date: "Jul/2017 – Jun/2018",
            bullets: [
              "Gerenciei equipes em projetos de prototipagem eletrônica e desenvolvimento de sites (WordPress, HTML5).",
              "Criei protótipos eletrônicos: projeto de circuitos, implementação de PCB e cases 3D impressos.",
            ],
          },
        ],
      },
    ],

    education: [
      {
        org: "PUC Minas",
        orgHref: "https://www.pucminas.br/destaques/Paginas/default.aspx",
        place: "Belo Horizonte, Brasil",
        date: "Jul/2022 – Jun/2023",
        sub: "Pós-graduação em Inteligência Artificial / Machine Learning.",
      },
      {
        org: "Wayne State University",
        orgHref: "https://wayne.edu/",
        place: "Detroit, EUA (GPA 4.0/4.0)",
        date: "Jan/2020 – Abr/2020",
        sub: "Programa de intercâmbio em Ciência da Computação.",
      },
      {
        org: "Universidade Federal de Minas Gerais (UFMG)",
        orgHref: "https://www.ufmg.br/",
        place: "Belo Horizonte, Brasil (GPA 4.85/5.0)",
        date: "2017 – 2021",
        sub: "Bacharelado em Engenharia Elétrica com especialização em Ciência da Computação. Trabalho final: aplicativo para microscópio portátil capaz de identificar bacilos de Mycobacterium tuberculosis (desenvolvimento Android em Java).",
        links: [{ text: "Repositório do projeto", href: "https://gitfront.io/r/gustavoa1604/R4ixHB9K2KyB/MicroTBApp/" }],
      },
    ],

    // Prominent "highlights" band near the top: promotes patents, talk, and
    // article out of a buried side list. `label` is the bold lead-in; if `href`
    // is set the label becomes a link. `text` (optional) is a short description.
    highlights: [
      {
        label: "Patente: aprendizado por reforço para geração de testes de verificação (US 12.099.791, concedida)",
        text: "Exploração do espaço de estados guiada por RL, com políticas por alvo e modelagem de recompensa, mais uma representação em grafo dos estados descobertos, para gerar e deduplicar sequências de teste de hardware automaticamente.",
        href: "https://patents.justia.com/patent/12099791",
      },
      {
        label: "Patente: sincronização de monitor baseada em número de sequência (US 12.348.403, concedida)",
        text: "Método de verificação que mantém um monitor passivo em sincronia com o DUT para tráfego FLIT-mode do PCIe 6.0, via processamento adiado dirigido por ACK/NAK.",
        href: "https://patents.justia.com/patent/12348403",
      },
      {
        label: "Patente: identificação robusta de fluxo de dados (contexto de verificação PCIe, depositada)",
        text: "Mecanismo para decodificar com confiabilidade os blocos ordered-set do PCIe 6.0 em codificação 1b/1b.",
      },
      {
        label: "Palestrante na PCI-SIG US Developers Conference (2023)",
        href: "https://pcisig.com/events/pci-sig-developers-conference/pci-sig-developers-conference-2023-agenda",
      },
      {
        label: "Autor do artigo “Insights Into the Evolutions and Optimizations of PCIe 6.0”",
        href: "https://www.chipestimate.com/Insights-Into-the-Evolutions-and-Optimizations-of-PCIe-60/Cadence/Technical-Article/2024/02/27",
      },
      {
        label: "Autor do livro “O Tempo Fala”, sobre gestão do tempo",
        text: "Publicado.",
        href: "https://hotm.art/otempofala",
      },
      {
        label: "Contribuidor do projeto open-source QVAC",
        text: "Ecossistema open-source de inferência de IA local.",
        href: "https://github.com/tetherto/qvac",
      },
    ],

    skills: [
      { title: "Linguagens de programação", tags: ["C", "C++", "Python", "JavaScript"] },
      {
        title: "Liderança e entrega",
        tags: ["Liderança de equipes", "Ágil / SCRUM", "Roadmap e priorização", "Mentoria e treinamento"],
      },
      {
        title: "Inferência e compressão",
        tags: ["Quantização de modelos", "Inferência local de baixa latência/memória", "Tempo real (RTF < 1) em mobile"],
      },
      {
        title: "Backends e GPU",
        tags: ["GGML / llama.cpp", "ONNX Runtime", "mlc-llm", "Apache TVM", "Vulkan", "Metal", "OpenCL (Adreno)"],
      },
      {
        title: "Modelos",
        tags: ["ASR (Whisper, Parakeet)", "TTS (Piper, Supertonic, Chatterbox)", "OCR (EasyOCR)", "NMT (Marian)", "LLMs (Llama, Qwen)"],
      },
      {
        title: "ML e pesquisa",
        tags: ["ML para verificação de hardware (patenteado)", "Curadoria de datasets", "HuggingFace"],
      },
    ],

    languages: ["Português (nativo)", "Inglês (fluente)", "Espanhol (intermediário)"],
    awards: ["Segunda maior nota geral entre os formandos da UFMG (Out/2021)."],
  },

  en: {
    htmlLang: "en",
    docTitle: "Gustavo Araujo - Resume",
    role: "AI Inference · C++ Systems · Technical Leadership",
    location: "Belo Horizonte, Brazil",
    back: "← Back to home",
    summaryTitle: "Summary",
    summary:
      "Hi! I am Gustavo, software engineer with 9+ years of experience spanning AI deployment, C/C++ systems, and technical leadership. Currently I am shipping quantized on-device AI models (ASR, TTS, OCR, and translation) across five different platforms (Windows, Linux, macOS, Android, iOS) with GPU acceleration. Previously, I spent ~5 years building and re-architecting the C/C++ verification software for the PCIe protocol at Cadence Design Systems. I have led teams of up to 20 people, introducing the SCRUM methodology (NPS +70%, overdue projects -42%), and I hold three granted U.S. patents in machine learning for hardware verification. I am an AI/ML specialist on top of an Electrical Engineering degree with Computer Science minor.",
    experienceTitle: "Professional experience",
    educationTitle: "Education",
    highlightsTitle: "Selected highlights",
    skillsTitle: "Skills",
    languagesTitle: "Languages",
    awardsTitle: "Awards",

    experience: [
      {
        org: "Tether.io",
        orgHref: "https://tether.to/",
        place: "Remote",
        date: "Feb 2025 – present",
        sub: "QVAC: an open-source, local AI inference ecosystem (C++, JS).",
        links: [{ text: "qvac.tether.io", href: "https://qvac.tether.io/" }],
        positions: [
          {
            title: "Lead Software Engineer",
            date: "Sep 2025 – present",
            mode: "Remote",
            bullets: [
              "Lead a team of up to 6 inference engineers and JS developers, owning the on-device speech stack (ASR + TTS) end to end on QVAC.",
              "Shipped ASR across all five platforms (Windows, Linux, macOS, Android, iOS) with GPU acceleration (Vulkan, Metal, OpenCL on Adreno): Whisper and a brain-computer-interface Whisper variant on the GGML backend, and Parakeet on ONNX Runtime and GGML, running far under real time (RTF as low as ~0.002 on Vulkan).",
              "Shipped real-time TTS across the same platforms: Piper (ONNX), Supertonic, and Chatterbox (ONNX and GGML), with Chatterbox reaching RTF ≈ 0.16 on Metal and 0.09 on Vulkan, fully on-device.",
              "Shipped quantized GGUF builds that roughly halve model size with negligible quality loss (Parakeet CTC 0.6B: 1.3 GiB fp16 → 697 MiB q8_0, bit-identical output), enabling deployment on memory-constrained devices.",
            ],
          },
          {
            title: "C++ Developer",
            date: "Feb 2025 – Sep 2025",
            mode: "Remote",
            bullets: [
              "As an individual contributor, ported EasyOCR (OCR) and the Marian translation model (NMT) across all five platforms, on ONNX Runtime and GGML.",
              "Brought up LLMs (Llama, Qwen) on the ONNX, mlc-llm, and Apache TVM backends.",
              "Deployed models on Windows, Linux, macOS, Android, and iOS.",
            ],
          },
        ],
      },
      {
        org: "Cadence Design Systems",
        orgHref: "https://www.cadence.com/en_US/home.html",
        place: "Belo Horizonte, Brazil",
        date: "Apr 2020 – Feb 2025",
        sub: "Software development (C/C++) for hardware verification (SystemVerilog) of the PCIe protocol, on the Verification IP (VIP).",
        positions: [
          {
            title: "Lead Software Engineer",
            date: "Jul 2023 – Feb 2025",
            mode: "Hybrid",
            bullets: [
              "Led the Verification IP (VIP) PCIe project, driving software architectural innovation.",
              "Worked on multiple AI projects including LLMs (ChatVIP) and clustering algorithms for automatic tests and failure grouping.",
              "Coordinated C++ development across all new fronts of the PCIe product, including the emerging PCIe 7.0.",
            ],
          },
          {
            title: "Software Engineer II",
            date: "Jul 2022 – Jun 2023",
            mode: "Hybrid",
            bullets: [
              "Led VIP PCIe, specifically the new-generation PCIe 6.0.",
              "Developed multiple features (C++) and led the roadmap of several other developers, owning technical details and task prioritization.",
              "Filed three patents in the PCIe verification context.",
            ],
          },
          {
            title: "Software Engineer I",
            date: "Sep 2021 – Jun 2022",
            mode: "Remote",
            bullets: [
              "Developed C++ code for VIP PCIe, including security protocols (Integrity and Data Encryption) and the L0p low-power state.",
              "Enhanced and fixed bugs (C/C++) across multiple interfaces and aspects of the PCIe protocol.",
              "Built and maintained the regression test suite (SystemVerilog).",
            ],
          },
          {
            title: "Software Engineering Intern",
            date: "Apr 2020 – Sep 2021",
            mode: "Remote",
            bullets: [
              "Upgraded the entire codebase from C to C++.",
              "Developed integration tests (SV, UVM) focused on performance.",
              "Trained and mentored new hires to become software engineers.",
            ],
          },
        ],
      },
      {
        org: "CPE - Consultoria e Projetos Elétricos Júnior",
        orgHref: "https://cpejr.com/",
        place: "Belo Horizonte, Brazil",
        date: "Jul 2017 – Dec 2019",
        sub: "University's junior engineering and software development company.",
        positions: [
          {
            title: "Administrative Counselor",
            date: "Jul 2019 – Dec 2019",
            bullets: [
              "Acted as a corporate governance agent, advising the Executive Directory on key decisions and presenting to shareholders.",
            ],
          },
          {
            title: "Project Director",
            date: "Jul 2018 – Jun 2019",
            bullets: [
              "Headed a total of 20 people and restructured the Project Department around SCRUM.",
              "Increased Net Promoter Score (NPS) by 70% and decreased the overdue-projects rate by 42%.",
              "Coordinated 55 projects across 10 teams, making strategic decisions and solving complex issues.",
              "Delivered training on time management, team building, project management, SCRUM, and leadership.",
            ],
          },
          {
            title: "Project Manager · Technology Consultant",
            date: "Jul 2017 – Jun 2018",
            bullets: [
              "Managed teams on electronic-prototyping and website-development projects (WordPress, HTML5).",
              "Built electronic prototypes: circuit design, PCB implementation, and 3D-printed cases.",
            ],
          },
        ],
      },
    ],

    education: [
      {
        org: "PUC Minas",
        orgHref: "https://www.pucminas.br/destaques/Paginas/default.aspx",
        place: "Belo Horizonte, Brazil",
        date: "Jul 2022 – Jun 2023",
        sub: "Graduate degree in Artificial Intelligence / Machine Learning.",
      },
      {
        org: "Wayne State University",
        orgHref: "https://wayne.edu/",
        place: "Detroit, USA (GPA 4.0/4.0)",
        date: "Jan 2020 – Apr 2020",
        sub: "Exchange program in Computer Science.",
      },
      {
        org: "Federal University of Minas Gerais (UFMG)",
        orgHref: "https://www.ufmg.br/",
        place: "Belo Horizonte, Brazil (GPA 4.85/5.0)",
        date: "2017 – 2021",
        sub: "Bachelor's in Electrical Engineering with a minor in Computer Science. Final project: a smartphone app for a portable microscope capable of identifying Mycobacterium tuberculosis bacilli (Android development in Java).",
        links: [{ text: "Project repository", href: "https://gitfront.io/r/gustavoa1604/R4ixHB9K2KyB/MicroTBApp/" }],
      },
    ],

    // Prominent "highlights" band near the top: promotes patents, talk, and
    // article out of a buried side list. `label` is the bold lead-in; if `href`
    // is set the label becomes a link. `text` (optional) is a short description.
    highlights: [
      {
        label: "Patent: reinforcement learning for verification test generation (US 12,099,791, granted)",
        text: "RL-driven state-space exploration with per-target policies and reward shaping, plus a graph representation of discovered states, to automatically generate and de-duplicate hardware test sequences.",
        href: "https://patents.justia.com/patent/12099791",
      },
      {
        label: "Patent: sequence-number-based monitor synchronization (US 12,348,403, granted)",
        text: "Verification method that keeps a passive monitor in sync with a DUT for PCIe 6.0 FLIT-mode traffic via ACK/NAK-driven deferred processing.",
        href: "https://patents.justia.com/patent/12348403",
      },
      {
        label: "Patent: robust data-stream identification (PCIe verification context, filed)",
        text: "Mechanism for reliably decoding PCIe 6.0 ordered-set blocks at 1b/1b encoding.",
      },
      {
        label: "Speaker, PCI-SIG U.S. Developers Conference (2023)",
        href: "https://pcisig.com/events/pci-sig-developers-conference/pci-sig-developers-conference-2023-agenda",
      },
      {
        label: "Author, “Insights Into the Evolutions and Optimizations of PCIe 6.0”",
        href: "https://www.chipestimate.com/Insights-Into-the-Evolutions-and-Optimizations-of-PCIe-60/Cadence/Technical-Article/2024/02/27",
      },
      {
        label: "Author of the book “O Tempo Fala”, on time management",
        text: "Published (in Portuguese).",
        href: "https://hotm.art/otempofala",
      },
      {
        label: "Contributor to the QVAC open-source project",
        text: "Open-source, local AI inference ecosystem.",
        href: "https://github.com/tetherto/qvac",
      },
    ],

    skills: [
      { title: "Programming languages", tags: ["C", "C++", "Python", "JavaScript"] },
      {
        title: "Leadership & delivery",
        tags: ["Team leadership", "Agile / SCRUM", "Roadmap & prioritization", "Mentoring & training"],
      },
      {
        title: "Inference & compression",
        tags: ["Model quantization", "Low-latency / low-memory on-device inference", "Real-time (RTF < 1) on mobile"],
      },
      {
        title: "Backends & GPU",
        tags: ["GGML / llama.cpp", "ONNX Runtime", "mlc-llm", "Apache TVM", "Vulkan", "Metal", "OpenCL (Adreno)"],
      },
      {
        title: "Models",
        tags: ["ASR (Whisper, Parakeet)", "TTS (Piper, Supertonic, Chatterbox)", "OCR (EasyOCR)", "NMT (Marian)", "LLMs (Llama, Qwen)"],
      },
      {
        title: "ML & research",
        tags: ["ML for hardware verification (patented)", "Dataset curation", "HuggingFace"],
      },
    ],

    languages: ["Portuguese (native)", "English (fluent)", "Spanish (intermediate)"],
    awards: ["Second highest overall grade among graduating students at UFMG (Oct 2021)."],
  },
};

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function bulletList(bullets) {
  const ul = el("ul");
  bullets.forEach((b) => ul.append(el("li", null, b)));
  return ul;
}

function renderEntry(item) {
  const entry = el("article", "entry");

  const head = el("div", "entry-head");
  const title = el("h3", "entry-title");
  if (item.orgHref) {
    const a = el("a", null, item.org);
    a.href = item.orgHref;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    title.append(a);
  } else {
    title.append(item.org);
  }
  if (item.place) {
    title.append(" ");
    title.append(el("span", "entry-org", "· " + item.place));
  }
  head.append(title);
  head.append(el("span", "entry-date", item.date));
  entry.append(head);

  if (item.sub) entry.append(el("p", "entry-sub", item.sub));

  if (item.links) {
    const lp = el("p", "entry-links");
    item.links.forEach((lk, i) => {
      if (i) lp.append(el("span", "link-sep", " · "));
      const a = el("a", null, lk.text + " ↗");
      a.href = lk.href;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      lp.append(a);
    });
    entry.append(lp);
  }

  if (item.positions) {
    item.positions.forEach((p) => {
      const pos = el("div", "position");
      const ph = el("div", "position-head");
      ph.append(el("h4", "position-title", p.title));
      const meta = p.mode ? p.date + " · " + p.mode : p.date;
      ph.append(el("span", "entry-date", meta));
      pos.append(ph);
      if (p.bullets) pos.append(bulletList(p.bullets));
      entry.append(pos);
    });
  }
  return entry;
}

function applyLanguage(lang) {
  const dict = RESUME[lang] || RESUME.pt;
  document.documentElement.lang = dict.htmlLang;
  document.title = dict.docTitle;

  document.getElementById("r-name").textContent = RESUME.name;
  document.getElementById("r-role").textContent = dict.role;
  document.getElementById("r-back").textContent = dict.back;

  // Contact line
  const contact = document.getElementById("r-contact");
  contact.innerHTML = "";
  contact.append(el("span", null, dict.location));
  const phone = el("a");
  phone.href = "tel:" + RESUME.phone.replace(/[^0-9+]/g, "");
  phone.textContent = RESUME.phone;
  contact.append(phone);
  const mail = el("a");
  mail.href = "mailto:" + RESUME.email;
  mail.textContent = RESUME.email;
  contact.append(mail);
  const li = el("a");
  li.href = RESUME.linkedin;
  li.target = "_blank";
  li.rel = "noopener noreferrer";
  li.textContent = "LinkedIn";
  contact.append(li);

  // Summary
  document.getElementById("r-summary-title").textContent = dict.summaryTitle;
  document.getElementById("r-summary").textContent = dict.summary;

  // Experience
  document.getElementById("r-exp-title").textContent = dict.experienceTitle;
  const exp = document.getElementById("r-experience");
  exp.innerHTML = "";
  dict.experience.forEach((item) => exp.append(renderEntry(item)));

  // Education
  document.getElementById("r-edu-title").textContent = dict.educationTitle;
  const edu = document.getElementById("r-education");
  edu.innerHTML = "";
  dict.education.forEach((item) => edu.append(renderEntry(item)));

  // Skills
  document.getElementById("r-skills-title").textContent = dict.skillsTitle;
  const skills = document.getElementById("r-skills");
  skills.innerHTML = "";
  dict.skills.forEach((group) => {
    const g = el("div", "skill-group");
    g.append(el("h3", null, group.title));
    const tags = el("div", "tags");
    group.tags.forEach((t) => tags.append(el("span", "tag", t)));
    g.append(tags);
    skills.append(g);
  });

  // Highlights (patents, talk, article, open source)
  document.getElementById("r-highlights-title").textContent = dict.highlightsTitle;
  const hl = document.getElementById("r-highlights");
  hl.innerHTML = "";
  dict.highlights.forEach((item) => {
    const liEl = el("li");
    if (item.href) {
      const a = el("a", "highlight-label", item.label + " ↗");
      a.href = item.href;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      liEl.append(a);
    } else {
      liEl.append(el("strong", "highlight-label", item.label));
    }
    if (item.text) {
      liEl.append(el("span", "highlight-text", ": " + item.text));
    }
    hl.append(liEl);
  });

  // Languages + Awards (meta grid)
  document.getElementById("r-lang-title").textContent = dict.languagesTitle;
  const langs = document.getElementById("r-languages");
  langs.innerHTML = "";
  dict.languages.forEach((t) => langs.append(el("li", null, t)));

  document.getElementById("r-awards-title").textContent = dict.awardsTitle;
  const awards = document.getElementById("r-awards");
  awards.innerHTML = "";
  dict.awards.forEach((t) => awards.append(el("li", null, t)));

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  try {
    localStorage.setItem("resumeLang", lang);
  } catch (e) {}
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

// Default language: route sets window.RESUME_DEFAULT_LANG; user toggle is not
// persisted across the two routes, so the route default always wins on load.
applyLanguage(window.RESUME_DEFAULT_LANG || "en");

document.getElementById("year").textContent = new Date().getFullYear();

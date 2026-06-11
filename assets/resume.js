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
    role: "Lead Software Engineer",
    location: "Belo Horizonte, Brasil",
    back: "← Voltar ao início",
    summaryTitle: "Resumo",
    summary:
      "Olá! Sou o Gustavo, Engenheiro de Software com mais de 9 anos de experiência em deploy de IA, desenvolvimento ágil de software e gestão de projetos, atuando com diversos frameworks ao longo de minha carreira. Possuo bacharelado em Engenharia Elétrica com especialização em Ciência da Computação e pós-graduação em Inteligência Artificial e Aprendizado de Máquina. Destaco-me em projetos complexos, entregando bons resultados mesmo sob prazos curtos. Comunico-me fluentemente em português e inglês e trabalho de forma dinâmica com equipes geograficamente distribuídas.",
    experienceTitle: "Experiência profissional",
    educationTitle: "Formação acadêmica",
    industryTitle: "Participação na indústria",
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
            title: "Lead Software Engineering Services",
            date: "Set/2025 – atual",
            mode: "Remoto",
            bullets: [
              "Atuo com diversos modelos de IA open-source: Qwen, Llama, Whisper, Parakeet, Chatterbox, Supertonic, Marian, IndicTrans2, entre outros.",
              "Conduzo a inferência sobre os backends llama.cpp e ONNX Runtime.",
              "Entrego soluções de Reconhecimento de Fala (ASR), Síntese de Voz (TTS) e Reconhecimento Óptico de Caracteres (OCR).",
              "Lidero 10 pessoas entre engenheiros de inferência de IA e desenvolvedores JS.",
            ],
          },
          {
            title: "C++ Development Services",
            date: "Fev/2025 – Set/2025",
            mode: "Remoto",
            bullets: [
              "Desenvolvi em C++ múltiplos modelos de IA: OCR, tradução (Marian), transcrição (Whisper) e LLMs (Llama, Qwen).",
              "Trabalhei com os backends ONNX, mlc-llm e Apache TVM.",
              "Implantei modelos em múltiplas plataformas (Windows, Linux, Mac, Android, iOS).",
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

    // Set `href` to make an item link out. URLs were NOT embedded in the source
    // PDF (verified), so fill these in with the real links when available.
    industry: [
      { text: "Contribuidor do projeto open-source QVAC.", href: "https://github.com/tetherto/qvac" },
      { text: "Palestrante na PCI-SIG US Developers Conference.", href: "https://pcisig.com/events/pci-sig-developers-conference/pci-sig-developers-conference-2023-agenda" },
      { text: "Autor do artigo “Insights Into the Evolutions and Optimizations of PCIe 6.0”.", href: "https://www.chipestimate.com/Insights-Into-the-Evolutions-and-Optimizations-of-PCIe-60/Cadence/Technical-Article/2024/02/27" },
    ],

    skills: [
      {
        title: "Inteligência Artificial",
        tags: ["Otimização de inferência", "Kernels (Vulkan, Metal)", "GGML / llama.cpp", "ONNX Runtime", "mlc-llm", "Apache TVM", "TTS", "ASR", "OCR", "Whisper", "Parakeet", "Chatterbox", "Supertonic"],
      },
      { title: "Linguagens de programação", tags: ["C", "C++", "Python", "JS"] },
      {
        title: "Desenvolvimento de software",
        tags: ["Git", "Desenvolvimento Ágil", "SCRUM", "SystemVerilog / UVM", "Asana", "Jira", "GDB", "Perforce", "Mozilla RR"],
      },
      {
        title: "Soft skills",
        tags: ["Gestão de tempo", "Liderança", "Aprendizado rápido", "Comunicação", "Pensamento criativo"],
      },
    ],

    languages: ["Português (nativo)", "Inglês (fluente)", "Espanhol (intermediário)"],
    awards: ["Segunda maior nota geral entre os formandos da UFMG (Out/2021)."],
  },

  en: {
    htmlLang: "en",
    docTitle: "Gustavo Araujo - Resume",
    role: "Lead Software Engineer",
    location: "Belo Horizonte, Brazil",
    back: "← Back to home",
    summaryTitle: "Summary",
    summary:
      "Hi! I am Gustavo, an accomplished Software Engineer with 9+ years of experience in AI deployment, agile software development and project management, working with a variety of frameworks throughout my career. I hold a bachelor's in Electrical Engineering with a minor in Computer Science and a graduate degree in AI/ML. I excel in complex projects, delivering great results even under tight deadlines. I communicate fluently in Portuguese and English and work dynamically with geographically distributed teams.",
    experienceTitle: "Professional experience",
    educationTitle: "Education",
    industryTitle: "Participation in industry",
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
            title: "Lead Software Engineering Services",
            date: "Sep 2025 – present",
            mode: "Remote",
            bullets: [
              "Work with multiple open-source AI models: Qwen, Llama, Whisper, Parakeet, Chatterbox, Supertonic, Marian, IndicTrans2, and others.",
              "Drive inference across the llama.cpp and ONNX Runtime backends.",
              "Deliver Automatic Speech Recognition (ASR), Text-to-Speech (TTS), and Optical Character Recognition (OCR).",
              "Lead 10 people across AI inference engineers and JS developers.",
            ],
          },
          {
            title: "C++ Development Services",
            date: "Feb 2025 – Sep 2025",
            mode: "Remote",
            bullets: [
              "Developed multiple AI models in C++: OCR, translation (Marian), transcription (Whisper), and LLMs (Llama, Qwen).",
              "Worked with the ONNX, mlc-llm, and Apache TVM backends.",
              "Deployed models on multiple platforms (Windows, Linux, Mac, Android, iOS).",
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

    // Set `href` to make an item link out. URLs were NOT embedded in the source
    // PDF (verified), so fill these in with the real links when available.
    industry: [
      { text: "Contributor to the QVAC open-source project.", href: "https://github.com/tetherto/qvac" },
      { text: "Presenter at the PCI-SIG US Developers Conference.", href: "https://pcisig.com/events/pci-sig-developers-conference/pci-sig-developers-conference-2023-agenda" },
      { text: "Author of the article “Insights Into the Evolutions and Optimizations of PCIe 6.0”.", href: "https://www.chipestimate.com/Insights-Into-the-Evolutions-and-Optimizations-of-PCIe-60/Cadence/Technical-Article/2024/02/27" },
    ],

    skills: [
      {
        title: "Artificial Intelligence",
        tags: ["Inference optimization", "Kernels (Vulkan, Metal)", "GGML / llama.cpp", "ONNX Runtime", "mlc-llm", "Apache TVM", "TTS", "ASR", "OCR", "Whisper", "Parakeet", "Chatterbox", "Supertonic"],
      },
      { title: "Programming languages", tags: ["C", "C++", "Python", "JS"] },
      {
        title: "Software development",
        tags: ["Git", "Agile Development", "SCRUM", "SystemVerilog / UVM", "Asana", "Jira", "GDB", "Perforce", "Mozilla RR"],
      },
      {
        title: "Soft skills",
        tags: ["Time management", "Leadership", "Quick learning", "Communication", "Creative thinking"],
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

  // Industry
  document.getElementById("r-ind-title").textContent = dict.industryTitle;
  const ind = document.getElementById("r-industry");
  ind.innerHTML = "";
  dict.industry.forEach((item) => {
    const liEl = el("li");
    if (item.href) {
      const a = el("a", null, item.text);
      a.href = item.href;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      liEl.append(a);
    } else {
      liEl.textContent = item.text;
    }
    ind.append(liEl);
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

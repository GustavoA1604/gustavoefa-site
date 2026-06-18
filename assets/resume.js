/* Resume data + rendering, shared by /resume (EN default) and /curriculo (PT default).
   The page each set window.RESUME_DEFAULT_LANG before loading this script. */

const RESUME = {
  name: "Gustavo Emanuel Faria Araujo",
  linkedin: "https://www.linkedin.com/in/gustavoefa/",
  email: "gefa.software@gmail.com",

  pt: {
    htmlLang: "pt-BR",
    docTitle: "Gustavo Araujo - Currículo",
    role: "Inferência de IA · Sistemas em C++ · Liderança Técnica",
    location: "Belo Horizonte, Brasil",
    back: "← Voltar ao início",
    download: "⤓ Baixar PDF",
    theme: { light: "Tema claro", dark: "Tema escuro" },
    summaryTitle: "Resumo",
    summary:
      "Engenheiro de software que entrega IA em produção rodando no próprio dispositivo e detém três patentes nos EUA (duas concedidas). Desde o início de 2025, coloquei modelos quantizados de fala, OCR e tradução no dispositivo do usuário, sem servidor, em cinco plataformas (Windows, Linux, macOS, Android, iOS) com aceleração por GPU, e hoje lidero o time de 6 pessoas por trás desse trabalho de fala. Antes disso, foram cerca de 5 anos construindo e re-arquitetando o software de verificação (C/C++) do protocolo PCIe na Cadence, onde liderei o Verification IP e conquistei essas três patentes em aprendizado de máquina para verificação de hardware, além de um artigo técnico publicado e uma palestra na PCI-SIG. Ao longo de 9 anos, liderei times que vão desse grupo de fala a uma empresa júnior universitária de 20 pessoas, onde introduzi o SCRUM (NPS +70%, projetos atrasados -42%). Graduação em Engenharia Elétrica com ênfase em Ciência da Computação e pós-graduação em IA/ML.",
    // Tagline e resumo por lente. Os padrões acima são usados na lente "all".
    roles: {
      ai: "Inferência de IA on-device · Compressão de Modelos · Sistemas de ML",
      cpp: "Sistemas C/C++ · Verificação de Hardware · Performance de Baixo Nível",
      lead: "Liderança Técnica · Formação de Times · Entrega Ágil",
    },
    summaries: {
      ai: "Engenheiro de inferência de IA on-device entregando modelos quantizados de fala, OCR e tradução que rodam inteiramente no dispositivo do usuário, sem servidor, nas cinco plataformas (Windows, Linux, macOS, Android, iOS) com aceleração por GPU via Vulkan, Metal e OpenCL. Lidero um time de 6 pessoas responsável de ponta a ponta por um stack de fala (reconhecimento + síntese) nos backends GGML e ONNX Runtime: síntese em tempo real no dispositivo (RTF ≈ 0,09 em GPU), reconhecimento muito mais rápido que o tempo real (RTF ~0,002) e builds GGUF quantizados que praticamente reduzem o modelo pela metade com perda de qualidade quase nula em celulares com pouca memória. Três patentes nos EUA (duas concedidas) aplicam aprendizado de máquina (aprendizado por reforço e redes neurais em grafo) à verificação de hardware, além da especialização em IA/ML e da graduação em Engenharia Elétrica.",
      cpp: "Engenheiro de sistemas C/C++ com cerca de 5 anos construindo e re-arquitetando o software de verificação do protocolo PCIe na Cadence, da migração de toda uma base de código C→C++ à liderança do Verification IP do PCIe 6.0/7.0. Três patentes nos EUA (duas concedidas) e um artigo técnico publicado na área de PCIe. Também tenho pós-graduação em IA/ML, além da graduação em Engenharia Elétrica com ênfase em Ciência da Computação.",
      lead: "Líder de engenharia que hoje é responsável de ponta a ponta por um stack de fala on-device com um time de 6 pessoas, e que liderou o Verification IP de PCIe na Cadence. Antes, à frente de até 20 pessoas em uma empresa júnior universitária, introduzi o SCRUM (NPS +70%, projetos atrasados -42%, 55 projetos em 10 times). Autor de um livro publicado sobre gestão do tempo; mentor e formador de novos engenheiros.",
    },
    lens: {
      viewing: "Visão:",
      more: "+{n} mais",
      less: "Mostrar menos",
      showRole: "Mostrar este cargo ({n})",
      showRoles: "Mostrar estes cargos ({n})",
      showGroup: "Mostrar estes ({n})",
      names: { ai: "IA / ML", cpp: "C++ / Hardware", lead: "Liderança", all: "Tudo" },
    },
    experienceTitle: "Experiência profissional",
    earlierExperienceTitle: "Experiência anterior",
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
              "Lidero um time de 6 pessoas responsável de ponta a ponta pelo stack de fala on-device (reconhecimento e síntese de fala), da escolha dos modelos à entrega no QVAC.",
              "Coloquei reconhecimento de fala no dispositivo do usuário, sem servidor nem rede, nas cinco plataformas, transcrevendo muito mais rápido que o tempo real (até ~0,002 RTF em GPU). Subi Whisper, uma variante Whisper de interface cérebro-computador e Parakeet nos backends GGML e ONNX Runtime.",
              "Entreguei síntese de fala em tempo real nas mesmas cinco plataformas, totalmente no dispositivo (Chatterbox a ~0,09 RTF em GPU): Piper, Supertonic e Chatterbox em ONNX e GGML.",
              "Reduzi o tamanho dos modelos pela metade com perda de qualidade desprezível via quantização GGUF (Parakeet 0.6B: 1,3 GiB → 697 MiB, saída idêntica bit a bit), viabilizando deploy em celulares com pouca memória.",
              "Conduzo entrevistas técnicas e lidero o onboarding e o treinamento de novas contratações no time de fala.",
            ],
          },
          {
            title: "C++ Developer",
            date: "Fev/2025 – Set/2025",
            mode: "Remoto",
            bullets: [
              "Levei reconhecimento de texto (OCR) e tradução automática on-device às cinco plataformas: portei o EasyOCR e os modelos de tradução Marian e IndicTrans2 para ONNX Runtime e GGML.",
              "Subi modelos de linguagem (LLMs: Llama, Qwen) nos backends ONNX Runtime, mlc-llm e Apache TVM.",
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
              "Coordenei o time de desenvolvimento de testes em UVM para elaborar planos de teste, adicionar pontos de cobertura e implementar testes abrangentes para novas features do VIP de PCIe no PCIe 6.0 e 7.0.",
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
        tier: "earlier",
        compact:
          "Liderei até 20 pessoas e introduzi o SCRUM (NPS +70%, projetos atrasados -42%, 55 projetos em 10 times), evoluindo de gerente de projetos a diretor e conselheiro.",
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
              "Gerenciei uma equipe de 3 pessoas em 7 projetos de prototipagem eletrônica e desenvolvimento de sites (WordPress, HTML5).",
              "Criei protótipos eletrônicos: projeto de circuitos, implementação de PCB e cases 3D impressos.",
            ],
          },
        ],
      },
      {
        org: "Beagá Júnior",
        place: "Belo Horizonte, Brasil",
        date: "Jul/2019 – Dez/2019",
        sub: "Federação das empresas juniores de Belo Horizonte.",
        tier: "earlier",
        compact:
          "Assessorei 6 empresas juniores em estratégia e conduzi treinamentos (gestão do tempo, SCRUM).",
        positions: [
          {
            title: "Coordenador de Suporte",
            date: "Jul/2019 – Dez/2019",
            bullets: [
              "Assessorei 6 empresas juniores de Belo Horizonte em decisões estratégicas, usando a matriz GUT para identificar problemas de gestão e estrutura e propor soluções.",
              "Orientei mudanças em departamentos-chave e conduzi treinamentos em temas como gestão do tempo e SCRUM.",
            ],
          },
        ],
      },
    ],

    education: [
      {
        org: "Universidade Federal de Minas Gerais (UFMG)",
        orgHref: "https://www.ufmg.br/",
        place: "Belo Horizonte, Brasil",
        date: "2017 – 2021",
        sub: "Bacharelado em Engenharia Elétrica com especialização em Ciência da Computação. Trabalho final: aplicativo para microscópio portátil capaz de identificar bacilos de Mycobacterium tuberculosis (desenvolvimento Android em Java). GPA 4.85/5.0.",
        links: [{ text: "Repositório do projeto", href: "https://gitfront.io/r/gustavoa1604/R4ixHB9K2KyB/MicroTBApp/" }],
      },
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
        place: "Detroit, EUA",
        date: "Jan/2020 – Abr/2020",
        sub: "Programa de intercâmbio em Ciência da Computação.",
      },
    ],

    // Highlights are split into labelled groups (see `highlightGroups` for the
    // display order). Each item carries a `group` key; rendering buckets them
    // under the matching subheading. `label` is the bold lead-in; if `href` is
    // set the label becomes a link. `text` (optional) is a short description.
    highlightGroups: [
      { key: "patents", title: "Patentes" },
      { key: "talkspubs", title: "Palestras e publicações" },
      { key: "opensource", title: "Código aberto" },
    ],
    highlights: [
      {
        group: "patents",
        label: "Aprendizado por reforço para geração de testes",
        meta: "US 12.099.791 · Concedida",
        text: "RL explora o espaço de estados para gerar e deduplicar testes de verificação de hardware automaticamente.",
        href: "https://patents.justia.com/patent/12099791",
      },
      {
        group: "patents",
        label: "Sincronização de monitor por número de sequência",
        meta: "US 12.348.403 · Concedida",
        text: "Mantém um monitor passivo em sincronia com o dispositivo no tráfego do PCIe 6.0.",
        href: "https://patents.justia.com/patent/12348403",
      },
      {
        group: "patents",
        label: "Identificação robusta de fluxo de dados",
        meta: "Depositada",
        text: "Decodificação confiável dos blocos ordered-set do PCIe 6.0.",
      },
      {
        group: "talkspubs",
        label: "PCI-SIG US Developers Conference",
        meta: "Palestrante · 2023",
        text: "Apresentei “Handling PCIe 6.0 Spec Optimizations” no principal evento de PCIe da indústria: os cenários de falha escondidos nas otimizações de latência do PCIe 6.0 e os algoritmos e testes que mantêm a implementação correta.",
        href: "https://pcisig.com/events/pci-sig-developers-conference/pci-sig-developers-conference-2023-agenda",
      },
      {
        group: "talkspubs",
        label: "“Insights Into the Evolutions and Optimizations of PCIe 6.0”",
        meta: "Artigo técnico · Cadence",
        text: "Um mergulho nas otimizações que permitem ao PCIe 6.0 alcançar 64 GT/s por lane: codificação 1b/1b, números de sequência de flit implícitos e o estado de largura dinâmica L0p. Publicado pela Cadence.",
        href: "https://www.chipestimate.com/Insights-Into-the-Evolutions-and-Optimizations-of-PCIe-60/Cadence/Technical-Article/2024/02/27",
      },
      {
        group: "opensource",
        label: "QVAC",
        meta: "Contribuidor · líder de time",
        text: "Ecossistema open-source da Tether para rodar modelos de IA localmente, 100% no dispositivo. Contribuo com o projeto e lidero o time que constrói seu stack de fala: reconhecimento e síntese de fala nas cinco plataformas com aceleração por GPU.",
        href: "https://github.com/tetherto/qvac",
      },
    ],

    // Each tag is { label, detail }. The label is kept short (one line, no wrap);
    // the detail expands on hover/click with evidence drawn from the rest of the
    // resume (experience, patents, highlights).
    skills: [
      {
        title: "Linguagens de programação",
        tags: [
          { label: "C", detail: "Base de código de verificação do PCIe antes da migração para C++." },
          { label: "C++", detail: "Linguagem principal: stack de inferência do QVAC e o Verification IP do PCIe na Cadence." },
          { label: "Python", detail: "Ferramentas de ML, curadoria de datasets e conversão de modelos." },
          { label: "JavaScript", detail: "Camada de aplicação do QVAC." },
        ],
      },
      {
        title: "Liderança e entrega",
        tags: [
          { label: "Liderança de equipes", detail: "Lidero um time de fala de 6 pessoas (Tether) e liderei o Verification IP de PCIe na Cadence; antes, liderei até 20 pessoas em uma empresa júnior universitária (CPE)." },
          { label: "Ágil / SCRUM", detail: "Introduzi SCRUM em uma empresa júnior universitária (CPE): NPS +70%, projetos atrasados -42%." },
          { label: "Roadmap e prioridades", detail: "Conduzi roadmaps e priorização de tarefas em times na Tether e na Cadence." },
          { label: "Mentoria e treinamento", detail: "Onboarding e treinamento de novas contratações na Tether e na Cadence; treinamentos na CPE e na Beagá Júnior." },
        ],
      },
      {
        title: "Inferência e compressão",
        tags: [
          { label: "Quantização de modelos", detail: "Builds GGUF que praticamente reduzem o tamanho do modelo pela metade com perda de qualidade desprezível." },
          { label: "Inferência on-device", detail: "Baixa latência e baixa memória em dispositivos limitados; fala, OCR e tradução nas cinco plataformas." },
          { label: "Tempo real em mobile", detail: "RTF < 1 no dispositivo, ex.: Chatterbox TTS a RTF ≈ 0,09 em Vulkan; ASR a partir de ~0,002." },
        ],
      },
      {
        title: "Backends e GPU",
        tags: [
          { label: "GGML / llama.cpp", detail: "Backend principal para ASR/TTS no QVAC." },
          { label: "ONNX Runtime", detail: "Backend para Parakeet, Piper, Chatterbox, EasyOCR e Marian." },
          { label: "mlc-llm", detail: "Backend usado para subir LLMs (Llama, Qwen)." },
          { label: "Apache TVM", detail: "Compilação e otimização de modelos para inferência." },
          { label: "Vulkan", detail: "Aceleração por GPU em Windows, Linux e Android." },
          { label: "Metal", detail: "Aceleração por GPU em macOS e iOS." },
          { label: "OpenCL (Adreno)", detail: "Aceleração por GPU em GPUs Adreno (Android)." },
        ],
      },
      {
        title: "Modelos",
        tags: [
          { label: "ASR", detail: "Whisper, uma variante Whisper de interface cérebro-computador e Parakeet (GGML/ONNX), muito abaixo do tempo real." },
          { label: "TTS", detail: "Piper, Supertonic e Chatterbox; síntese em tempo real no dispositivo." },
          { label: "OCR", detail: "EasyOCR, portado para as cinco plataformas." },
          { label: "NMT", detail: "Modelos de tradução Marian e IndicTrans2." },
          { label: "LLMs", detail: "Llama e Qwen, nos backends ONNX, mlc-llm e Apache TVM." },
        ],
      },
      {
        title: "ML e pesquisa",
        tags: [
          { label: "ML para verificação de HW", detail: "Três patentes nos EUA (duas concedidas) aplicando RL e redes neurais em grafo à geração de testes de verificação do PCIe." },
          { label: "Curadoria de datasets", detail: "Datasets de treino, validação e teste para um chatbot de suporte ao produto (ChatVIP)." },
          { label: "HuggingFace", detail: "Obtenção de modelos e builds GGUF quantizados." },
        ],
      },
    ],

    languages: ["Português (nativo)", "Inglês (fluente)", "Espanhol (intermediário)"],
    awards: ["Segunda maior nota geral entre os formandos da UFMG (Out/2021)."],
    // Personal projects: a small, lens-free side-rail section below Awards. Kept
    // out of the "Selected highlights" band so it doesn't compete with the
    // patents/talks/open-source credentials.
    beyondTitle: "Além do trabalho",
    beyond: [
      {
        label: "Escritor: “O Tempo Fala”",
        text: "Um livro curto sobre gestão do tempo, narrado como um diálogo com o “Senhor do Tempo”.",
        href: "https://hotm.art/otempofala",
      },
      {
        label: "Entrelinhas",
        text: "Um jogo de palavras feito sozinho: descubra a palavra secreta dentro de limites alfabéticos que se estreitam.",
        href: "../entrelinhas/",
      },
      {
        label: "Game Designer e Desenvolvedor Unity",
        text: "Certificado profissional pela EBAC (Escola Britânica de Artes Criativas e Tecnologia), a base por trás do Entrelinhas.",
        href: "https://ebaconline.com.br/",
      },
    ],
  },

  en: {
    htmlLang: "en",
    docTitle: "Gustavo Araujo - Resume",
    role: "AI Inference · C++ Systems · Technical Leadership",
    location: "Belo Horizonte, Brazil",
    back: "← Back to home",
    download: "⤓ Download PDF",
    theme: { light: "Light theme", dark: "Dark theme" },
    summaryTitle: "Summary",
    summary:
      "Software engineer who ships production AI on-device and holds three U.S. patents (two granted). Since early 2025 I've put quantized speech, OCR, and translation models on users' devices, no server, across five platforms (Windows, Linux, macOS, Android, iOS) with GPU acceleration, and today I lead the 6-person team behind that speech work. Before that came ~5 years building and re-architecting the C/C++ PCIe verification software at Cadence, where I led the Verification IP and earned those three patents in machine learning for hardware verification, alongside a published technical article and a PCI-SIG conference talk. Over 9 years I've led teams ranging from this speech group to a 20-person university enterprise, where I introduced SCRUM (NPS +70%, overdue projects -42%). Electrical Engineering degree with a Computer Science minor, plus a graduate degree in AI/ML.",
    // Per-lens hero tagline + summary. The defaults above are used for the "all" lens.
    roles: {
      ai: "On-device AI Inference · Model Compression · ML Systems",
      cpp: "C/C++ Systems · Hardware Verification · Low-level Performance",
      lead: "Technical Leadership · Team Building · Agile Delivery",
    },
    summaries: {
      ai: "On-device AI inference engineer shipping quantized speech, OCR, and translation models that run entirely on the user's device, no server, across five platforms (Windows, Linux, macOS, Android, iOS) with GPU acceleration via Vulkan, Metal, and OpenCL. I lead a 6-person team that owns a speech stack (recognition + synthesis) end to end on the GGML and ONNX Runtime backends: real-time on-device synthesis (~0.09 RTF on GPU), recognition far faster than real time (~0.002 RTF), and quantized GGUF builds that roughly halve model size at near-zero quality loss for memory-constrained phones. Three U.S. patents (two granted) apply machine learning (reinforcement learning and graph neural networks) to hardware verification, on top of an AI/ML specialization and an Electrical Engineering degree.",
      cpp: "C/C++ systems engineer with ~5 years building and re-architecting the PCIe protocol verification software at Cadence, from migrating an entire codebase C→C++ to leading the PCIe 6.0/7.0 Verification IP. Three U.S. patents (two granted) and a published technical article in the PCIe space. I also hold a graduate degree in AI/ML on top of an Electrical Engineering degree with a Computer Science minor.",
      lead: "Engineering leader who today owns an on-device speech stack end to end with a 6-person team, and previously led the PCIe Verification IP at Cadence. Earlier, heading up to 20 people at a university enterprise, I introduced SCRUM (NPS +70%, overdue projects -42%, 55 projects across 10 teams). Author of a published book on time management; mentor and trainer of new engineers.",
    },
    lens: {
      viewing: "Viewing:",
      more: "+{n} more",
      less: "Show less",
      showRole: "Show this role ({n})",
      showRoles: "Show these roles ({n})",
      showGroup: "Show these ({n})",
      names: { ai: "AI / ML", cpp: "C++ / Hardware", lead: "Leadership", all: "Everything" },
    },
    experienceTitle: "Professional experience",
    earlierExperienceTitle: "Earlier experience",
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
              "Lead a 6-person team that owns the on-device speech stack (speech-to-text and text-to-speech) end to end, from model selection to shipping in QVAC.",
              "Put speech recognition on users' devices with no server or network, across all five platforms, transcribing far faster than real time (as low as ~0.002 RTF on GPU). Brought up Whisper, a brain-computer-interface Whisper variant, and Parakeet on the GGML and ONNX Runtime backends.",
              "Delivered real-time speech synthesis on the same five platforms, fully on-device (Chatterbox at ~0.09 RTF on GPU): Piper, Supertonic, and Chatterbox on ONNX and GGML.",
              "Halved model size with negligible quality loss through GGUF quantization (Parakeet 0.6B: 1.3 GiB → 697 MiB, bit-identical output), making deployment possible on memory-constrained phones.",
              "Run technical interviews and lead onboarding and training for new hires on the speech team.",
            ],
          },
          {
            title: "C++ Developer",
            date: "Feb 2025 – Sep 2025",
            mode: "Remote",
            bullets: [
              "Brought on-device text recognition (OCR) and machine translation to all five platforms: ported EasyOCR and the Marian and IndicTrans2 translation models onto ONNX Runtime and GGML.",
              "Brought up large language models (Llama, Qwen) on the ONNX Runtime, mlc-llm, and Apache TVM backends.",
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
              "Coordinated the UVM test development team to build test plans, add coverage points, and implement comprehensive tests for new PCIe VIP features in PCIe 6.0 and 7.0.",
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
        org: "CPE - Consultoria e Projetos Eletricos Junior",
        orgHref: "https://cpejr.com/",
        place: "Belo Horizonte, Brazil",
        date: "Jul 2017 – Dec 2019",
        sub: "University's junior engineering and software development company.",
        tier: "earlier",
        compact:
          "Led up to 20 people and introduced SCRUM (NPS +70%, overdue projects -42%, 55 projects across 10 teams), progressing from project manager to director to advisory counselor.",
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
              "Managed a team of 3 across 7 electronic-prototyping and website-development projects (WordPress, HTML5).",
              "Built electronic prototypes: circuit design, PCB implementation, and 3D-printed cases.",
            ],
          },
        ],
      },
      {
        org: "Beaga Junior",
        place: "Belo Horizonte, Brazil",
        date: "Jul 2019 – Dec 2019",
        sub: "Belo Horizonte federation of junior enterprises.",
        tier: "earlier",
        compact:
          "Advised 6 junior enterprises on strategy and ran training (time management, SCRUM).",
        positions: [
          {
            title: "Support Coordinator",
            date: "Jul 2019 – Dec 2019",
            bullets: [
              "Advised 6 junior enterprises across Belo Horizonte on strategy, using the GUT matrix to surface management and structural problems and propose solutions.",
              "Guided changes across key departments and ran training on topics such as time management and SCRUM.",
            ],
          },
        ],
      },
    ],

    education: [
      {
        org: "Federal University of Minas Gerais (UFMG)",
        orgHref: "https://www.ufmg.br/",
        place: "Belo Horizonte, Brazil",
        date: "2017 – 2021",
        sub: "Bachelor's in Electrical Engineering with a minor in Computer Science. Final project: a smartphone app for a portable microscope capable of identifying Mycobacterium tuberculosis bacilli (Android development in Java). GPA 4.85/5.0.",
        links: [{ text: "Project repository", href: "https://gitfront.io/r/gustavoa1604/R4ixHB9K2KyB/MicroTBApp/" }],
      },
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
        place: "Detroit, USA",
        date: "Jan 2020 – Apr 2020",
        sub: "Exchange program in Computer Science.",
      },
    ],

    // Highlights are split into labelled groups (see `highlightGroups` for the
    // display order). Each item carries a `group` key; rendering buckets them
    // under the matching subheading. `label` is the bold lead-in; if `href` is
    // set the label becomes a link. `text` (optional) is a short description.
    highlightGroups: [
      { key: "patents", title: "Patents" },
      { key: "talkspubs", title: "Talks & publications" },
      { key: "opensource", title: "Open source" },
    ],
    highlights: [
      {
        group: "patents",
        label: "Reinforcement learning for test generation",
        meta: "US 12,099,791 · Granted",
        text: "RL explores the state space to generate and de-duplicate hardware verification tests automatically.",
        href: "https://patents.justia.com/patent/12099791",
      },
      {
        group: "patents",
        label: "Sequence-number monitor synchronization",
        meta: "US 12,348,403 · Granted",
        text: "Keeps a passive monitor in sync with the device for PCIe 6.0 traffic.",
        href: "https://patents.justia.com/patent/12348403",
      },
      {
        group: "patents",
        label: "Robust data-stream identification",
        meta: "Filed",
        text: "Reliable decoding of PCIe 6.0 ordered-set blocks.",
      },
      {
        group: "talkspubs",
        label: "PCI-SIG U.S. Developers Conference",
        meta: "Speaker · 2023",
        text: "Presented “Handling PCIe 6.0 Spec Optimizations” at the industry's main PCIe event: the failure scenarios hidden in PCIe 6.0's latency optimizations, and the algorithms and test approaches that keep an implementation correct.",
        href: "https://pcisig.com/events/pci-sig-developers-conference/pci-sig-developers-conference-2023-agenda",
      },
      {
        group: "talkspubs",
        label: "“Insights Into the Evolutions and Optimizations of PCIe 6.0”",
        meta: "Technical article · Cadence",
        text: "A deep dive into the optimizations that let PCIe 6.0 reach 64 GT/s per lane: 1b/1b encoding, implicit flit sequence numbers, and the L0p dynamic link-width state. Published by Cadence.",
        href: "https://www.chipestimate.com/Insights-Into-the-Evolutions-and-Optimizations-of-PCIe-60/Cadence/Technical-Article/2024/02/27",
      },
      {
        group: "opensource",
        label: "QVAC",
        meta: "Contributor · team lead",
        text: "Tether's open-source ecosystem for running AI models locally, fully on-device. I contribute to the project and lead the team building its speech stack: speech-to-text and text-to-speech across five platforms with GPU acceleration.",
        href: "https://github.com/tetherto/qvac",
      },
    ],

    // Each tag is { label, detail }. The label is kept short (one line, no wrap);
    // the detail expands on hover/click with evidence drawn from the rest of the
    // resume (experience, patents, highlights).
    skills: [
      {
        title: "Programming languages",
        tags: [
          { label: "C", detail: "The PCIe verification codebase before the C-to-C++ migration." },
          { label: "C++", detail: "Primary language: the QVAC inference stack and the PCIe Verification IP at Cadence." },
          { label: "Python", detail: "ML tooling, dataset curation, and model conversion." },
          { label: "JavaScript", detail: "The QVAC application layer." },
        ],
      },
      {
        title: "Leadership & delivery",
        tags: [
          { label: "Team leadership", detail: "Lead a 6-person speech team (Tether) and led the PCIe Verification IP at Cadence; earlier led up to 20 people at a university enterprise (CPE)." },
          { label: "Agile / SCRUM", detail: "Introduced SCRUM at a university enterprise (CPE): NPS +70%, overdue projects -42%." },
          { label: "Roadmap & priorities", detail: "Owned roadmaps and task prioritization across teams at Tether and Cadence." },
          { label: "Mentoring & training", detail: "Onboarded and trained new hires at Tether and Cadence; ran training at CPE and Beaga Junior." },
        ],
      },
      {
        title: "Inference & compression",
        tags: [
          { label: "Model quantization", detail: "GGUF builds that roughly halve model size with negligible quality loss." },
          { label: "On-device inference", detail: "Low-latency, low-memory inference on constrained devices; speech, OCR, and translation across five platforms." },
          { label: "Real-time on mobile", detail: "RTF < 1 on-device, e.g. Chatterbox TTS at RTF ≈ 0.09 on Vulkan; ASR as low as ~0.002." },
        ],
      },
      {
        title: "Backends & GPU",
        tags: [
          { label: "GGML / llama.cpp", detail: "Primary backend for ASR/TTS on QVAC." },
          { label: "ONNX Runtime", detail: "Backend for Parakeet, Piper, Chatterbox, EasyOCR, and Marian." },
          { label: "mlc-llm", detail: "Backend used to bring up LLMs (Llama, Qwen)." },
          { label: "Apache TVM", detail: "Model compilation and optimization for inference." },
          { label: "Vulkan", detail: "GPU acceleration on Windows, Linux, and Android." },
          { label: "Metal", detail: "GPU acceleration on macOS and iOS." },
          { label: "OpenCL (Adreno)", detail: "GPU acceleration on Adreno GPUs (Android)." },
        ],
      },
      {
        title: "Models",
        tags: [
          { label: "ASR", detail: "Whisper, a brain-computer-interface Whisper variant, and Parakeet (GGML/ONNX), far under real time." },
          { label: "TTS", detail: "Piper, Supertonic, and Chatterbox; real-time on-device synthesis." },
          { label: "OCR", detail: "EasyOCR, ported across all five platforms." },
          { label: "NMT", detail: "Marian and IndicTrans2 translation models." },
          { label: "LLMs", detail: "Llama and Qwen, brought up on ONNX, mlc-llm, and Apache TVM." },
        ],
      },
      {
        title: "ML & research",
        tags: [
          { label: "ML for HW verification", detail: "Three U.S. patents (two granted) applying RL and graph neural networks to PCIe verification test generation." },
          { label: "Dataset curation", detail: "Built training, validation, and test datasets for a product-support chatbot (ChatVIP)." },
          { label: "HuggingFace", detail: "Model sourcing and quantized GGUF builds." },
        ],
      },
    ],

    languages: ["Portuguese (native)", "English (fluent)", "Spanish (intermediate)"],
    awards: ["Second highest overall grade among graduating students at UFMG (Oct 2021)."],
    // Personal projects: a small, lens-free side-rail section below Awards. Kept
    // out of the "Selected highlights" band so it doesn't compete with the
    // patents/talks/open-source credentials.
    beyondTitle: "Beyond work",
    beyond: [
      {
        label: "Writer: “O Tempo Fala”",
        text: "A short book on time management, framed as a dialogue with the “Lord of Time.”",
        href: "https://hotm.art/otempofala",
      },
      {
        label: "Entrelinhas",
        text: "A solo-developed word game: find the hidden word within narrowing alphabetical limits.",
        href: "../entrelinhas/",
      },
      {
        label: "Game Designer & Unity Developer",
        text: "Professional certificate from EBAC (British School of Creative Arts and Technology), the craft behind Entrelinhas.",
        href: "https://ebaconline.com.br/",
      },
    ],
  },
};

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

// Reset a skill group to its resting state: if a chip is pinned, show that chip's
// detail; otherwise hide the detail line and clear the active highlight. Used by
// chip hover/blur, chip clicks, and the outside-click handler.
function restoreSkillGroup(group) {
  const detail = group.querySelector(".skill-detail");
  if (!detail) return;
  const pinned = group.querySelector(".tag.pinned");
  if (pinned) {
    detail.textContent = pinned.getAttribute("data-detail");
    detail.hidden = false;
    group.querySelectorAll(".tag").forEach((b) => b.classList.toggle("active", b === pinned));
  } else {
    detail.hidden = true;
    group.querySelectorAll(".tag.active").forEach((b) => b.classList.remove("active"));
  }
}

// Clicking anywhere that is not a skill chip unpins the selected skill detail.
document.addEventListener("click", (e) => {
  if (e.target.closest && e.target.closest(".tag-interactive")) return;
  document.querySelectorAll("#r-skills .tag.pinned").forEach((b) => b.classList.remove("pinned"));
  document.querySelectorAll("#r-skills .skill-group").forEach(restoreSkillGroup);
});

/* ------------------------------------------------------------------ *
 * Role lenses
 *
 * The page is sent to one person for one role, but the resume spans AI,
 * C++/hardware, and leadership. A lens lets the visitor declare what they
 * came for; matching content leads and the rest collapses behind an
 * expander (never removed, so nothing is lost and print stays complete).
 *
 * Tags live here in ONE language-independent map, index-aligned with the
 * pt/en data (whose order is identical). Only lens-specific prose lives
 * in the bilingual blocks (roles, summaries, lens.*).
 * ------------------------------------------------------------------ */
const LENSES = ["ai", "cpp", "lead"];
const DEFAULT_LENS = "all";

const LENS_TAGS = {
  // highlights[i]: patents (3), talk, article, QVAC.
  // Index-aligned with the highlights array (same order in pt/en). Note this is
  // the array order, not the display order: items are bucketed into the
  // highlightGroups (patents / talks & publications / open source) by their
  // `group` key at render time. Personal items (the book, Entrelinhas) are not
  // here: they live in the lens-free "Beyond work" side-rail section.
  highlights: [["ai", "cpp"], ["cpp"], ["cpp"], ["ai", "cpp", "lead"], ["ai", "cpp"], ["ai", "cpp", "lead"]],
  // skills[i]: languages, leadership, inference, backends, models, ML&research
  skills: [["ai", "cpp"], ["lead"], ["ai"], ["ai"], ["ai"], ["ai", "cpp"]],
  // Bullet-level tags: bullets[experienceIdx][positionIdx][bulletIdx].
  // A bullet surfaces when its tags include the active lens; off-lens bullets
  // collapse behind an expander instead of greying out. Index-aligned with the
  // pt/en data (identical order). An untagged bullet ([]) always surfaces.
  bullets: [
    [
      // Tether — Lead Software Engineer: the hiring bullet is lead/ai only, so it
      // tucks away under the C++ lens; the rest surface across the tech lenses.
      [["lead", "ai", "cpp"], ["ai", "cpp"], ["ai", "cpp"], ["ai", "cpp"], ["lead"]],
      // Tether — C++ Developer
      [["ai", "cpp"], ["ai", "cpp"]],
    ],
    [
      // Cadence — Lead Software Engineer
      [["cpp", "lead"], ["ai", "cpp"], ["cpp", "lead"], ["cpp", "lead"]],
      // Cadence — Software Engineer II
      [["cpp", "lead"], ["cpp", "lead"], ["ai", "cpp"]],
      // Cadence — Software Engineer I
      [["cpp"], ["cpp"], ["cpp"]],
      // Cadence — Intern
      [["cpp"], ["cpp"], ["lead"]],
    ],
    [
      // CPE — Administrative Counselor
      [["lead"]],
      // CPE — Project Director
      [["lead"], ["lead"], ["lead"], ["lead"]],
      // CPE — Project Manager / Technology Consultant
      [["lead", "cpp"], ["cpp"]],
    ],
    [
      // Beagá Júnior — Support Coordinator (leadership only; tucks away under
      // the AI and C++ lenses)
      [["lead"], ["lead"]],
    ],
  ],
};

let currentLang = window.RESUME_DEFAULT_LANG || "en";
let currentLens = DEFAULT_LENS;

// A node with no tags, or tags including the active lens, is "in focus".
// The "all" lens puts everything in focus.
function matchLens(tags, lens) {
  return lens === "all" || !tags || !tags.length || tags.includes(lens);
}

function getLens() {
  try {
    const v = localStorage.getItem("resumeLens");
    if (v && (v === "all" || LENSES.includes(v))) return v;
  } catch (e) {}
  return null;
}

// A lens can be preselected via the URL (?lens=ai|cpp|lead|all), e.g. a link
// shared on a specific job application so the page lands already focused for
// that role. The URL wins over any stored choice (a per-application link must
// override what a returning visitor once clicked); an invalid or missing value
// falls through to the stored choice, then the default.
function getLensFromURL() {
  try {
    const v = new URLSearchParams(window.location.search).get("lens");
    if (v && (v === "all" || LENSES.includes(v))) return v;
  } catch (e) {}
  return null;
}

function setLens(lens) {
  currentLens = lens;
  try {
    localStorage.setItem("resumeLens", lens);
  } catch (e) {}
  render();
}

// Split a list into in-focus and off-lens items, preserving original order
// within each group. The "all" lens puts everything in focus.
function partitionByLens(items, tagList, lens) {
  const focus = [];
  const extra = [];
  items.forEach((item, i) => {
    const tags = tagList ? tagList[i] : null;
    (lens === "all" || matchLens(tags, lens) ? focus : extra).push(item);
  });
  return { focus, extra };
}

// A toggle button that reveals/hides the off-lens "extra" items by flipping
// `revealClass` on `container`. Used for bullets, highlights, and skills so a
// lens reorganizes rather than dims: relevant first, the rest one click away.
function lensToggle(container, revealClass, moreText, lessText) {
  const btn = el("button", "lens-toggle", moreText);
  btn.type = "button";
  btn.addEventListener("click", () => {
    const open = container.classList.toggle(revealClass);
    btn.textContent = open ? lessText : moreText;
    btn.classList.toggle("open", open);
  });
  return btn;
}

// Bullet list that surfaces on-lens bullets and tucks the rest behind an
// expander. When no bullet matches (a whole role is off-lens), the position
// collapses to its header plus a "show this role" expander.
function bulletListLens(bullets, bulletTags, lens, dict) {
  const ul = el("ul");
  if (lens === "all" || !bulletTags) {
    bullets.forEach((b) => ul.append(el("li", null, b)));
    return ul;
  }
  const focus = [];
  const extra = [];
  bullets.forEach((b, i) => {
    (matchLens(bulletTags[i], lens) ? focus : extra).push(b);
  });
  focus.forEach((b) => ul.append(el("li", null, b)));
  if (extra.length) {
    extra.forEach((b) => ul.append(el("li", "lens-extra", b)));
    const liT = el("li", "lens-toggle-li");
    const moreText = (focus.length ? dict.lens.more : dict.lens.showRole).replace(
      "{n}",
      extra.length
    );
    liT.append(lensToggle(ul, "show-extra", moreText, dict.lens.less));
    ul.append(liT);
  }
  return ul;
}

function renderPosition(p, posBulletTags, lens, dict) {
  const pos = el("div", "position");
  const ph = el("div", "position-head");
  ph.append(el("h4", "position-title", p.title));
  const meta = p.mode ? p.date + " · " + p.mode : p.date;
  ph.append(el("span", "entry-date", meta));
  pos.append(ph);
  if (p.bullets) pos.append(bulletListLens(p.bullets, posBulletTags, lens, dict));
  return pos;
}

function renderEntry(item, bulletTags, lens, dict) {
  const entry = el("article", "entry");

  const head = el("div", "entry-head");
  const title = el("h3", "entry-title");
  if (item.orgHref) {
    const a = el("a", null, item.org + " ↗");
    a.href = item.orgHref;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    title.append(a);
  } else {
    // No link: still render the org name in the accent color so it matches the
    // linked entries (which are accent via `.section a`).
    title.append(el("span", "entry-org-name", item.org));
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

  // Optional always-collapsible detail (e.g. a certificate's specifics), shown
  // behind an expand link regardless of lens. Reuses the lens-extra/show-extra
  // CSS so print restores it like any other collapsed content.
  if (item.details && item.details.length) {
    const ul = el("ul", "entry-details");
    item.details.forEach((d) => ul.append(el("li", "lens-extra", d)));
    const liT = el("li", "lens-toggle-li");
    liT.append(
      lensToggle(ul, "show-extra", item.detailsLabel || dict.lens.more.replace("{n}", item.details.length), dict.lens.less)
    );
    ul.append(liT);
    entry.append(ul);
  }

  // Earlier-tier entries (junior-enterprise work) lead with a one-line outcome
  // summary; their full roles tuck behind the same whole-company collapse used
  // for off-lens entries, so the screen stays tight but @media print restores
  // the complete detail. The compact line itself is hidden in print (the full
  // roles carry the detail there). See `tier`/`compact` in the experience data.
  //
  // Exception: under the Leadership lens this junior-enterprise work IS the
  // early-leadership story, so it expands to full depth (its bullets are all
  // lead-tagged and surface normally) rather than collapsing to one line.
  const showCompact = item.compact && lens !== "lead";
  if (showCompact) entry.append(el("p", "entry-compact", item.compact));

  if (item.positions) {
    const lensed = lens !== "all" && bulletTags;
    // When a lens is active and every role in this company is fully off-lens,
    // collapse the whole company under one "Show these roles (N)" expander
    // rather than repeating a per-role expander on each.
    const entryHasFocus =
      !lensed ||
      item.positions.some((p, j) =>
        (p.bullets || []).some((b, k) => matchLens(bulletTags[j][k], lens))
      );

    // Compacted earlier-tier entries collapse to the compact line + one expander;
    // otherwise collapse only when the company is wholly off-lens.
    if (showCompact || (lensed && !entryHasFocus)) {
      // "Show this role" reads better for a one-role company; plural otherwise.
      const rolesLabel = item.positions.length === 1 ? dict.lens.showRole : dict.lens.showRoles;
      entry.append(
        lensToggle(
          entry,
          "show-roles",
          rolesLabel.replace("{n}", item.positions.length),
          dict.lens.less
        )
      );
      const group = el("div", "lens-roles");
      item.positions.forEach((p) => group.append(renderPosition(p, null, "all", dict)));
      entry.append(group);
    } else {
      item.positions.forEach((p, j) =>
        entry.append(renderPosition(p, bulletTags ? bulletTags[j] : null, lens, dict))
      );
    }
  }
  return entry;
}

function render() {
  const lang = currentLang;
  const lens = currentLens;
  const dict = RESUME[lang] || RESUME.pt;
  document.documentElement.lang = dict.htmlLang;
  document.title = dict.docTitle;

  document.getElementById("r-name").textContent = RESUME.name;
  document.getElementById("r-role").textContent =
    lens !== "all" && dict.roles && dict.roles[lens] ? dict.roles[lens] : dict.role;
  document.getElementById("r-back").textContent = dict.back;
  const printBtn = document.getElementById("r-print");
  if (printBtn) printBtn.textContent = dict.download;

  // Contact line
  const contact = document.getElementById("r-contact");
  contact.innerHTML = "";
  contact.append(el("span", null, dict.location));
  const mail = el("a");
  mail.href = "mailto:" + RESUME.email;
  mail.textContent = RESUME.email;
  contact.append(mail);
  const li = el("a");
  li.href = RESUME.linkedin;
  li.target = "_blank";
  li.rel = "noopener noreferrer";
  li.textContent = "LinkedIn ↗";
  contact.append(li);

  // Summary (lens-specific positioning sentence when a lens is active)
  document.getElementById("r-summary-title").textContent = dict.summaryTitle;
  document.getElementById("r-summary").textContent =
    lens !== "all" && dict.summaries && dict.summaries[lens] ? dict.summaries[lens] : dict.summary;

  // Experience: each role reorganizes around the lens; off-lens bullets (and
  // wholly off-lens roles) collapse behind an expander instead of greying out.
  document.getElementById("r-exp-title").textContent = dict.experienceTitle;
  const exp = document.getElementById("r-experience");
  exp.innerHTML = "";
  let earlierHeadingDone = false;
  dict.experience.forEach((item, i) => {
    // A quiet "Earlier experience" divider introduces the compacted tier so the
    // junior-enterprise work reads as context, not as a peer of the primary roles.
    if (item.tier === "earlier" && !earlierHeadingDone) {
      exp.append(el("h3", "exp-tier-title", dict.earlierExperienceTitle));
      earlierHeadingDone = true;
    }
    exp.append(renderEntry(item, LENS_TAGS.bullets[i], lens, dict));
  });

  // Education (short; shown in full, no lens treatment)
  document.getElementById("r-edu-title").textContent = dict.educationTitle;
  const edu = document.getElementById("r-education");
  edu.innerHTML = "";
  dict.education.forEach((item) => edu.append(renderEntry(item, null, lens, dict)));

  // Skills: in-focus groups first; off-lens groups tuck behind an expander.
  document.getElementById("r-skills-title").textContent = dict.skillsTitle;
  const skills = document.getElementById("r-skills");
  skills.innerHTML = "";
  // Each group is a card of tag chips plus one detail line. Hovering or focusing
  // a chip previews its detail (evidence pulled from the rest of the resume);
  // clicking pins it so it stays while the pointer moves away. Clicking the
  // pinned chip again, or anywhere off the chips (see the outside-click handler
  // below the function), unpins. Only one chip is pinned at a time across all
  // groups. Pin state lives in the DOM (`.tag.pinned`) so the outside-click
  // handler can clear it without reaching into closures. Tags with no `detail`
  // stay plain, non-interactive chips.
  const renderSkill = (group, extra) => {
    const g = el("div", "skill-group" + (extra ? " lens-extra" : ""));
    g.append(el("h3", null, group.title));
    const tags = el("div", "tags");
    const detail = el("p", "skill-detail");
    detail.hidden = true;
    detail.setAttribute("aria-live", "polite");

    group.tags.forEach((t) => {
      const label = typeof t === "string" ? t : t.label;
      const text = typeof t === "string" ? null : t.detail;
      if (!text) {
        tags.append(el("span", "tag", label));
        return;
      }
      const btn = el("button", "tag tag-interactive", label);
      btn.type = "button";
      btn.setAttribute("data-detail", text);
      btn.setAttribute("aria-label", label + ": " + text);
      const preview = () => {
        detail.textContent = text;
        detail.hidden = false;
        tags.querySelectorAll(".tag").forEach((b) => b.classList.toggle("active", b === btn));
      };
      btn.addEventListener("mouseenter", preview);
      btn.addEventListener("focus", preview);
      btn.addEventListener("mouseleave", () => restoreSkillGroup(g));
      btn.addEventListener("blur", () => restoreSkillGroup(g));
      btn.addEventListener("click", () => {
        const wasPinned = btn.classList.contains("pinned");
        // Single selection: drop every pin, reset every group, then re-show here.
        document.querySelectorAll("#r-skills .tag.pinned").forEach((b) => b.classList.remove("pinned"));
        document.querySelectorAll("#r-skills .skill-group").forEach(restoreSkillGroup);
        if (!wasPinned) btn.classList.add("pinned");
        preview(); // pointer is still on the chip, so keep its detail visible
      });
      tags.append(btn);
    });

    g.append(tags);
    g.append(detail);
    skills.append(g);
  };
  const skillParts = partitionByLens(dict.skills, LENS_TAGS.skills, lens);
  skillParts.focus.forEach((g) => renderSkill(g, false));
  skillParts.extra.forEach((g) => renderSkill(g, true));
  if (skillParts.extra.length) {
    const row = el("div", "lens-toggle-row");
    row.append(
      lensToggle(skills, "show-extra", dict.lens.more.replace("{n}", skillParts.extra.length), dict.lens.less)
    );
    skills.append(row);
  }

  // Highlights, bucketed into labelled groups (patents / authorship / community).
  // Within each group the lens floats in-focus items first; off-lens items tuck
  // behind a per-group expander (a wholly off-lens group collapses to its heading
  // plus one "show these" expander, mirroring the wholly off-lens role behavior).
  document.getElementById("r-highlights-title").textContent = dict.highlightsTitle;
  const hl = document.getElementById("r-highlights");
  hl.innerHTML = "";
  // Each highlight renders as a showcase card: a (linked) title, an optional
  // small meta line (patent number/status, medium), and an optional one-line
  // description. Deeper detail is left to the linked source.
  const makeHighlight = (item, extra) => {
    const liEl = el("li", "highlight-card" + (extra ? " lens-extra" : ""));
    if (item.href) {
      const a = el("a", "highlight-label", item.label + " ↗");
      a.href = item.href;
      // Internal links (e.g. Entrelinhas) stay in-tab; external proof opens new.
      if (/^https?:/.test(item.href)) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      liEl.append(a);
    } else {
      liEl.append(el("strong", "highlight-label", item.label));
    }
    if (item.meta) liEl.append(el("span", "highlight-meta", item.meta));
    if (item.text) liEl.append(el("p", "highlight-text", item.text));
    return liEl;
  };
  (dict.highlightGroups || [{ key: null, title: null }]).forEach((grp) => {
    const items = [];
    const tags = [];
    dict.highlights.forEach((it, i) => {
      if (grp.key == null || it.group === grp.key) {
        items.push(it);
        tags.push(LENS_TAGS.highlights[i]);
      }
    });
    if (!items.length) return;
    const parts = partitionByLens(items, tags, lens);
    const block = el("div", "highlight-group");
    if (grp.title) block.append(el("h3", "highlight-group-title", grp.title));
    const ul = el("ul", "highlights-list");
    parts.focus.forEach((it) => ul.append(makeHighlight(it, false)));
    parts.extra.forEach((it) => ul.append(makeHighlight(it, true)));
    if (parts.extra.length) {
      const liT = el("li", "lens-toggle-li");
      const tmpl = parts.focus.length ? dict.lens.more : dict.lens.showGroup;
      liT.append(lensToggle(ul, "show-extra", tmpl.replace("{n}", parts.extra.length), dict.lens.less));
      ul.append(liT);
    }
    block.append(ul);
    hl.append(block);
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

  // Beyond work: small, lens-free list of personal projects (book, game). Each
  // item is a linked label plus a short note. Internal links (Entrelinhas) stay
  // in-tab; external ones open in a new tab, mirroring the highlight cards.
  document.getElementById("r-beyond-title").textContent = dict.beyondTitle;
  const beyond = document.getElementById("r-beyond");
  beyond.innerHTML = "";
  dict.beyond.forEach((it) => {
    const liEl = el("li", "beyond-item");
    if (it.href) {
      const a = el("a", "beyond-label", it.label + " ↗");
      a.href = it.href;
      if (/^https?:/.test(it.href)) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      liEl.append(a);
    } else {
      liEl.append(el("strong", "beyond-label", it.label));
    }
    if (it.text) liEl.append(el("p", "beyond-text", it.text));
    beyond.append(liEl);
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  renderLensBar(dict);
  renderThemeBtn(dict);

  try {
    localStorage.setItem("resumeLang", lang);
  } catch (e) {}
}

// Theme toggle. The theme itself is applied to <html data-theme> before paint by
// an inline script in each page; here we sync the button's icon and label to the
// current theme (and the current language) and persist any click.
let currentTheme =
  document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";

function renderThemeBtn(dict) {
  const btn = document.getElementById("r-theme");
  if (!btn) return;
  const dark = currentTheme === "dark";
  const ico = btn.querySelector(".theme-ico");
  if (ico) ico.textContent = dark ? "☀" : "☾"; // shows the destination state
  const label = dark ? dict.theme.light : dict.theme.dark; // action: switch to…
  btn.setAttribute("aria-label", label);
  btn.setAttribute("title", label);
}

// Persistent lens switcher under the hero, so a visitor can re-focus the
// page (or undo the modal choice) at any time.
function renderLensBar(dict) {
  let bar = document.getElementById("r-lens-bar");
  if (!bar) {
    bar = el("div", "lens-bar");
    bar.id = "r-lens-bar";
    bar.setAttribute("role", "group");
    const contact = document.getElementById("r-contact");
    contact.parentNode.insertBefore(bar, contact.nextSibling);
  }
  bar.innerHTML = "";
  bar.setAttribute("aria-label", dict.lens.viewing);
  bar.append(el("span", "lens-label", dict.lens.viewing));
  ["ai", "cpp", "lead", "all"].forEach((key) => {
    const b = el("button", "lens-pill", dict.lens.names[key]);
    b.type = "button";
    const active = currentLens === key;
    b.classList.toggle("active", active);
    b.setAttribute("aria-pressed", String(active));
    b.addEventListener("click", () => setLens(key));
    bar.append(b);
  });
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    render();
  });
});

// Download PDF: hand off to the browser's print-to-PDF. The @media print rules
// in resume.css reveal all lens-collapsed content and strip the UI chrome, so
// the printed/saved file is always the complete, clean resume.
const printBtn = document.getElementById("r-print");
if (printBtn) printBtn.addEventListener("click", () => window.print());

const themeBtn = document.getElementById("r-theme");
if (themeBtn)
  themeBtn.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);
    try {
      localStorage.setItem("resumeTheme", currentTheme);
    } catch (e) {}
    renderThemeBtn(RESUME[currentLang] || RESUME.pt);
  });

// Default language: route sets window.RESUME_DEFAULT_LANG; user toggle is not
// persisted across the two routes, so the route default always wins on load.
currentLang = window.RESUME_DEFAULT_LANG || "en";

// Lens precedence on load: a URL ?lens= param wins (a per-application link lands
// pre-aimed), then a remembered choice, then the full resume (the "all" default).
// The lens pill bar stays available as optional refinement in every case.
const urlLens = getLensFromURL();
const storedLens = getLens();
if (urlLens) currentLens = urlLens;
else if (storedLens) currentLens = storedLens;
render();

document.getElementById("year").textContent = new Date().getFullYear();

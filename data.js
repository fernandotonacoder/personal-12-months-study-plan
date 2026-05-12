// ── Approach + platforms (caixa no topo) ────────────────────────────────────
const approach = {
  intro: "não-oficial primeiro → oficial como consolidação.",
  platforms: [
    { name: "Pluralsight",
      note: "licença empresa, 1ª passagem"
    },
    {
      name: "Dometrain",
      note: "cursos pagos com desconto + grátis, 1ª/2ª passagem e certificados · Messaging e .NET",
    },
    {
      name: "Microsoft Learn",
      note: "gratuito, 2ª passagem e exame oficial AZ-204",
    },
    { name: "certificates.dev", note: "2ª passagem e exames oficiais Vue" },
    {
      name: '("Lúdico") 48-day .NET Syllabus',
      note: "Claude chat diário · .NET/C#, design patterns · teoria, 2 perguntas, 1 desafio de código · funciona no telemóvel",
    },
    {
      name: '("Lúdico") HackerRank',
      note: "Sem estrutura nem pressa · como quem brinca ao sudoku... Depois de acabar o 48-day .NET Syllabus",
    },
  ],
};

// ── Categorias (drive a legend e as pills) ──────────────────────────────────
// cls deve corresponder a uma classe CSS com a cor da categoria.
const categories = [
  { cls: "az", label: "AZ-204 / Azure" },
  { cls: "net", label: ".NET / C#" },
  { cls: "msg", label: "Messaging" },
  { cls: "vue", label: "Vue.js" },
  { cls: "docker", label: "Docker" },
];

// ── Plano mensal ────────────────────────────────────────────────────────────
// Cada entry é um separator { type: 'sep', label } ou um mês:
//   month, pills [{ cls, label }], resources [{ text, platform? }],
//   official [{ state: 'pending'|'done'|'none', text, sub? }],
//   notes string[] (cada item = uma linha, separadas por <br>),
//   milestone string (opcional, badge na coluna de notas).
const plan = [
  // ─── Q2 2026 — AZ-204 ────────────────────────────────────────────────────
  { type: "sep", label: "Q2 2026 — AZ-204" },
  {
    month: "Mai 2026",
    pills: [
      { cls: "az", label: "AZ-204 sprint final" },
      { cls: "vue", label: "Vue arranque" },
      { cls: "msg", label: "Messaging arranque" },
    ],
    resources: [
      { text: "Pluralsight AZ-204 Path", platform: "conclusão" },
      {
        text: "Microsoft Learn AZ-204 Path",
        platform: "início · 2ª passagem oficial",
      },
      { text: "Pluralsight Vue Path", platform: "início leve" },
      { text: "Pluralsight Messaging", platform: "arranque leve" },
      { text: "48-day .NET Syllabus", platform: "início, no telemóvel" },
    ],
    official: [{ state: "pending", text: "🎯 Exame AZ-204 — 21 Jun" }],
    notes: ["AZ-204 é prioridade absoluta.", "Vue e Messaging só 1–2h/semana."],
    milestone: "⚡ Exame 21 Jun",
  },
  {
    month: "Jun 2026",
    pills: [
      { cls: "az", label: "AZ-204 exame" },
      { cls: "vue", label: "Vue leve" },
      { cls: "msg", label: "Messaging leve" },
    ],
    resources: [
      {
        text: "Microsoft Learn AZ-204 Path",
        platform: "conclusão · antes do exame 21 Jun",
      },
      { text: "48-day .NET Syllabus", platform: "continua, no telemóvel" },
      { text: "Pluralsight Vue Path", platform: "leve" },
      { text: "Pluralsight Messaging", platform: "leve" },
    ],
    official: [
      { state: "done", text: "✓ AZ-204", sub: "Microsoft — esperado" },
    ],
    notes: [
      "Pós-exame: respirar e manter ritmo.",
      "48-day Syllabus no telemóvel como rotina.",
    ],
    milestone: "🏆 AZ-204 done",
  },

  // ─── Q3 2026 — Messaging certificação ────────────────────────────────────
  { type: "sep", label: "Q3 2026 — Messaging certificação" },
  {
    month: "Jul 2026",
    pills: [
      { cls: "msg", label: "Messaging (foco)" },
      { cls: "net", label: ".NET arranque" },
      { cls: "vue", label: "Vue.js" },
    ],
    resources: [
      { text: "Pluralsight Messaging / Azure Service Bus" },
      { text: "NServiceBus docs + samples", platform: "arranque" },
      {
        text: "48-day .NET Syllabus + Pluralsight .NET Path",
        platform: "início",
      },
      { text: "Pluralsight Vue Path" },
    ],
    official: [{ state: "none", text: "— sem exame este mês" }],
    notes: [
      "Messaging é o foco do trimestre:",
      "pub/sub, queues, conceitos EDA.",
      ".NET e Vue mantêm-se em paralelo.",
    ],
  },
  {
    month: "Ago 2026",
    pills: [
      { cls: "msg", label: "Messaging aprofundar" },
      { cls: "net", label: ".NET" },
      { cls: "vue", label: "Vue.js" },
    ],
    resources: [
      { text: "NServiceBus sagas, handlers, transports" },
      { text: "Dometrain Messaging/EDA", platform: "2ª passagem" },
      { text: "48-day .NET Syllabus" },
      { text: "Pluralsight Vue Path" },
    ],
    official: [
      {
        state: "pending",
        text: "🎯 Dometrain — Messaging / EDA",
        sub: "sprint de consolidação para cert em Set",
      },
    ],
    notes: [
      "NServiceBus: sagas, outbox, idempotência.",
      "Ligar ao contexto real da empresa.",
      "Vue: Composition API, componentes.",
    ],
  },
  {
    month: "Set 2026",
    pills: [
      { cls: "msg", label: "Messaging cert" },
      { cls: "net", label: ".NET" },
      { cls: "vue", label: "Vue.js" },
      { cls: "docker", label: "Docker início" },
    ],
    resources: [
      { text: "Dometrain Messaging/EDA", platform: "revisão final" },
      { text: "Pluralsight .NET Path" },
      { text: "Pluralsight Docker for Software Dev", platform: "início leve" },
    ],
    official: [
      {
        state: "done",
        text: "✓ Dometrain Messaging/EDA",
        sub: "certificado — esperado",
      },
    ],
    notes: [
      "Depois do cert: introduzir Docker leve.",
      "Docker: Dockerfiles, imagens, compose.",
    ],
    milestone: "🏆 Messaging done",
  },

  // ─── Q4 2026 — .NET/C# certificação ──────────────────────────────────────
  { type: "sep", label: "Q4 2026 — .NET/C# certificação" },
  {
    month: "Out 2026",
    pills: [
      { cls: "net", label: ".NET aprofundar" },
      { cls: "vue", label: "Vue crescendo" },
      { cls: "docker", label: "Docker" },
    ],
    resources: [
      { text: "48-day .NET Syllabus", platform: "Phase 3" },
      { text: "Pluralsight .NET Path" },
      { text: "Pluralsight Vue Path", platform: "conclusão" },
      { text: "Pluralsight Docker for Software Dev" },
    ],
    official: [{ state: "none", text: "— sem exame / preparação .NET" }],
    notes: [
      ".NET: Clean Architecture, CQRS,",
      "design patterns, tópicos avançados.",
      "Vue a crescer para cert em Q1 2027.",
    ],
  },
  {
    month: "Nov 2026",
    pills: [
      { cls: "net", label: ".NET cert prep" },
      { cls: "vue", label: "Vue avançado" },
      { cls: "docker", label: "Docker" },
    ],
    resources: [
      { text: "Dometrain .NET/C# geral", platform: "2ª passagem" },
      { text: "Pluralsight Vue Path", platform: "avançado" },
      { text: "Pluralsight Docker for Software Dev" },
    ],
    official: [
      {
        state: "pending",
        text: "🎯 Dometrain — .NET/C# geral",
        sub: "sprint de consolidação para cert em Dez",
      },
    ],
    notes: [
      "Sprint .NET focado no certificado.",
      "Vue: Pinia, Vue Router, composables.",
      "Docker: aprendizagem contínua.",
    ],
  },
  {
    month: "Dez 2026",
    pills: [
      { cls: "net", label: ".NET cert" },
      { cls: "vue", label: "Vue consolidação" },
      { cls: "docker", label: "Docker" },
    ],
    resources: [
      { text: "48-day .NET Syllabus", platform: "conclusão" },
      { text: "Revisão geral .NET + balanço do semestre" },
      { text: "Pluralsight Vue Path" },
    ],
    official: [
      {
        state: "done",
        text: "✓ Dometrain .NET/C# geral",
        sub: "certificado — esperado",
      },
    ],
    notes: [
      "Fechar o syllabus .NET de 48 dias.",
      "Balanço do semestre — ajustar plano Q1.",
    ],
    milestone: "🏆 .NET/C# done",
  },

  // ─── Q1 2027 — Vue certificação ───────────────────────────────────────────
  { type: "sep", label: "Q1 2027 — Vue certificação" },
  {
    month: "Jan 2027",
    pills: [
      { cls: "vue", label: "Vue cert prep" },
      { cls: "net", label: ".NET manutenção" },
      { cls: "docker", label: "Docker" },
    ],
    resources: [
      { text: "certificates.dev study guide + exercícios" },
      { text: "Pluralsight Docker for Software Dev" },
    ],
    official: [{ state: "none", text: "— sem exame este mês" }],
    notes: ["Sprint preparação Vue.", "Docker aprendizagem contínua."],
  },
  {
    month: "Fev 2027",
    pills: [
      { cls: "vue", label: "Vue cert sprint" },
      { cls: "net", label: ".NET manutenção" },
      { cls: "docker", label: "Docker" },
    ],
    resources: [
      { text: "certificates.dev exercícios práticos" },
      { text: "Projetos Vue pessoais" },
      { text: "Pluralsight Docker for Software Dev" },
    ],
    official: [
      {
        state: "pending",
        text: "🎯 Vue.js Mid-Level — certificates.dev",
        sub: "coding challenges práticos, exame oficial",
      },
    ],
    notes: [
      "Foco em prática, não só teoria.",
      "Sprint final para o certificado Vue.",
    ],
    milestone: "🎯 Vue exam Fev/Mar",
  },
  {
    month: "Mar–Abr 2027",
    pills: [
      { cls: "vue", label: "Vue exame" },
      { cls: "docker", label: "Docker aprofundar" },
      { cls: "net", label: ".NET manutenção" },
    ],
    resources: [
      { text: "Pluralsight Docker for Software Dev", platform: "aprofundar" },
    ],
    official: [
      {
        state: "done",
        text: "✓ Vue.js Mid-Level",
        sub: "certificates.dev — esperado",
      },
    ],
    notes: [
      "Docker mais a fundo após certs concluídos.",
      "Manter ritmo sem pressão de exame.",
      "Avaliar plano para os próximos 12 meses.",
    ],
    milestone: "🏆 Vue done · 12 meses ✓",
  },
];

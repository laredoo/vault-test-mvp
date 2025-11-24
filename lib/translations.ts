export const translations = {
  en: {
    // Header
    backToTests: "Back to Tests",
    saveForLater: "Save for Later",
    viewInMyTests: "View in My Tests",
    acceptTest: "Accept Test",
    accepting: "Accepting...",

    // Test Status
    verifiedTest: "Verified Test",
    accepted: "Accepted",

    // Quick Stats
    reward: "Reward",
    estimated: "Estimated",
    deadline: "Deadline",
    testers: "Testers",

    // Sections
    testDescription: "Test Description",
    requirements: "Requirements",
    deliverables: "Deliverables",
    relatedSkillsTags: "Related Skills & Tags",

    // Profile Compatibility
    profileCompatibility: "Profile Compatibility",
    matchScore: "Match Score",
    matchedSkills: "Matched Skills",
    skillsToDevelop: "Skills to Develop",

    // Trust & Reliability
    trustReliability: "Trust & Reliability",
    reliabilityScore: "Reliability Score",
    successRate: "Success Rate",
    avgCompletion: "Avg. Completion",

    // Compliance
    complianceStandards: "Compliance Standards",
    complianceDescription: "This test adheres to the following industry standards:",
    certifiedCompliant: "Certified Compliant",

    // Company
    aboutCompany: "About Company",
    verifiedPartner: "Verified Partner",
    companyDescription:
      "This company has been verified by our team and maintains a strong track record of successful collaborations with testers on our platform.",

    // CTA
    testAccepted: "Test Accepted",
    testAcceptedDescription: "You've already accepted this test. View it in your dashboard.",
    readyToStart: "Ready to Start?",
    readyToStartDescription: "Accept this test to begin working on this opportunity",
    goToMyTests: "Go to My Tests",

    // Not Found
    testNotFound: "Test Not Found",
    testNotFoundDescription: "The requested test opportunity does not exist.",
    backToDashboard: "Back to Dashboard",

    // Language
    language: "Language",
    english: "English",
    portuguese: "Portuguese",
  },
  "pt-BR": {
    // Header
    backToTests: "Voltar aos Testes",
    saveForLater: "Salvar para Depois",
    viewInMyTests: "Ver em Meus Testes",
    acceptTest: "Aceitar Teste",
    accepting: "Aceitando...",

    // Test Status
    verifiedTest: "Teste Verificado",
    accepted: "Aceito",

    // Quick Stats
    reward: "Recompensa",
    estimated: "Estimado",
    deadline: "Prazo",
    testers: "Testadores",

    // Sections
    testDescription: "Descrição do Teste",
    requirements: "Requisitos",
    deliverables: "Entregáveis",
    relatedSkillsTags: "Habilidades e Tags Relacionadas",

    // Profile Compatibility
    profileCompatibility: "Compatibilidade do Perfil",
    matchScore: "Pontuação de Compatibilidade",
    matchedSkills: "Habilidades Correspondentes",
    skillsToDevelop: "Habilidades a Desenvolver",

    // Trust & Reliability
    trustReliability: "Confiança e Confiabilidade",
    reliabilityScore: "Pontuação de Confiabilidade",
    successRate: "Taxa de Sucesso",
    avgCompletion: "Conclusão Média",

    // Compliance
    complianceStandards: "Padrões de Conformidade",
    complianceDescription: "Este teste segue os seguintes padrões da indústria:",
    certifiedCompliant: "Certificado de Conformidade",

    // Company
    aboutCompany: "Sobre a Empresa",
    verifiedPartner: "Parceiro Verificado",
    companyDescription:
      "Esta empresa foi verificada pela nossa equipe e mantém um forte histórico de colaborações bem-sucedidas com testadores em nossa plataforma.",

    // CTA
    testAccepted: "Teste Aceito",
    testAcceptedDescription: "Você já aceitou este teste. Veja-o no seu painel.",
    readyToStart: "Pronto para Começar?",
    readyToStartDescription: "Aceite este teste para começar a trabalhar nesta oportunidade",
    goToMyTests: "Ir para Meus Testes",

    // Not Found
    testNotFound: "Teste Não Encontrado",
    testNotFoundDescription: "A oportunidade de teste solicitada não existe.",
    backToDashboard: "Voltar ao Painel",

    // Language
    language: "Idioma",
    english: "Inglês",
    portuguese: "Português",
  },
}

export type TranslationKey = keyof typeof translations.en

export function useTranslation(language: "en" | "pt-BR") {
  return translations[language]
}

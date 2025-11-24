export interface TestOpportunity {
  id: string
  title: string
  company: string
  companyLogo: string
  companyVerified: boolean
  description: string
  fullDescription: string
  reward: number
  deadline: string
  type: string
  difficulty: string
  estimatedHours: number
  tags: string[]
  requirements: string[]
  deliverables: string[]
  compatibility: number
  matchedSkills: string[]
  missingSkills: string[]
  reliabilityScore: number
  complianceBadges: string[]
  testedBy: number
  successRate: number
  avgCompletionTime: number
  status: string
  postedDate: string
}

export const testOpportunities: TestOpportunity[] = [
  {
    id: "1",
    title: "E-commerce Platform Security Audit",
    company: "ShopMax Inc.",
    companyLogo: "/shopmax-logo.jpg",
    companyVerified: true,
    description:
      "Conduct comprehensive security testing on a large-scale e-commerce platform including payment processing, user authentication, and data handling.",
    fullDescription: `We are seeking an experienced security tester to perform a thorough security audit of our e-commerce platform. The platform handles sensitive customer data including payment information, personal details, and transaction history.

The audit should cover:
- Authentication and authorization mechanisms
- Payment gateway integration security
- Data encryption and storage practices
- API endpoint vulnerabilities
- Session management and cookie security
- Cross-site scripting (XSS) and SQL injection testing
- Rate limiting and DDoS protection assessment`,
    reward: 850,
    deadline: "2025-02-15",
    type: "Security Testing",
    difficulty: "Advanced",
    estimatedHours: 20,
    tags: ["Web App", "Payment Systems", "Authentication", "OWASP", "PCI-DSS"],
    requirements: [
      "5+ years of security testing experience",
      "OWASP Top 10 expertise",
      "Experience with payment system security",
      "Familiarity with PCI-DSS compliance",
      "Strong report writing skills",
    ],
    deliverables: [
      "Comprehensive security assessment report",
      "Vulnerability severity classification",
      "Remediation recommendations",
      "Executive summary for stakeholders",
      "Re-test verification (if needed)",
    ],
    compatibility: 92,
    matchedSkills: ["Security Testing", "Web Applications", "API Testing", "OWASP"],
    missingSkills: ["PCI-DSS Certification"],
    reliabilityScore: 98,
    complianceBadges: ["ISO 27001", "SOC 2", "GDPR"],
    testedBy: 45,
    successRate: 94,
    avgCompletionTime: 18,
    status: "verified",
    postedDate: "2025-01-20",
  },
  {
    id: "2",
    title: "Mobile Banking App Functional Testing",
    company: "FinanceFirst",
    companyLogo: "/fintech-bank-logo.jpg",
    companyVerified: true,
    description:
      "Perform end-to-end functional testing on iOS and Android banking application. Focus on transaction flows and account management features.",
    fullDescription: `FinanceFirst is looking for a skilled functional tester to validate our mobile banking application across both iOS and Android platforms. The app serves over 2 million users and handles critical financial operations.

Testing scope includes:
- User registration and onboarding flows
- Account management (viewing balances, statements)
- Fund transfers (internal and external)
- Bill payments and scheduled transactions
- Biometric authentication
- Push notifications and alerts
- Offline mode functionality`,
    reward: 600,
    deadline: "2025-02-10",
    type: "Functional Testing",
    difficulty: "Intermediate",
    estimatedHours: 15,
    tags: ["Mobile", "iOS", "Android", "Finance", "Banking"],
    requirements: [
      "3+ years mobile testing experience",
      "iOS and Android testing expertise",
      "Understanding of financial workflows",
      "Experience with mobile testing tools",
    ],
    deliverables: [
      "Test case documentation",
      "Bug reports with severity levels",
      "Device compatibility matrix",
      "Final test summary report",
    ],
    compatibility: 78,
    matchedSkills: ["Mobile Testing", "Functional Testing", "iOS"],
    missingSkills: ["Android Testing", "Banking Domain"],
    reliabilityScore: 95,
    complianceBadges: ["PCI-DSS", "SOC 2"],
    testedBy: 32,
    successRate: 91,
    avgCompletionTime: 14,
    status: "verified",
    postedDate: "2025-01-22",
  },
  {
    id: "3",
    title: "Healthcare Portal Accessibility Testing",
    company: "MedCare Systems",
    companyLogo: "/healthcare-medical-logo.jpg",
    companyVerified: true,
    description:
      "Evaluate WCAG 2.1 compliance and overall accessibility of patient portal. Test screen reader compatibility and keyboard navigation.",
    fullDescription: `MedCare Systems requires a thorough accessibility audit of our patient portal to ensure compliance with WCAG 2.1 guidelines and ADA requirements. The portal serves patients with various disabilities.

Testing scope includes:
- Screen reader compatibility (NVDA, JAWS, VoiceOver)
- Keyboard-only navigation testing
- Color contrast and visual accessibility
- Form accessibility and error handling
- Alternative text for images
- Focus management and tab order
- Mobile accessibility testing`,
    reward: 450,
    deadline: "2025-02-20",
    type: "Accessibility Testing",
    difficulty: "Intermediate",
    estimatedHours: 12,
    tags: ["Healthcare", "WCAG", "Accessibility", "ADA", "Screen Readers"],
    requirements: [
      "2+ years accessibility testing experience",
      "WCAG 2.1 expertise",
      "Experience with screen readers",
      "Understanding of ADA requirements",
    ],
    deliverables: [
      "WCAG compliance report",
      "Accessibility audit findings",
      "Remediation priority list",
      "Testing methodology documentation",
    ],
    compatibility: 85,
    matchedSkills: ["Accessibility Testing", "WCAG", "Web Applications"],
    missingSkills: ["Healthcare Domain"],
    reliabilityScore: 96,
    complianceBadges: ["HIPAA", "ISO 27001"],
    testedBy: 28,
    successRate: 89,
    avgCompletionTime: 11,
    status: "verified",
    postedDate: "2025-01-25",
  },
  {
    id: "4",
    title: "SaaS Dashboard Performance Testing",
    company: "CloudMetrics",
    companyLogo: "/cloud-saas-analytics-logo.jpg",
    companyVerified: true,
    description:
      "Load and stress testing for analytics dashboard. Identify bottlenecks and performance issues under high concurrent user loads.",
    fullDescription: `CloudMetrics needs performance testing for our analytics dashboard that handles millions of data points daily. We need to identify performance bottlenecks before our upcoming product launch.

Testing scope includes:
- Load testing with up to 10,000 concurrent users
- Stress testing to find breaking points
- Database query performance analysis
- API response time optimization
- Memory and CPU utilization monitoring
- Browser rendering performance
- CDN and caching efficiency testing`,
    reward: 700,
    deadline: "2025-02-08",
    type: "Performance Testing",
    difficulty: "Advanced",
    estimatedHours: 18,
    tags: ["SaaS", "Load Testing", "Analytics", "JMeter", "Performance"],
    requirements: [
      "4+ years performance testing experience",
      "JMeter or similar tool expertise",
      "Understanding of cloud infrastructure",
      "Database performance knowledge",
    ],
    deliverables: [
      "Performance test results report",
      "Bottleneck analysis document",
      "Optimization recommendations",
      "Load testing scripts",
    ],
    compatibility: 88,
    matchedSkills: ["Performance Testing", "Load Testing", "API Testing"],
    missingSkills: ["JMeter Certification"],
    reliabilityScore: 97,
    complianceBadges: ["SOC 2", "ISO 27001"],
    testedBy: 38,
    successRate: 92,
    avgCompletionTime: 16,
    status: "verified",
    postedDate: "2025-01-18",
  },
  {
    id: "5",
    title: "API Integration Testing Suite",
    company: "DataSync Corp",
    companyLogo: "/data-sync-api-logo.jpg",
    companyVerified: true,
    description:
      "Create and execute test cases for RESTful API endpoints. Validate data integrity, error handling, and rate limiting functionality.",
    fullDescription: `DataSync Corp is seeking an API testing specialist to validate our integration APIs that connect with over 50 enterprise systems. Thorough testing is critical for our B2B operations.

Testing scope includes:
- RESTful API endpoint validation
- Request/response payload verification
- Authentication and authorization testing
- Error handling and edge cases
- Rate limiting and throttling tests
- Data transformation accuracy
- Webhook reliability testing`,
    reward: 550,
    deadline: "2025-02-25",
    type: "API Testing",
    difficulty: "Intermediate",
    estimatedHours: 14,
    tags: ["API", "REST", "Integration", "Postman", "JSON"],
    requirements: [
      "3+ years API testing experience",
      "REST API expertise",
      "Postman or similar tool proficiency",
      "Understanding of OAuth/JWT",
    ],
    deliverables: [
      "API test case documentation",
      "Test automation scripts",
      "Integration test results",
      "Bug reports with API traces",
    ],
    compatibility: 94,
    matchedSkills: ["API Testing", "REST", "Postman", "JSON"],
    missingSkills: [],
    reliabilityScore: 95,
    complianceBadges: ["SOC 2", "GDPR"],
    testedBy: 42,
    successRate: 93,
    avgCompletionTime: 13,
    status: "verified",
    postedDate: "2025-01-23",
  },
  {
    id: "6",
    title: "Gaming Platform Regression Testing",
    company: "PlayZone Studios",
    companyLogo: "/gaming-studio-logo.jpg",
    companyVerified: true,
    description:
      "Execute regression test suite for multiplayer gaming platform after major update. Focus on matchmaking and in-game transactions.",
    fullDescription: `PlayZone Studios needs regression testing after a major platform update. The gaming platform has over 5 million active users and handles real-money transactions.

Testing scope includes:
- Player registration and profile management
- Matchmaking algorithm validation
- In-game purchase flows
- Multiplayer session stability
- Leaderboard and ranking systems
- Social features (friends, chat, guilds)
- Cross-platform functionality`,
    reward: 400,
    deadline: "2025-02-12",
    type: "Regression Testing",
    difficulty: "Beginner",
    estimatedHours: 10,
    tags: ["Gaming", "Multiplayer", "Transactions", "Regression"],
    requirements: [
      "1+ years testing experience",
      "Gaming industry familiarity",
      "Attention to detail",
      "Experience with test documentation",
    ],
    deliverables: [
      "Regression test execution report",
      "Bug reports with reproduction steps",
      "Test coverage summary",
      "Sign-off documentation",
    ],
    compatibility: 72,
    matchedSkills: ["Regression Testing", "Functional Testing"],
    missingSkills: ["Gaming Domain", "Multiplayer Systems"],
    reliabilityScore: 94,
    complianceBadges: ["PCI-DSS"],
    testedBy: 55,
    successRate: 88,
    avgCompletionTime: 9,
    status: "verified",
    postedDate: "2025-01-26",
  },
]

export function getTestById(id: string): TestOpportunity | undefined {
  return testOpportunities.find((test) => test.id === id)
}

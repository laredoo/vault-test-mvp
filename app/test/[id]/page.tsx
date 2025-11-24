"use client"
import { TestDetailClient } from "@/components/test-detail-client"

// Extended mock data
const testDetails: Record<string, TestDetail> = {
  "1": {
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
  "2": {
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
}

interface TestDetail {
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

const difficultyColors: Record<string, string> = {
  Beginner: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  Intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  Advanced: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
}

function getCompatibilityColor(score: number) {
  if (score >= 85) return "text-green-600 dark:text-green-400"
  if (score >= 70) return "text-yellow-600 dark:text-yellow-400"
  return "text-red-600 dark:text-red-400"
}

function getCompatibilityBg(score: number) {
  if (score >= 85) return "bg-green-500"
  if (score >= 70) return "bg-yellow-500"
  return "bg-red-500"
}

export default async function TestDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <TestDetailClient id={id} />
}

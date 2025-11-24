"use client"

import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Clock,
  DollarSign,
  Building2,
  Shield,
  ShieldCheck,
  BadgeCheck,
  CheckCircle2,
  AlertCircle,
  FileText,
  Target,
  Users,
  Award,
  Lock,
  CircleCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

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

export function TestDetailClient({ id }: { id: string }) {
  const test = testDetails[id]

  if (!test) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-foreground mb-2">Test Not Found</h1>
          <p className="text-muted-foreground mb-4">The requested test opportunity does not exist.</p>
          <Link href="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const daysUntilDeadline = Math.ceil((new Date(test.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
  const isUrgent = daysUntilDeadline <= 7

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Tests</span>
            </Link>
            <div className="flex items-center gap-3">
              <Button variant="outline">Save for Later</Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Accept Test</Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title Section */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap items-start gap-4 mb-4">
                  <Badge variant="secondary" className="text-sm">
                    {test.type}
                  </Badge>
                  <Badge className={cn("text-sm", difficultyColors[test.difficulty])}>{test.difficulty}</Badge>
                  {test.status === "verified" && (
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified Test
                    </Badge>
                  )}
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-balance">{test.title}</h1>

                <div className="flex items-center gap-3 mb-6">
                  <img
                    src={test.companyLogo || "/placeholder.svg"}
                    alt={test.company}
                    className="w-12 h-12 rounded-lg border border-border object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">{test.company}</span>
                      {test.companyVerified && <BadgeCheck className="w-5 h-5 text-primary" />}
                    </div>
                    <p className="text-sm text-muted-foreground">Verified Company Partner</p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-primary mb-1">
                      <DollarSign className="w-5 h-5" />
                      <span className="text-2xl font-bold">{test.reward}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Reward</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Clock className="w-5 h-5 text-muted-foreground" />
                      <span className="text-2xl font-bold text-foreground">{test.estimatedHours}h</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Estimated</p>
                  </div>
                  <div className="text-center">
                    <div
                      className={cn(
                        "flex items-center justify-center gap-1 mb-1",
                        isUrgent ? "text-red-600 dark:text-red-400" : "text-foreground",
                      )}
                    >
                      <Calendar className="w-5 h-5" />
                      <span className="text-2xl font-bold">{daysUntilDeadline}d</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Deadline</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Users className="w-5 h-5 text-muted-foreground" />
                      <span className="text-2xl font-bold text-foreground">{test.testedBy}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Testers</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Test Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{test.description}</p>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <p className="whitespace-pre-line text-foreground/80">{test.fullDescription}</p>
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {test.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-foreground/80">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Deliverables */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Deliverables
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {test.deliverables.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CircleCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Related Skills & Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {test.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Compatibility */}
            <Card className="border-2 border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Profile Compatibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <span className={cn("text-5xl font-bold", getCompatibilityColor(test.compatibility))}>
                    {test.compatibility}%
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">Match Score</p>
                </div>
                <Progress value={test.compatibility} className="h-2 mb-6" />

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Matched Skills
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {test.matchedSkills.map((skill) => (
                        <Badge
                          key={skill}
                          className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {test.missingSkills.length > 0 && (
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-yellow-500" />
                        Skills to Develop
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {test.missingSkills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs text-muted-foreground">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Reliability & Trust */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Shield className="w-5 h-5 text-primary" />
                  Trust & Reliability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="text-sm font-medium text-foreground">Reliability Score</span>
                  </div>
                  <span className="text-lg font-bold text-green-600 dark:text-green-400">{test.reliabilityScore}%</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">Success Rate</span>
                  </div>
                  <span className="text-lg font-bold text-foreground">{test.successRate}%</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">Avg. Completion</span>
                  </div>
                  <span className="text-lg font-bold text-foreground">{test.avgCompletionTime}h</span>
                </div>
              </CardContent>
            </Card>

            {/* Compliance Badges */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Lock className="w-5 h-5 text-primary" />
                  Compliance Standards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  This test adheres to the following industry standards:
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {test.complianceBadges.map((badge) => (
                    <div key={badge} className="flex items-center gap-3 p-3 border border-border rounded-lg bg-card">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{badge}</p>
                        <p className="text-xs text-muted-foreground">Certified Compliant</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Building2 className="w-5 h-5 text-primary" />
                  About Company
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={test.companyLogo || "/placeholder.svg"}
                    alt={test.company}
                    className="w-14 h-14 rounded-lg border border-border object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">{test.company}</span>
                      {test.companyVerified && <BadgeCheck className="w-5 h-5 text-primary" />}
                    </div>
                    <p className="text-sm text-muted-foreground">Verified Partner</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  This company has been verified by our team and maintains a strong track record of successful
                  collaborations with testers on our platform.
                </p>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Ready to Start?</h3>
                    <p className="text-sm text-muted-foreground">
                      Accept this test to begin working on this opportunity
                    </p>
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                    Accept Test
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    By accepting, you agree to complete this test by the deadline
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

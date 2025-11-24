"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
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
  Loader2,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { getTestById } from "@/lib/test-data"
import { useAcceptedTestsStore } from "@/lib/accepted-tests-store"
import { useLanguageStore } from "@/lib/language-store"
import { useTranslation } from "@/lib/translations"
import { LanguageToggle } from "@/components/language-toggle"

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

export function TestDetailClient({ id }: { id: string }) {
  const router = useRouter()
  const [isAccepting, setIsAccepting] = useState(false)
  const { acceptTest, isTestAccepted } = useAcceptedTestsStore()
  const { language } = useLanguageStore()
  const t = useTranslation(language)
  const test = getTestById(id)
  const alreadyAccepted = isTestAccepted(id)

  if (!test) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-foreground mb-2">{t.testNotFound}</h1>
          <p className="text-muted-foreground mb-4">{t.testNotFoundDescription}</p>
          <Link href="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.backToDashboard}
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const daysUntilDeadline = Math.ceil((new Date(test.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
  const isUrgent = daysUntilDeadline <= 7

  const handleAcceptTest = async () => {
    setIsAccepting(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    acceptTest(id)
    router.push("/?section=my-tests")
  }

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
              <span className="font-medium">{t.backToTests}</span>
            </Link>
            <div className="flex items-center gap-3">
              <LanguageToggle variant="compact" />
              <Button variant="outline" className="hidden sm:flex bg-transparent">
                {t.saveForLater}
              </Button>
              {alreadyAccepted ? (
                <Link href="/?section=my-tests">
                  <Button className="bg-green-600 text-white hover:bg-green-700">
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">{t.viewInMyTests}</span>
                    <span className="sm:hidden">{t.goToMyTests}</span>
                  </Button>
                </Link>
              ) : (
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={handleAcceptTest}
                  disabled={isAccepting}
                >
                  {isAccepting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {t.accepting}
                    </>
                  ) : (
                    t.acceptTest
                  )}
                </Button>
              )}
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
                      {t.verifiedTest}
                    </Badge>
                  )}
                  {alreadyAccepted && (
                    <Badge className="bg-primary/10 text-primary flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {t.accepted}
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
                    <p className="text-sm text-muted-foreground">{t.verifiedPartner}</p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-primary mb-1">
                      <DollarSign className="w-5 h-5" />
                      <span className="text-2xl font-bold">{test.reward}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{t.reward}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Clock className="w-5 h-5 text-muted-foreground" />
                      <span className="text-2xl font-bold text-foreground">{test.estimatedHours}h</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{t.estimated}</p>
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
                    <p className="text-xs text-muted-foreground">{t.deadline}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Users className="w-5 h-5 text-muted-foreground" />
                      <span className="text-2xl font-bold text-foreground">{test.testedBy}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{t.testers}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  {t.testDescription}
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
                  {t.requirements}
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
                  {t.deliverables}
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
                <CardTitle className="text-base">{t.relatedSkillsTags}</CardTitle>
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
                  {t.profileCompatibility}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <span className={cn("text-5xl font-bold", getCompatibilityColor(test.compatibility))}>
                    {test.compatibility}%
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">{t.matchScore}</p>
                </div>
                <Progress value={test.compatibility} className="h-2 mb-6" />

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      {t.matchedSkills}
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
                        {t.skillsToDevelop}
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
                  {t.trustReliability}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="text-sm font-medium text-foreground">{t.reliabilityScore}</span>
                  </div>
                  <span className="text-lg font-bold text-green-600 dark:text-green-400">{test.reliabilityScore}%</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">{t.successRate}</span>
                  </div>
                  <span className="text-lg font-bold text-foreground">{test.successRate}%</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">{t.avgCompletion}</span>
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
                  {t.complianceStandards}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{t.complianceDescription}</p>
                <div className="grid grid-cols-1 gap-3">
                  {test.complianceBadges.map((badge) => (
                    <div key={badge} className="flex items-center gap-3 p-3 border border-border rounded-lg bg-card">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{badge}</p>
                        <p className="text-xs text-muted-foreground">{t.certifiedCompliant}</p>
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
                  {t.aboutCompany}
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
                    <p className="text-sm text-muted-foreground">{t.verifiedPartner}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{t.companyDescription}</p>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  {alreadyAccepted ? (
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t.testAccepted}</h3>
                      <p className="text-sm text-muted-foreground">{t.testAcceptedDescription}</p>
                    </div>
                  ) : (
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t.readyToStart}</h3>
                      <p className="text-sm text-muted-foreground">{t.readyToStartDescription}</p>
                    </div>
                  )}
                  {alreadyAccepted ? (
                    <Link href="/?section=my-tests" className="block">
                      <Button className="w-full bg-green-600 text-white hover:bg-green-700" size="lg">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        {t.goToMyTests}
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      size="lg"
                      onClick={handleAcceptTest}
                      disabled={isAccepting}
                    >
                      {isAccepting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          {t.accepting}
                        </>
                      ) : (
                        t.acceptTest
                      )}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
